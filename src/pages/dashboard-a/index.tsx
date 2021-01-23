import React from 'react';
import Layout from '@/layouts/layout';
import { parse } from '@/components/x-plot/common/parse';
import { reportJSON } from '@/datas/dashboard-a';
import './index.less';

const SecondPage = () => (
  <Layout siteTitle="商家经营状况分析">
    <div className="x-canvas">{parse(reportJSON)}</div>
  </Layout>
);

export default SecondPage;
