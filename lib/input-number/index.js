"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var React = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _rcInputNumber = _interopRequireDefault(require("rc-input-number"));
var _UpOutlined = _interopRequireDefault(require("@ant-design/icons/UpOutlined"));
var _DownOutlined = _interopRequireDefault(require("@ant-design/icons/DownOutlined"));
var _configProvider = require("../config-provider");
var _SizeContext = _interopRequireDefault(require("../config-provider/SizeContext"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var InputNumber = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var renderInputNumber = function renderInputNumber(_ref) {
    var getPrefixCls = _ref.getPrefixCls,
      direction = _ref.direction;
    var className = props.className,
      customizeSize = props.size,
      customizePrefixCls = props.prefixCls,
      readOnly = props.readOnly,
      others = __rest(props, ["className", "size", "prefixCls", "readOnly"]);
    var prefixCls = getPrefixCls('input-number', customizePrefixCls);
    var upIcon = /*#__PURE__*/React.createElement(_UpOutlined["default"], {
      className: "".concat(prefixCls, "-handler-up-inner")
    });
    var downIcon = /*#__PURE__*/React.createElement(_DownOutlined["default"], {
      className: "".concat(prefixCls, "-handler-down-inner")
    });
    return /*#__PURE__*/React.createElement(_SizeContext["default"].Consumer, null, function (size) {
      var mergeSize = customizeSize || size;
      var inputNumberClass = (0, _classnames["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-lg"), mergeSize === 'large'), "".concat(prefixCls, "-sm"), mergeSize === 'small'), "".concat(prefixCls, "-rtl"), direction === 'rtl'), "".concat(prefixCls, "-readonly"), readOnly), className);
      return /*#__PURE__*/React.createElement(_rcInputNumber["default"], (0, _extends2["default"])({
        ref: ref,
        className: inputNumberClass,
        upHandler: upIcon,
        downHandler: downIcon,
        prefixCls: prefixCls,
        readOnly: readOnly
      }, others));
    });
  };
  return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, renderInputNumber);
});
InputNumber.defaultProps = {
  step: 1
};
var _default = exports["default"] = InputNumber;