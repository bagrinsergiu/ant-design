"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var React = _interopRequireWildcard(require("react"));
var _padEnd = _interopRequireDefault(require("lodash/padEnd"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var StatisticNumber = function StatisticNumber(props) {
  var value = props.value,
    formatter = props.formatter,
    precision = props.precision,
    decimalSeparator = props.decimalSeparator,
    _props$groupSeparator = props.groupSeparator,
    groupSeparator = _props$groupSeparator === void 0 ? '' : _props$groupSeparator,
    prefixCls = props.prefixCls;
  var valueNode;
  if (typeof formatter === 'function') {
    // Customize formatter
    valueNode = formatter(value);
  } else {
    // Internal formatter
    var val = String(value);
    var cells = val.match(/^(-?)(\d*)(\.(\d+))?$/);
    // Process if illegal number
    if (!cells || val === '-') {
      valueNode = val;
    } else {
      var negative = cells[1];
      var _int = cells[2] || '0';
      var decimal = cells[4] || '';
      _int = _int.replace(/\B(?=(\d{3})+(?!\d))/g, groupSeparator);
      if (typeof precision === 'number') {
        decimal = (0, _padEnd["default"])(decimal, precision, '0').slice(0, precision);
      }
      if (decimal) {
        decimal = "".concat(decimalSeparator).concat(decimal);
      }
      valueNode = [/*#__PURE__*/React.createElement("span", {
        key: "int",
        className: "".concat(prefixCls, "-content-value-int")
      }, negative, _int), decimal && /*#__PURE__*/React.createElement("span", {
        key: "decimal",
        className: "".concat(prefixCls, "-content-value-decimal")
      }, decimal)];
    }
  }
  return /*#__PURE__*/React.createElement("span", {
    className: "".concat(prefixCls, "-content-value")
  }, valueNode);
};
var _default = exports["default"] = StatisticNumber;