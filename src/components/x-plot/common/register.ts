import { XPanel } from '@/components/x-container/panel';
import Not_Found from '../not-found';
import { XPie } from '../pie';
import { XBar } from '../bar';
import { XColumn } from '../column';
import { XLine } from '../line';
import { XRadialBar } from '../radial-bar';
import { XRingProgress } from '../ring-progress';
import { XArea } from '../area';
import { XSankey } from '../sankey';
import { XScatter } from '../scatter';
import { XGauge } from '../gauge';
import { XStatistic } from '../statistic';
import { XLiquid } from '../liquid';

/**
 * 组件池子
 */
const COMPONENTS_POOL = {};

/**
 * 注册组件
 */
function registerComponent(type: string, XComponent) {
  COMPONENTS_POOL[type] = XComponent;
}

/**
 * 获取组件
 */
export function getXComponent(type: string) {
  return COMPONENTS_POOL[type] || Not_Found;
}

registerComponent('pie', XPie);
registerComponent('line', XLine);
registerComponent('column', XColumn);
registerComponent('bar', XBar);
registerComponent('ring-progress', XRingProgress);
registerComponent('radial-bar', XRadialBar);
registerComponent('area', XArea);
registerComponent('sankey', XSankey);
registerComponent('scatter', XScatter);
registerComponent('gauge', XGauge);
registerComponent('statistic', XStatistic);
registerComponent('liquid', XLiquid);

/**
 * 容器，可以创建 react-grid-layout
 */
registerComponent('panel', XPanel);
