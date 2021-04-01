import React from 'react';
import Layout from '@/layouts/layout';
import { Home } from '@/components/base/home';

export default () => {
  const dashboards = [
    {
      image:
        'https://gw.alipayobjects.com/zos/antfincdn/wuk2prOsEL/placeholder.png',
      name: 'C 端场景',
      path: 'dashboard-a',
    },
    {
      image:
        'https://gw.alipayobjects.com/zos/antfincdn/wuk2prOsEL/placeholder.png',
      name: '监控场景',
      path: 'monitor-template',
    },
    {
      image:
        'https://gw.alipayobjects.com/zos/antfincdn/wuk2prOsEL/placeholder.png',
      name: '建设中',
      path: null,
    },
    {
      image:
        'https://gw.alipayobjects.com/zos/antfincdn/wuk2prOsEL/placeholder.png',
      name: '建设中',
      path: null,
    },
  ];

  return (
    <Layout siteTitle="可视化精选集" themeSwitcher={false}>
      <Home dashboards={dashboards} />
    </Layout>
  );
};
