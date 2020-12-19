import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HomeSite from 'ray-online-coder/lib/site';
import defaultThumb from './../assets/dark-logo.png';

const baseUrl = 'https://unpkg.com/ray-site@latest';

const datas = [
  {
    key: 'online',
    text: '在线运行',
    children: [
      { key: 'af', text: 'amos-framework', href: '/online/af' },
      { key: 'a3d', text: 'amos-3d', href: '/online/a3d' },
      { key: 'r3d', text: 'base-r3d', href: '/online/r3d' },
      { key: 'codepen', text: 'codepen', href: 'https://codepen.io/' }
    ]
  },
  {
    key: 'docsite',
    text: '文档库',
    children: [
      { key: 'scroll', text: '滚动条', href: `${baseUrl}/demo/scroll-demo.html` },
      { key: 'viz', text: 'amos-viz', href: '/doc/viz' },
      { key: 'coder', text: 'amos-coder', href: '/doc/coder' },
      { key: 'map', text: 'amos-amap', href: '/doc/amap' }
    ]
  }
];

class Home extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return <HomeSite header="raysite 总站" navs={datas} defaultThumb={defaultThumb} />;
  }
}

export default Home;
