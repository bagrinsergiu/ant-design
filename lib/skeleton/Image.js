"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var React = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _configProvider = require("../config-provider");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var path = 'M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z';
var SkeletonImage = function SkeletonImage(props) {
  var renderSkeletonImage = function renderSkeletonImage(_ref) {
    var getPrefixCls = _ref.getPrefixCls;
    var customizePrefixCls = props.prefixCls,
      className = props.className,
      style = props.style;
    var prefixCls = getPrefixCls('skeleton', customizePrefixCls);
    var cls = (0, _classnames["default"])(prefixCls, "".concat(prefixCls, "-element"), className);
    return /*#__PURE__*/React.createElement("div", {
      className: cls
    }, /*#__PURE__*/React.createElement("div", {
      className: (0, _classnames["default"])("".concat(prefixCls, "-image"), className),
      style: style
    }, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 1098 1024",
      xmlns: "http://www.w3.org/2000/svg",
      className: "".concat(prefixCls, "-image-svg")
    }, /*#__PURE__*/React.createElement("path", {
      d: path,
      className: "".concat(prefixCls, "-image-path")
    }))));
  };
  return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, renderSkeletonImage);
};
var _default = exports["default"] = SkeletonImage;