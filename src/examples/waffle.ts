import { Scatter, G2 } from '@antv/g2plot';

function registerShape(shapeName, func) {
  G2.registerShape('point', shapeName, {
    draw(cfg, container) {
      const { x, y, size, color, style } = cfg;
      const opacity = style?.opacity || 1;
      return container.addShape('path', {
        attrs: {
          path: func?.(x, y, size * 2, size * 2),
          fill: opacity < 1 ? `l(270): 0:${color} ${opacity}:#fff` : color,
          lineWidth: 0.2,
          stroke: color,
        },
      });
    },
    getMarker(markerCfg) {
      const { color } = markerCfg;
      return {
        symbol: (x, y, r) => func?.(x, y, 10, 10),
        style: {
          fill: color,
          stroke: null,
        },
      };
    },
  });
}

registerShape('heart', (x, y, width, height) => {
  const r = width / 4;
  const dx = x - width / 2;
  const dy = y - height / 2;
  return [
    ['M', dx, dy + r * 2],
    ['A', r, r, 0, 0, 1, x, dy + r],
    ['A', r, r, 0, 0, 1, dx + width, dy + r * 2],
    ['L', x, dy + height],
    ['L', dx, dy + r * 2],
    ['Z'],
  ];
});
registerShape('star', (x, y, width, height) => {
  const path = [];
  const w = Math.min(width, height);

  for (let i = 0; i < 5; i++) {
    path.push([
      i === 0 ? 'M' : 'L',
      (Math.cos(((18 + i * 72) * Math.PI) / 180) * w) / 2 + x,
      (-Math.sin(((18 + i * 72) * Math.PI) / 180) * w) / 2 + y,
    ]);
    path.push([
      'L',
      (Math.cos(((54 + i * 72) * Math.PI) / 180) * w) / 4 + x,
      (-Math.sin(((54 + i * 72) * Math.PI) / 180) * w) / 4 + y,
    ]);
  }
  path.push(['Z']);
  return path;
});
registerShape('pin', (x, y, width, height) => {
  const w = (width * 2) / 3;
  const h = Math.max(w, height);
  const r = w / 2;

  // attrs of the upper circle
  const cx = x;
  const cy = r + y - h / 2;
  const theta = Math.asin(r / ((h - r) * 0.85));
  const dy = Math.sin(theta) * r;
  const dx = Math.cos(theta) * r;

  // the start point of the path
  const x0 = cx - dx;
  const y0 = cy + dy;

  // control point
  const cpX = x;
  const cpY = cy + r / Math.sin(theta);

  return [
    ['M', x0, y0],
    ['A', r, r, 0, 1, 1, x0 + dx * 2, y0],
    ['Q', cpX, cpY, x, y + h / 2],
    ['Q', cpX, cpY, x0, y0],
    ['Z'],
  ];
});
const data = [
  { name: 'pin', value: 10 },
  { name: 'diamond', value: 60 },
  { name: 'heart', value: 40 },
  { name: 'star', value: 50 },
];

const box = document.getElementById('container').getBoundingClientRect();
const ratio = box.width / box.height;

const rows = 12;
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
  size: 12,
  tooltip: { showCrosshairs: false, fields: ['name', 'value', 'percentage'] },
  xAxis: false,
  yAxis: false,
  // @ts-ignore
  rawFields: ['percentage'],
  shape: ({ name }) => {
    return name;
  }, // 根据具体的字段指定 shape
  pointStyle: ({ name, percentage }) => {
    return {
      lineWidth: name ? 1 : 0,
      opacity: Number.isNaN(percentage) ? 0 : Math.max(percentage, 0.2),
    };
  },
  interactions: [{ type: 'element-active' }],
});
plot.render();
