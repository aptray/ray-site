import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'amos-react-router';
import defaultThumb from './../assets/logo.png';

class Item extends Component {
  renderLink() {
    const { href } = this.props;
    if (href.startsWith('http')){
      return <a href={href} target="_blank"><span className="site-group-item-link">查看</span></a>;
    }

    return <Link to={href} target="_blank"><span className="site-group-item-link">查看</span></Link>;
  }

  render() {
    const { text, thumb = defaultThumb } = this.props;
    return (
      <li className="site-group-item">
        <div className="site-group-item-thumb">
          <img alt="" src={thumb} />
        </div>
        <div className="site-group-item-text">
          <span className="text-inner">{text}</span>
          {this.renderLink()}
        </div>
      </li>
    );
  }
}

Item.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string,
  thumb: PropTypes.string,
  onClick: PropTypes.func
};

export default Item;
