import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import mapToCssModules from 'map-to-css-modules';
import Blockquote from '../Blockquote';

export const defaultProps = {
  tag: Blockquote,
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
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object,
};

class CardBlockquote extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = propTypes;

  static defaultProps = defaultProps;

  render() {
    const {
      className,
      cssModule,
      tag: Tag,
      ...attributes
    } = this.props;

    return (
      <Tag
        className={mapToCssModules(cn(
          className,
          'card-blockquote'
        ), cssModule)}
        {...attributes}
      />
    );
  }
}

CardBlockquote.defaultProps = defaultProps;
CardBlockquote.propTypes = propTypes;

export default CardBlockquote;
