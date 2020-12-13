import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

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

  renderGroup = () => {
    return datas.map(d => {
      return (
        <div key={d.key} className="site-group">
          <div className="site-group-header">{d.text}</div>
          <ul className="site-group-body">
            {d.children.map(child => <Item {...child} key={child.key} />)}
          </ul>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="site-home">
        <div className="site-header">raysite 总站</div>
        <div className="site-list">
          {this.renderGroup()}
        </div>
      </div>
    );
  }
}

export default Home;
