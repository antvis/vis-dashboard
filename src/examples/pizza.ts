// @ts-nocheck
import { Chart, registerShape } from '@antv/g2';
import DataSet from '@antv/data-set';

const transpose = true;
const femaleColor = 'rgba(178,76,46,1)';
const maleColor = 'rgba(74,188,84,1)';
const averageColor = 'rgba(68, 67,39, 1)';
const healthyColor = 'rgba(58,57,39, .45)';
const unhealthyColor = 'rgba(75, 109, 84, .45)';
const unhealthyFoods = [
  'Ham(火腿)',
  'Chicken',
  'Pepperoni(意大利辣香肠)',
  'Beef',
  'Pork',
  'Tuna(金枪鱼)',
];

// 自定义 shape, 支持图片形式的气泡
registerShape('interval', 'range-interval', {
  draw(cfg, container) {
    const { points, data } = cfg;
    let path = [];
    path.push(['M', points[0].x, points[0].y]);
    path.push(['L', points[1].x, points[1].y]);
    path.push(['L', points[2].x, points[2].y]);
    path.push(['L', points[3].x, points[3].y]);
    path.push('Z');
    path = this.parsePath(path); // 将 0 - 1 转化为画布坐标
    const group = container.addGroup();
    if (transpose) {
      const height = path[0][2] - path[2][2];
      const width = path[1][1] - path[0][1];
      const x = path[0][1];
      const y = path[0][2];
      const radius = Math.min(width, height) / 2;
      group.addShape('rect', {
        attrs: {
          x, // 矩形起始点为左上角
          y: y - height,
          width,
          height,
          fill: unhealthyFoods.includes(data.type)
            ? unhealthyColor
            : healthyColor,
          radius,
        },
      });
      group.addShape('circle', {
        attrs: {
          x: x + width / 2, // 矩形起始点为左上角
          y: y - height + radius,
          fill: averageColor,
          r: radius * 0.65,
        },
      });
      group.addShape('circle', {
        name: Number(data.female) === data.range[0] ? 'Female' : 'Male',
        attrs: {
          x: x + radius, // 矩形起始点为左上角
          y: y - height + radius,
          fill: Number(data.female) === data.range[0] ? femaleColor : maleColor,
          r: radius * 0.65,
        },
      });
      group.addShape('circle', {
        name: Number(data.female) === data.range[1] ? 'Female' : 'Male',
        attrs: {
          x: x + width - radius, // 矩形起始点为左上角
          y: y - height + radius,
          fill: Number(data.female) === data.range[1] ? femaleColor : maleColor,
          r: radius * 0.65,
        },
      });
    } else {
      const width = path[2][1] - path[1][1];
      const height = path[0][2] - path[1][2];
      // 矩形起始点为左上角
      const x = path[1][1];
      const y = path[1][2];
      const radius = Math.min(width, height) / 2;
      group.addShape('rect', {
        attrs: {
          x,
          y,
          width,
          height,
          fill: unhealthyFoods.includes(data.type)
            ? unhealthyColor
            : healthyColor,
          radius: Math.min(width, height) / 2,
        },
      });
      // 中间 circle
      group.addShape('circle', {
        attrs: {
          x: x + width / 2, // 矩形起始点为左上角
          y: y + height / 2,
          fill: averageColor,
          r: radius * 0.65,
        },
      });
      // 底部 circle
      group.addShape('circle', {
        name: Number(data.female) === data.range[0] ? 'Female' : 'Male',
        attrs: {
          x: x + radius, // 矩形起始点为左上角
          y: y + height - radius,
          fill: Number(data.female) === data.range[0] ? femaleColor : maleColor,
          r: radius * 0.65,
        },
      });
      // 顶部 circle
      group.addShape('circle', {
        name: Number(data.female) === data.range[0] ? 'Female' : 'Male',
        attrs: {
          x: x + width - radius, // 矩形起始点为左上角
          y: y + radius,
          fill: Number(data.female) === data.range[1] ? femaleColor : maleColor,
          r: radius * 0.65,
        },
      });
    }

    return group;
  },
});

