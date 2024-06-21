"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _rcTree = _interopRequireWildcard(require("rc-tree"));
var _classnames = _interopRequireDefault(require("classnames"));
var _DirectoryTree = _interopRequireDefault(require("./DirectoryTree"));
var _configProvider = require("../config-provider");
var _motion = _interopRequireDefault(require("../_util/motion"));
var _iconUtil = _interopRequireDefault(require("./utils/iconUtil"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var Tree = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction,
    virtual = _React$useContext.virtual;
  var customizePrefixCls = props.prefixCls,
    className = props.className,
    showIcon = props.showIcon,
    showLine = props.showLine,
    _switcherIcon = props.switcherIcon,
    blockNode = props.blockNode,
    children = props.children,
    checkable = props.checkable;
  var newProps = (0, _extends2["default"])((0, _extends2["default"])({}, props), {
    showLine: Boolean(showLine)
  });
  var prefixCls = getPrefixCls('tree', customizePrefixCls);
  return /*#__PURE__*/React.createElement(_rcTree["default"], (0, _extends2["default"])({
    itemHeight: 20,
    ref: ref,
    virtual: virtual
  }, newProps, {
    prefixCls: prefixCls,
    className: (0, _classnames["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-icon-hide"), !showIcon), "".concat(prefixCls, "-block-node"), blockNode), "".concat(prefixCls, "-rtl"), direction === 'rtl'), className),
    checkable: checkable ? /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-checkbox-inner")
    }) : checkable,
    switcherIcon: function switcherIcon(nodeProps) {
      return (0, _iconUtil["default"])(prefixCls, _switcherIcon, showLine, nodeProps);
    }
  }), children);
});
Tree.TreeNode = _rcTree.TreeNode;
Tree.DirectoryTree = _DirectoryTree["default"];
Tree.defaultProps = {
  checkable: false,
  showIcon: false,
  motion: (0, _extends2["default"])((0, _extends2["default"])({}, _motion["default"]), {
    motionAppear: false
  }),
  blockNode: false
};
var _default = exports["default"] = Tree;