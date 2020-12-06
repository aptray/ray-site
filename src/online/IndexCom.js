import React, { Component } from 'react';
import PropTypes from 'prop-types';

class IndexCom extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

IndexCom.propTypes = {
  children: PropTypes.node
};

export default IndexCom;
