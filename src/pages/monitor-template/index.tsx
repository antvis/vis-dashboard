import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import Layout from '@/layouts/layout';
import { parse } from '@/components/x-plot/common/parse';
import { monitorJson } from '@/dashboards/monitor-template';
import dashboardStyles from '@/styles/dashboard.module.less';
import '@/styles/dark.less';
import styles from './index.module.less';

const isBrowser = typeof document !== 'undefined';

const SecondPage = () => {
  const [themeMode, setThemeMode] = useState<string>();
  const [json, updateJson] = useState(monitorJson);

  useEffect(() => {
    setThemeMode(isBrowser ? document.body.dataset.theme : '');

    const observer = new MutationObserver(([record]) => {
      if (
        record.target.nodeName === 'BODY' &&
        record.attributeName === 'data-theme'
      ) {
        setThemeMode(isBrowser ? document.body.dataset.theme : '');
      }
    });

    observer.observe(document.body, { attributes: true });
  }, []);

  useEffect(() => {
    updateJson({ ...json, theme: themeMode });
  }, [themeMode]);

  return (
    <Layout
      siteTitle="监控大盘"
      headerClassName={cx(dashboardStyles.header, styles.header)}
      mainClassName={dashboardStyles.main}
      footerClassName={styles.footer}
    >
      <div className={styles.xCanvas}>{parse(json)}</div>
    </Layout>
  );
};

export default SecondPage;
