import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RootView extends Component {
  render() {
    return (
      <div className="rootview">
        {this.props.children}
      </div>
    );
  }
}

RootView.propTypes = {
  children: PropTypes.node
};

export default RootView;
