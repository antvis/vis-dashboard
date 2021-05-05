import React, { useEffect, useRef, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
// gatsby ssr not support Suspense&lazy https://github.com/gatsbyjs/gatsby/issues/11960
import loadable from '@loadable/component';
import { transform } from '@babel/standalone';
import { bind } from 'size-sensor';
import { Result } from 'antd';
import _ from 'lodash';
import styles from './try-it-page.module.less';

const MonacoEditor = loadable(() => import('react-monaco-editor'));

type Props = {
  /** 源代码 */
  source?: string;
};

const TryItPage = ({ source }: Props) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            extraLib
          }
        }
      }
    `
  );

  const { extraLib = '' } = site.siteMetadata;

  const containerNode = useRef<HTMLDivElement>();
  const playgroundNode = useRef<HTMLDivElement>();
  const [height, setHeight] = useState<number>();
  const [currentSourceCode, updateCurrentSourceCode] = useState('');
  const [compiledCode, updateCompiledCode] = useState();
  const [error, setError] = useState(null);

  if (typeof window !== 'undefined') {
    (window as any).__reportErrorInPlayGround = (e: Error) => {
      console.error('report error:', e); // eslint-disable-line no-console
      setError(e);
    };
  }

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
      console.error('e', e); // eslint-disable-line no-console
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
      {error ? (
        <Result status="error" title="There are some errors of code." />
      ) : (
        <div
          ref={playgroundNode}
          className={styles.playgroundResultWrapper}
          style={{ height: `${height}px` }}
        />
      )}
      <MonacoEditor
        language="javascript"
        theme="vs"
        value={currentSourceCode}
        options={options}
        onChange={value => updateCurrentSourceCode(value)}
        height={height}
        editorWillMount={monaco => {
          monaco.languages.typescript.javascriptDefaults.addExtraLib(
            extraLib,
            ''
          );
        }}
      />
    </div>
  );
};
export default TryItPage;
