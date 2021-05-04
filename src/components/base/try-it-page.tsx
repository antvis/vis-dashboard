import React, { useEffect, useRef, useState } from 'react';
import MonacoEditor from 'react-monaco-editor';
import { transform } from '@babel/standalone';
import _ from 'lodash';
import { bind } from 'size-sensor';
import styles from './try-it-page.module.less';

const TryItPage = () => {
  const containerNode = useRef<HTMLDivElement>();
  const playgroundNode = useRef<HTMLDivElement>();
  const [height, setHeight] = useState<number>();
  const [currentSourceCode, updateCurrentSourceCode] = useState('');
  const [compiledCode, updateCompiledCode] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    const container = containerNode.current;
    let unbind;
    if (container) {
      unbind = bind(container, () => {
        setHeight(containerNode?.current?.getBoundingClientRect().height);
        console.log('resize');
      });
    }
    return () => {
      unbind && unbind();
    };
  }, [containerNode]);

  /** 初始化 mounted */
  useEffect(() => {
    updateCurrentSourceCode(`import { Line } from '@antv/g2plot';

    function getData() {
      // generate an array of random data
      const data = [];
      const time = new Date().getTime();
    
      for (let i = -19; i <= 0; i += 1) {
        data.push({
          x: time + i * 1000,
          y: Math.random() + 0.2,
        });
      }
      return data;
    }
    
    const line = new Line('container', {
      data: getData(),
      padding: 'auto',
      xField: 'x',
      yField: 'y',
      xAxis: {
        type: 'time',
        mask: 'HH:MM:ss',
      },
      smooth: true,
      point: {},
    });
    
    line.render();
    `);
  }, []);

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
    node.innerHTML = '';
    const div = document.createElement('div');
    div.id = 'container';
    div.style.width = '90%';
    div.style.height = '90%';
    node!.appendChild(div);
    const script = document.createElement('script') as HTMLScriptElement;
    script.id = 'custom-script';
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
