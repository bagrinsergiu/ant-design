"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var React = _interopRequireWildcard(require("react"));
var _Cell = _interopRequireDefault(require("./Cell"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function renderCells(items, _ref, _ref2) {
  var colon = _ref.colon,
    prefixCls = _ref.prefixCls,
    bordered = _ref.bordered;
  var component = _ref2.component,
    type = _ref2.type,
    showLabel = _ref2.showLabel,
    showContent = _ref2.showContent;
  return items.map(function (_ref3, index) {
    var _ref3$props = _ref3.props,
      label = _ref3$props.label,
      children = _ref3$props.children,
      _ref3$props$prefixCls = _ref3$props.prefixCls,
      itemPrefixCls = _ref3$props$prefixCls === void 0 ? prefixCls : _ref3$props$prefixCls,
      className = _ref3$props.className,
      style = _ref3$props.style,
      _ref3$props$span = _ref3$props.span,
      span = _ref3$props$span === void 0 ? 1 : _ref3$props$span,
      key = _ref3.key;
    if (typeof component === 'string') {
      return /*#__PURE__*/React.createElement(_Cell["default"], {
        key: "".concat(type, "-").concat(key || index),
        className: className,
        style: style,
        span: span,
        colon: colon,
        component: component,
        itemPrefixCls: itemPrefixCls,
        bordered: bordered,
        label: showLabel ? label : null,
        content: showContent ? children : null
      });
    }
    return [/*#__PURE__*/React.createElement(_Cell["default"], {
      key: "label-".concat(key || index),
      className: className,
      style: style,
      span: 1,
      colon: colon,
      component: component[0],
      itemPrefixCls: itemPrefixCls,
      bordered: bordered,
      label: label
    }), /*#__PURE__*/React.createElement(_Cell["default"], {
      key: "content-".concat(key || index),
      className: className,
      style: style,
      span: span * 2 - 1,
      component: component[1],
      itemPrefixCls: itemPrefixCls,
      bordered: bordered,
      content: children
    })];
  });
}
var Row = function Row(props) {
  var prefixCls = props.prefixCls,
    vertical = props.vertical,
    row = props.row,
    index = props.index,
    bordered = props.bordered;
  if (vertical) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("tr", {
      key: "label-".concat(index),
      className: "".concat(prefixCls, "-row")
    }, renderCells(row, props, {
      component: 'th',
      type: 'label',
      showLabel: true
    })), /*#__PURE__*/React.createElement("tr", {
      key: "content-".concat(index),
      className: "".concat(prefixCls, "-row")
    }, renderCells(row, props, {
      component: 'td',
      type: 'content',
      showContent: true
    })));
  }
  return /*#__PURE__*/React.createElement("tr", {
    key: index,
    className: "".concat(prefixCls, "-row")
  }, renderCells(row, props, {
    component: bordered ? ['th', 'td'] : 'td',
    type: 'item',
    showLabel: true,
    showContent: true
  }));
};
var _default = exports["default"] = Row;