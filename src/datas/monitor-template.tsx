import { StarFilled, AlertFilled, SettingFilled, AlertOutlined, FileTextOutlined } from '@ant-design/icons';
import React from 'react';
export const monitorJson = {
  theme: 'light',
  // layouts 部分，可以加上hash #mode=edit 然后页面拖拽调整完大小，替换保存就行(只需要 i、x、y、w、h)
  layouts: {
    root: {
      lg: [
        { w: 6, h: 5, x: 0, y: 0, i: 'a', moved: false, static: false },
        { w: 6, h: 5, x: 6, y: 0, i: 'b', moved: false, static: false },
        { w: 6, h: 5, x: 12, y: 0, i: 'c', moved: false, static: false },
        { w: 6, h: 5, x: 18, y: 0, i: 'd', moved: false, static: false },
        { w: 6, h: 11, x: 0, y: 5, i: "e", moved: false, static: false },
        { w: 18, h: 11, x: 6, y: 5, i: "f", moved: false, static: false },
        { w: 24, h: 11, x: 0, y: 16, i: "g", moved: false, static: false },
        { w: 24, h: 12, x: 0, y: 27, i: "h", moved: false, static: false },
        { w: 12, h: 11, x: 0, y: 40, i: "i", moved: false, static: false },
        { w: 12, h: 11, x: 12, y: 40, i: "j", moved: false, static: false },
      ],
      xs: [
        { i: ' a', x: 0, y: 0, w: 12, h: 6 },
        { i: ' b', x: 0, y: 6, w: 12, h: 8 },
        { i: ' c', x: 7, y: 22, w: 5, h: 13 },
        { i: ' d', x: 0, y: 22, w: 7, h: 13 },
        { i: ' e', x: 0, y: 14, w: 6, h: 8 },
        { i: ' f', x: 6, y: 14, w: 6, h: 8 },
        { i: ' g', x: 6, y: 35, w: 6, h: 14 },
        { i: ' h', x: 0, y: 73, w: 6, h: 14 },
        { i: ' i', x: 0, y: 49, w: 12, h: 13 },
        { i: ' j', x: 0, y: 62, w: 12, h: 11 },
        { i: ' k', x: 6, y: 73, w: 6, h: 14 },
        { i: ' l', x: 0, y: 35, w: 6, h: 14 }]
    },
  },
  content: {
    tag: 'panel',
    id: 'root',
    attributes: {},
    children: [
      {
        tag: 'statistic',
        id: 'a',
        attributes: {
          measures: ['monitor_count'],
          meta: {
            monitor_count: {
              alias: '监控总数',
              icon: <StarFilled style={{
                width: 42,
                height: 42,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 21,
                color: "#1890FF",
                backgroundColor: "rgba(0,145,255,0.10)",
                fontSize: 20
              }} />,
            },
          },
          data: [
            {
              monitor_count: 21,
            },
          ],
        },
      },
      {
        tag: 'statistic',
        id: 'b',
        attributes: {
          measures: ['healthy_app_count'],
          meta: {
            healthy_app_count: {
              alias: '健康应用数',
              icon: <div style={{
                width: 42,
                height: 42,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 21,
                backgroundColor: "rgba(151,226,185,0.19)",
              }}>
                <img src="https://gw.alipayobjects.com/zos/antfincdn/NIqMtBCxlB/xindian.png" style={{ width: 20, height: 20 }} />
              </div>,
            },
          },
          data: [
            {
              healthy_app_count: 19,
            },
          ],
        },
      },
      {
        tag: 'statistic',
        id: 'c',
        attributes: {
          measures: ['anomaly_app_counts'],
          meta: {
            anomaly_app_counts: {
              alias: '异常应用数',
              icon: <AlertFilled style={{
                width: 42,
                height: 42,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 21,
                color: "#F5212C",
                backgroundColor: "rgba(254,101,86,0.13)",
                fontSize: 20
              }} />,
            },
          },
          data: [
            {
              anomaly_app_counts: 2,
            },
          ],
        },
      },
      {
        tag: 'statistic',
        id: 'd',
        attributes: {
          measures: ['custom_count'],
          meta: {
            custom_count: {
              alias: '自定义大盘',
              icon: <SettingFilled style={{
                width: 42,
                height: 42,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 21,
                color: "#F5A623",
                backgroundColor: "rgba(255,193,127,0.19)",
                fontSize: 20
              }} />,
            },
          },
          data: [
            {
              custom_count: 5,
            },
          ],
        },
      },
      {
        tag: 'liguid',
        id: 'e',
        attributes: {
          title: '访问频次发布',
          width: 400,
          height: 400,
          autoFit: true,
          radius: 1,
          percent: 0.32,
          outline: {
            distance: 2,
          },
          statistic: {
            title: {
              formatter: () => '资源剩余',
            },
            content: {
              customHtml: (container, view, { percent }) => {
                const text = `${(percent * 100).toFixed(0)}%`;
                return text;
              }
            }
          }
        }
      },
      {
        tag: 'area',
        id: 'f',
        // 面积图扩展。attribues 扩展 explaination （注意下，屏幕小的时候，布局自动变换为 上下）
        attributes: {
          title: '整体流量趋势',
          data: [{ "type": "板烧鸡腿堡", "value": 830 }, { "type": "薯条", "value": 780 }, { "type": "鸡翅", "value": 730 }, { "type": "吮指原味鸡块", "value": 560 }, { "type": "超值全家桶套餐", "value": 510 }, { "type": "薯饼", "value": 370 }, { "type": "老北京鸡肉卷", "value": 330 }, { "type": "玉米沙拉杯", "value": 280 }, { "type": "黑金牛肉堡", "value": 220 }, { "type": "吉士汉堡", "value": 130 }],
          xField: 'type',
          yField: 'value',
          color: ['#6193FA'],
          areaStyle: ({type}) => ({
            fill: `l(90) 0.5:#6193FA 1:rgba(255,255,255,0.2)`
          }),
          // 抽取一个组件 Exlaination （组件注释下使用）
          explaination: {
            title: '专家分析',
            details: [
              {
                icon: <FileTextOutlined />,
                title: '总体情况',
                description: '这里可以放几条分析结论。根据金融学理论，资产分散能降低风险。'
              },
              {
                icon: <AlertOutlined />,
                title: '值得关注',
                description: '这里可以放几条分析结论。资产分散能降低风险。'
              },
              {
                icon: <AlertOutlined />,
                title: '值得关注',
                description: '这里可以放几条分析结论。资产分散能降低风险。'
              },
              {
                icon: <AlertOutlined />,
                title: '值得关注',
                description: '这里可以放几条分析结论。资产分散能降低风险。'
              },
            ]
          }
        }
      },
      {
        tag: 'column',
        id: 'g',
        attributes: {
          title: '业务域报警发布',
          data: 'https://gw.alipayobjects.com/os/antfincdn/VpJKHWT3Yl/monitor-data1.json',
          isStack: true,
          xField: 'time',
          yField: 'value',
          seriesField: 'type',
          color: ['#740000', '#DC3535', '#ED4A15', '#F3971B'],
          legend: {
            position: 'top-left',
          },
        }
      },
      {
        tag: 'line',
        id: 'h',
        attributes: {
          title: '秒级总量监控',
          data: 'https://gw.alipayobjects.com/os/antfincdn/hVbmBcXCIZ/monitor-data1.json',
          xField: 'time',
          yField: 'value',
          seriesField: 'type',
          legend: false,
          isStack: false,
          color: ['#0362C5', '#ACBCD8', '#008CAF', '#6193FA', '#81ADFD', '#00A6CA', '#4DDCF4'],
          legendTable: {
            show: true,
            showColumnList: ['max', 'current']
          }
        }
      },
      {
        tag: 'area',
        id: 'i',
        attributes: {
          title: '分区秒级监控',
          data:
            'https://gw.alipayobjects.com/os/antfincdn/dfW6g0i1Et/monitor-line-data1.json',
          xField: 'date',
          yField: 'value',
          seriesField: 'type',
          color: ['#00A6CA', '#18C1E4', '#3E7AE1', '#6193FA']
        }
      },
      {
        tag: 'area',
        id: 'j',
        attributes: {
          title: '分层秒级监控',
          data: 'https://gw.alipayobjects.com/os/antfincdn/PqzDdcD%26zL/monitor-line-data1.json',
          xField: 'date',
          yField: 'value',
          seriesField: 'type',
          meta: {
            value: {
              maxLimit: 55
            }
          },
          isStack: false,
          color: ['#6193FA', '#00A6CA',],
          areaStyle: ({ type }) => {
            return {
              fill: type === 'Web' ? '#6193FA' : 'transparent'
            }
          },
        }
      }
    ],
  },
};
