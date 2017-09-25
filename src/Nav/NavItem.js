/**
 * NavItem Component
 *
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import mapToCssModules from 'map-to-css-modules';

const defaultProps = {
  tag: 'li',
};

class NavItem extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string,
    cssModule: PropTypes.object,
  };

  render() {
    const {
      className,
      cssModule,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = mapToCssModules(cn(
      className,
      'nav-item'
    ), cssModule);

    return (
      <Tag {...attributes} className={classes} />
    );
  }
}

NavItem.defaultProps = defaultProps;

export default NavItem;
