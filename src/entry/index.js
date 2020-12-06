/**
 *
 * @authors ilex
 * @date    2016-07-18 16:42:35
 * @description 主入口模块
 */

import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'amos-react-router';
import RProgress from 'ray-progress';

import rootRoutes from './../routes';
import './../styles/index.scss';

const onUpdate = () => {
  RProgress.done();
  window.scrollTo(0, 0);
};

render(<Router onUpdate={() => onUpdate()} history={hashHistory} routes={rootRoutes} />, document.getElementById('app'));

// 开发模式下开启 热加载 (不需要开启时，屏蔽一下代码即可)
if (module.hot) {
  module.hot.accept();
}
