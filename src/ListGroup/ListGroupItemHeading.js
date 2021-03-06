/**
 * ListGroup component
 */


import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import H5 from '../H5';

export const defaultProps = {
  tag: H5,
};
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: PropTypes.any,
};
class ListGroupItemHeading extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = propTypes;

  static defaultProps = defaultProps;

  render() {
    const {
      className,
      tag: Tag,
      ...attributes
    } = this.props;
    const classes = cn(
      className,
      'list-group-item-heading'
    );

    return (
      <Tag {...attributes} className={classes} />
    );
  }
}

ListGroupItemHeading.defaultProps = defaultProps;
ListGroupItemHeading.propTypes = propTypes;

export default ListGroupItemHeading;
