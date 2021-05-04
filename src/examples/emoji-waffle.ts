import { Scatter, G2 } from '@antv/g2plot';
import { DataView } from '@antv/data-set';
import { each } from 'lodash';
import { message } from 'antd';

// ref: https://stackoverflow.com/a/46118025
export function copyToClipboard(text) {
  var dummy = document.createElement('input');
  document.body.appendChild(dummy);
  dummy.setAttribute('value', text);
  dummy.select();
  const result = document.execCommand('copy');
  document.body.removeChild(dummy);
  if (result) {
    message.success(`复制 ${text} 成功`);
  }
}

fetch('https://gw.alipayobjects.com/os/antfincdn/RREr%24bnyJf/emoji-data.json')
  .then(data => data.json())
  .then(result => {
    const dv = new DataView().source(result);
    dv.transform({
      type: 'partition',
      groupBy: ['emoji'], // 以year字段进行分组
    });
    const data = [];
    each(dv.rows, values => {
      const v = values[0];
      data.push({ ...v, value: values.length, name: v.d, emojiCode: v.d });
    });

    function registeEmoji(name, emojiCode) {
      G2.registerShape('point', name, {
        draw(cfg, container) {
          const { x, y, size, color: fill } = cfg;
          const fontSize = size * 2;
          return container.addShape('text', {
            attrs: {
              ...cfg?.style,
              text: String.fromCodePoint(parseInt(emojiCode, 16)),
              // @ts-ignore
              x: x - fontSize / 2,
              // @ts-ignore
              y: y + fontSize / 2 + 1,
              fill,
              fontSize,
            },
          });
        },
        getMarker() {
          return { symbol: 'circle', style: { lineWidth: 0, r: 0 } };
        },
      });
    }

    data.forEach(d => {
      if (d.emojiCode) {
        registeEmoji(d.name, d.emojiCode);
      }
    });

    const box = document.getElementById('container').getBoundingClientRect();
    const ratio = box.width / box.height;

    const rows = 10;
    const cols = rows * ratio;

    const waffleData = [];
    const step = data.reduce((a, b) => a + b.value, 0) / (rows * cols);

    let idx = 0;
    let weight = 0;
    for (let col = 0; col < cols + 1; col++) {
      for (let row = 0; row < rows; row++) {
        if (idx > data.length) {
          break;
        }
        waffleData.push({
          ...data[idx],
          y: `${row}`,
          x: `${col}`,
          percentage: Math.min((data[idx]?.value - weight) / step, 1),
        });
        weight += step;
        if (weight >= data[idx]?.value) {
          idx += 1;
          // 重置
          weight = 0;
        }
      }
    }

    const plot = new Scatter('container', {
      data: waffleData,
      xField: 'x',
      yField: 'y',
      colorField: 'name',
      shapeField: 'name',
      size: ({ percentage }) => Math.max(percentage, 0.5) * 10,
      tooltip: { showCrosshairs: false, fields: ['name', 'value'] },
      xAxis: false,
      yAxis: false,
      rawFields: ['percentage'],
      shape: ({ name }) => {
        return name;
      }, // 根据具体的字段指定 shape
      pointStyle: ({ name }) => {
        return {
          lineWidth: name ? 1 : 0,
        };
      },
      legend: {
        marker: {
          spacing: 0,
        },
        itemName: {
          formatter: (text, item, idx) => {
            return data[idx].emojiCode
              ? String.fromCodePoint(parseInt(data[idx].emojiCode, 16))
              : '';
          },
        },
        itemValue: {
          formatter: text => {
            return text;
          },
          style: {
            fill: 'rgba(255,255,255,0.65)',
          },
        },
        // @ts-ignore
        itemStates: {
          unchecked: {
            nameStyle: {
              fillOpacity: 0.45,
            },
            valueStyle: {
              fillOpacity: 0.45,
            },
          },
        },
      },
      state: {
        active: {
          style: {
            shadowColor: 'rgba(100, 100,100, 0.25)',
            shadowBlur: 15,
          },
        },
      },
      interactions: [
        {
          type: 'element-active',
          cfg: {
            start: [
              {
                trigger: 'element:mouseenter',
                action: ['cursor:pointer', 'element-active:active'],
              },
            ],
            end: [
              {
                trigger: 'element:mouseleave',
                action: ['cursor:default', 'element-active:reset'],
              },
            ],
          },
        },
      ],
    });
    plot.render();

    plot.on('element:click', event => {
      const emoji = event.data?.data?.emoji;
      copyToClipboard(emoji);
    });
  });
