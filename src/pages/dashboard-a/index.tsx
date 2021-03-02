import React, { useEffect, useState } from 'react';
import Layout from '@/layouts/layout';
import { parse } from '@/components/x-plot/common/parse';
import { reportJSON } from '@/datas/dashboard-a';
import './index.less';

const SecondPage = () => {
  const [json, updateJson] = useState(reportJSON);

  useEffect(() => {
    const observer = new MutationObserver(([record]) => {
      // temp1[0].target.getAttribute(temp1[0].attributeName)
      if (record.target.nodeName === 'BODY' && record.attributeName === 'data-theme') {
        const theme = document.body.dataset.theme;
        updateJson({ ...json, theme });
      }
    });

    observer.observe(document.body, { attributes: true });
  }, []);

  return (
    <Layout siteTitle="商家经营状况分析">
      <div className="x-canvas">{parse(json)}</div>
    </Layout>
  );
};

export default SecondPage;