fetch('https://gw.alipayobjects.com/os/antfincdn/Qr8VKD5zY8/pizza-data.json')
  .then(data => data.json())
  .then(data => {
    const chart = new Chart({
      container: 'container',
      autoFit: true,
      height: 500,
      theme: {
        background: 'rgb(29,29,29)',
      },
      appendPadding: [18, 0, 0, 8],
    });
    const ds = new DataSet();
    const dv = ds.createView().source(data);

    dv.transform({
      type: 'map',
      callback(row) {
        const high = Math.max(row.female, row.male);
        const low = Math.min(row.female, row.male);
        // 加工数据后返回新的一行，默认返回行数据本身
        row.range = [low, high];
        return row;
      },
    });

    const view0 = chart.createView({
      region: {
        start: { x: 0, y: 0 },
        end: { x: 1, y: 0.25 },
      },
    });

    const imageWidth = 100;
    const imageX =
      chart.canvas.get('el').getBoundingClientRect().width / 2 - imageWidth / 2;

    const imageShape = view0.foregroundGroup.addShape('image', {
      attrs: {
        x: imageX,
        y: 0,
        width: imageWidth,
        height: 150,
        img:
          'https://gw.alipayobjects.com/zos/antfincdn/5WAWk6mp%24%26/pizza-image.jpeg',
        rotate: Math.PI / 2,
        style: {},
      },
    });

    imageShape.rotateAtPoint(
      imageX + imageWidth / 2,
      imageShape.getBBox().y + imageShape.getBBox().height / 2,
      -Math.PI / 2
    );

    const view = chart.createView({
      region: {
        start: { x: 0, y: 0.25 },
        end: { x: 1, y: 1 },
      },
      appendPadding: [0, 20, 0, 0],
    });
    view.data(dv.rows);

    if (transpose) {
      view.coordinate().transpose();
    }

    view.tooltip({
      showMarkers: false,
    });

    view.axis('type', {
      label: {
        autoRotate: transpose ? false : true,
      },
    });
    view.axis('range', {
      label: {
        formatter: text => `${text}%`,
      },
      grid: {
        line: {
          style: {
            lineDash: [4, 4],
            strokeOpacity: 0.05,
          },
        },
      },
    });

    view
      .interval()
      .position('type*range')
      .shape('range-interval')
      .animate({
        appear: {
          animation: 'fade-in',
        },
      });

    chart.tooltip({
      shared: true,
      showMarkers: false,
      customContent: (title, items) => {
        let content = '';
        const markerStyle =
          'display:inline-block;border-radius:6px;width:6px;height:6px;margin-right:8px;';
        items.forEach(item => {
          content += `<div style="margin:4px 0;"><span style="${markerStyle}background:${femaleColor}"></span>female: ${item.data.female}</div>`;
          content += `<div style="margin:4px 0;"><span style="${markerStyle}background:${maleColor}"></span>male: ${item.data.male}</div>`;
          content += `<div style="margin:4px 0;"><span style="${markerStyle}background:${averageColor}"></span>average: ${item.data.average}</div>`;
        });
        return `<div class="g2-tooltip" style="padding:8px;">
        <div style="font-size:16px;margin:8px 0;">${title}</div>
        ${content}
      </duv>`;
      },
    });

    view.legend({
      custom: true,
      items: [
        {
          value: 'Female',
          name: 'Female',
          marker: { symbol: 'circle', style: { fill: femaleColor, r: 5 } },
        },
        {
          value: 'Male',
          name: 'Male',
          marker: { symbol: 'circle', style: { fill: maleColor, r: 5 } },
        },
        {
          value: 'average',
          name: 'Average',
          marker: { symbol: 'circle', style: { fill: averageColor, r: 5 } },
        },
        {
          value: 'high-calories',
          name: 'High calories',
          marker: {
            symbol: 'circle',
            style: { fill: unhealthyColor, r: 5 },
          },
        },
        {
          value: 'low-calories',
          name: 'Low calories',
          marker: {
            symbol: 'square',
            style: { fill: healthyColor, r: 5 },
          },
        },
      ],
    });

    view.interaction('element-active');
    view.interaction('active-region');
    view.render();
    chart.render();

    const shapes = view.geometries[0].getShapes().reduce((result, shape) => {
      // @ts-ignore
      return [...result, ...shape.getChildren()];
    }, []);

    view.on('legend-item:click', e => {
      const delegateObject = e.gEvent.delegateObject;
      shapes.forEach(shape => {
        if (shape.get('name') === delegateObject.item.value) {
          shape.animate(
            {
              opacity: delegateObject.item.unchecked ? 1 : 0,
            },
            200
          );
        }
      });
    });

    let size = 0;
    view.on('legend-item:mouseenter', e => {
      const delegateObject = e.gEvent.delegateObject;
      shapes.forEach(shape => {
        if (shape.get('name') === delegateObject.item.value) {
          size = shape.attr('r');
          shape.animate(
            {
              r: 6,
            },
            200
          );
        }
      });
    });

    view.on('legend-item:mouseleave', e => {
      const delegateObject = e.gEvent.delegateObject;
      shapes.forEach(shape => {
        if (shape.get('name') === delegateObject.item.value) {
          shape.animate({ r: size }, 200);
        }
      });
    });
  });
