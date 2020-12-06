import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './header';

const navs = [
  {
    key: 'online',
    text: '在线运行',
    href: '/online',
    subSys: [
      {
        key: 'af',
        text: 'amos-framework',
        href: '/online/af',
        isIndex: true
      }
    ]
  }
];

class RootView extends Component {
  render() {
    return (
      <div className="view-port">
        <div className="header">
          <Header navs={navs} />
        </div>
        <div className="content-body">{this.props.children}</div>
      </div>
    );
  }
}

RootView.propTypes = {
  children: PropTypes.node
};

export default RootView;
