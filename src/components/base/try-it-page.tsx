import React, { useEffect, useRef, useState } from 'react';
import MonacoEditor from 'react-monaco-editor';
import { transform } from '@babel/standalone';
import { bind } from 'size-sensor';
import _ from 'lodash';
import styles from './try-it-page.module.less';

type Props = {
  /** 源代码 */
  source?: string;
};

const TryItPage = ({ source }: Props) => {
  const containerNode = useRef<HTMLDivElement>();
  const playgroundNode = useRef<HTMLDivElement>();
  const [height, setHeight] = useState<number>();
  const [currentSourceCode, updateCurrentSourceCode] = useState('');
  const [compiledCode, updateCompiledCode] = useState();
  const [error, setError] = useState(null);

  /**
   * 绑定 resize 监听
   */
  useEffect(() => {
    const container = containerNode.current;
    let unbind;
    if (container) {
      unbind = bind(container, () => {
        setHeight(containerNode?.current?.getBoundingClientRect().height);
      });
    }
    return () => {
      unbind && unbind();
    };
  }, [containerNode]);

  /**
   * 绑定内容更新
   */
  useEffect(() => {
    updateCurrentSourceCode(source);
  }, [source]);

  useEffect(() => {
    try {
      const { code } = transform(currentSourceCode, {
        filename: '', // relativePath,
        presets: ['react', 'typescript', 'es2015', 'stage-3'],
        plugins: ['transform-modules-umd'],
      });
      updateCompiledCode(code);
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
      setError(e);
      return;
    }
    setError(null);
  }, [currentSourceCode]);

  const execute = _.debounce((code: string, node: HTMLDivElement) => {
    // 先清空
    node.innerHTML = '';

    const div = document.createElement('div');
    div.setAttribute('id', 'container');
    div.setAttribute('style', 'width:90%;height:90%;');
    node!.appendChild(div);
    const script = document.createElement('script') as HTMLScriptElement;
    script.innerHTML = `
        try {
          ${code}
        } catch(e) {
          if (window.__reportErrorInPlayGround) {
            window.__reportErrorInPlayGround(e);
          }
        }
      `;
    node!.appendChild(script);
  }, 500);

  /** 编译代码 */
  const executeCode = () => {
    if (!compiledCode || !playgroundNode || !playgroundNode.current) {
      return;
    }
    execute(compiledCode, playgroundNode.current);
  };

  useEffect(() => {
    executeCode();
  }, [compiledCode, error]);

  const options = {
    selectOnLineNumbers: true,
    scrollBeyondLastLine: false,
    fixedOverflowWidgets: true,
    lineNumbersMinChars: 4,
    tabSize: 2,
    showFoldingControls: 'always' as const,
    foldingHighlight: true,
  };

  return (
    <div className={styles.tryItPage} ref={containerNode}>
      <div
        ref={playgroundNode}
        className={styles.playgroundResultWrapper}
        style={{ height: `${height}px` }}
      />
      <MonacoEditor
        language="javascript"
        theme="vs"
        value={currentSourceCode}
        options={options}
        onChange={value => updateCurrentSourceCode(value)}
        height={height}
      />
    </div>
  );
};
export default TryItPage;
