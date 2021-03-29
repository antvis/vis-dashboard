import React, { useEffect } from 'react';
import CodeLoading from './code-loading';

const PageLoading: React.FC = () => {
  useEffect(() => {
    // 为了确保遮罩层下，没有滚动事件
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = oldOverflow;
    };
  }, []);

  return (
    <div style={{ height: '100vh' }}>
      <CodeLoading />
    </div>
  );
};

export default PageLoading;
