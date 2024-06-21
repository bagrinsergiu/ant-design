"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormProvider = exports.FormItemPrefixContext = exports.FormItemContext = exports.FormContext = void 0;
var React = _interopRequireWildcard(require("react"));
var _omit = _interopRequireDefault(require("omit.js"));
var _rcFieldForm = require("rc-field-form");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var FormContext = exports.FormContext = /*#__PURE__*/React.createContext({
  labelAlign: 'right',
  vertical: false,
  itemRef: function itemRef() {}
});
var FormItemContext = exports.FormItemContext = /*#__PURE__*/React.createContext({
  updateItemErrors: function updateItemErrors() {}
});
var FormProvider = exports.FormProvider = function FormProvider(props) {
  var providerProps = (0, _omit["default"])(props, ['prefixCls']);
  return /*#__PURE__*/React.createElement(_rcFieldForm.FormProvider, providerProps);
};
var FormItemPrefixContext = exports.FormItemPrefixContext = /*#__PURE__*/React.createContext({
  prefixCls: ''
});