"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _LoadingOutlined = _interopRequireDefault(require("@ant-design/icons/LoadingOutlined"));
var _CloseCircleFilled = _interopRequireDefault(require("@ant-design/icons/CloseCircleFilled"));
var _CheckCircleFilled = _interopRequireDefault(require("@ant-design/icons/CheckCircleFilled"));
var _ExclamationCircleFilled = _interopRequireDefault(require("@ant-design/icons/ExclamationCircleFilled"));
var _col = _interopRequireDefault(require("../grid/col"));
var _context = require("./context");
var _ErrorList = _interopRequireDefault(require("./ErrorList"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var iconMap = {
  success: _CheckCircleFilled["default"],
  warning: _ExclamationCircleFilled["default"],
  error: _CloseCircleFilled["default"],
  validating: _LoadingOutlined["default"]
};
var FormItemInput = function FormItemInput(_ref) {
  var prefixCls = _ref.prefixCls,
    status = _ref.status,
    wrapperCol = _ref.wrapperCol,
    children = _ref.children,
    help = _ref.help,
    errors = _ref.errors,
    onDomErrorVisibleChange = _ref.onDomErrorVisibleChange,
    hasFeedback = _ref.hasFeedback,
    validateStatus = _ref.validateStatus,
    extra = _ref.extra;
  var baseClassName = "".concat(prefixCls, "-item");
  var formContext = React.useContext(_context.FormContext);
  var mergedWrapperCol = wrapperCol || formContext.wrapperCol || {};
  var className = (0, _classnames["default"])("".concat(baseClassName, "-control"), mergedWrapperCol.className);
  React.useEffect(function () {
    return function () {
      onDomErrorVisibleChange(false);
    };
  }, []);
  // Should provides additional icon if `hasFeedback`
  var IconNode = validateStatus && iconMap[validateStatus];
  var icon = hasFeedback && IconNode ? /*#__PURE__*/React.createElement("span", {
    className: "".concat(baseClassName, "-children-icon")
  }, /*#__PURE__*/React.createElement(IconNode, null)) : null;
  // Pass to sub FormItem should not with col info
  var subFormContext = (0, _extends2["default"])({}, formContext);
  delete subFormContext.labelCol;
  delete subFormContext.wrapperCol;
  return /*#__PURE__*/React.createElement(_context.FormContext.Provider, {
    value: subFormContext
  }, /*#__PURE__*/React.createElement(_col["default"], (0, _extends2["default"])({}, mergedWrapperCol, {
    className: className
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat(baseClassName, "-control-input")
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(baseClassName, "-control-input-content")
  }, children), icon), /*#__PURE__*/React.createElement(_context.FormItemPrefixContext.Provider, {
    value: {
      prefixCls: prefixCls,
      status: status
    }
  }, /*#__PURE__*/React.createElement(_ErrorList["default"], {
    errors: errors,
    help: help,
    onDomErrorVisibleChange: onDomErrorVisibleChange
  })), extra && /*#__PURE__*/React.createElement("div", {
    className: "".concat(baseClassName, "-extra")
  }, extra)));
};
var _default = exports["default"] = FormItemInput;