import React from 'react';
import _ from 'lodash';
import Layout from '@/layouts/layout';
import { Home } from '@/components/base/home';
import GalleryMeta from '@/examples/meta.json';

export default () => {
  const lang = 'zh';
  const dashboards = [
    {
      image:
        'https://gw.alipayobjects.com/zos/antfincdn/BPnCLgmtzC/1096*560_light.png',
      darkImage:
        'https://gw.alipayobjects.com/zos/antfincdn/0GDWIEjbkO/1094*560.png',
      name: 'C 端场景',
      path: 'dashboard-a',
    },
    {
      image:
        'https://gw.alipayobjects.com/zos/antfincdn/n%268Jqw3vKF/1096*560_light.png',
      darkImage:
        'https://gw.alipayobjects.com/zos/antfincdn/YI%241xJfKMf/2094*560.png',
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

  const charts = GalleryMeta.demos.map((d: any) => ({
    ..._.omit(d, ['screenshots', 'title', 'pathname']),
    image: d.screenshots.default,
    darkImage: d.screenshots.dark,
    name: d.title[lang],
    path: `gallery/${d.pathname}`,
  }));

  /** 三方图表 */
  const thirdPartyCharts = [...GalleryMeta.third];

  return (
    <Layout siteTitle="可视化精选集666">
      <Home
        dashboards={dashboards}
        charts={charts}
        thirdPartyCharts={thirdPartyCharts}
      />
    </Layout>
  );
};
