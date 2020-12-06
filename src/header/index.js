import React, { Component } from 'react';
import { DropNav } from 'amos-framework';
import PropTypes from 'prop-types';

class Header extends Component {

  render() {
    return (
      <div className="header-row">
        <div className="sys-extend">
          <DropNav navs={this.props.navs} />
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  navs: PropTypes.array
};

export default Header;
