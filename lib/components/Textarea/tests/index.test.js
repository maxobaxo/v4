'use strict';

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Testing our Textarea component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _theme = require('theme');

var _theme2 = _interopRequireDefault(_theme);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var onChange = jest.fn();
var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.shallow)(_jsx(_index2.default, {
    value: props.value,
    wrap: props.wrap,
    className: props.className,
    onChange: onChange
  }));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_jsx(_styledComponents.ThemeProvider, {
    theme: _theme2.default
  }, void 0, _jsx(_index2.default, {
    value: props.value,
    wrap: props.wrap,
    className: props.className,
    onChange: onChange
  })));
};

describe('<Textarea />', function () {
  it('should render an <Textarea> tag without a theme', function () {
    var renderedComponent = renderComponent({
      value: 'Insert text here',
      wrap: 'wrapString'
    });
    expect(renderedComponent.find('textarea').length).toBe(1);
  });

  it('should have a value attribute without a theme', function () {
    var renderedComponent = renderComponent({
      value: 'Insert text here',
      wrap: 'wrapString'
    });
    expect(renderedComponent.props().value).toEqual('Insert text here');
  });

  it('should adopt a wrap attribute without a theme', function () {
    var renderedComponent = renderComponent({
      value: 'Insert text here',
      wrap: 'wrapString'
    });
    expect(renderedComponent.props().wrap).toEqual('wrapString');
  });
  it('should render one <Textarea> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      value: 'Insert text here',
      wrap: 'wrapString'
    });
    expect(renderedComponent.find('textarea').length).toBe(1);
  });
  it('should render a value attribute of <Textarea> with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      value: 'Insert text here',
      wrap: 'wrapString'
    });
    expect(renderedComponent.find('textarea').props().value).toEqual('Insert text here');
  });
  it('should render an wrap attribute of <Textarea> with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      value: 'Insert text here',
      wrap: 'wrapString'
    });
    expect(renderedComponent.find('textarea').props().wrap).toEqual('wrapString');
  });
  it('should have content with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      value: 'Insert text here'
    });
    expect(renderedComponent.text()).toEqual('Insert text here');
  });
});