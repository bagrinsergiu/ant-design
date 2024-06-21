"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var React = _interopRequireWildcard(require("react"));
var _LeftOutlined = _interopRequireDefault(require("@ant-design/icons/LeftOutlined"));
var _RightOutlined = _interopRequireDefault(require("@ant-design/icons/RightOutlined"));
var _button = _interopRequireDefault(require("../button"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var Operation = function Operation(_ref) {
  var disabled = _ref.disabled,
    moveToLeft = _ref.moveToLeft,
    moveToRight = _ref.moveToRight,
    _ref$leftArrowText = _ref.leftArrowText,
    leftArrowText = _ref$leftArrowText === void 0 ? '' : _ref$leftArrowText,
    _ref$rightArrowText = _ref.rightArrowText,
    rightArrowText = _ref$rightArrowText === void 0 ? '' : _ref$rightArrowText,
    leftActive = _ref.leftActive,
    rightActive = _ref.rightActive,
    className = _ref.className,
    style = _ref.style,
    direction = _ref.direction,
    oneWay = _ref.oneWay;
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: style
  }, /*#__PURE__*/React.createElement(_button["default"], {
    type: "primary",
    size: "small",
    disabled: disabled || !rightActive,
    onClick: moveToRight,
    icon: direction !== 'rtl' ? /*#__PURE__*/React.createElement(_RightOutlined["default"], null) : /*#__PURE__*/React.createElement(_LeftOutlined["default"], null)
  }, rightArrowText), !oneWay && /*#__PURE__*/React.createElement(_button["default"], {
    type: "primary",
    size: "small",
    disabled: disabled || !leftActive,
    onClick: moveToLeft,
    icon: direction !== 'rtl' ? /*#__PURE__*/React.createElement(_LeftOutlined["default"], null) : /*#__PURE__*/React.createElement(_RightOutlined["default"], null)
  }, leftArrowText));
};
var _default = exports["default"] = Operation;