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
var _rcCollapse = _interopRequireDefault(require("rc-collapse"));
var _classnames = _interopRequireDefault(require("classnames"));
var _RightOutlined = _interopRequireDefault(require("@ant-design/icons/RightOutlined"));
var _CollapsePanel = _interopRequireDefault(require("./CollapsePanel"));
var _configProvider = require("../config-provider");
var _openAnimation = _interopRequireDefault(require("./openAnimation"));
var _reactNode = require("../_util/reactNode");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var Collapse = function Collapse(props) {
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var customizePrefixCls = props.prefixCls,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    bordered = props.bordered,
    ghost = props.ghost;
  var prefixCls = getPrefixCls('collapse', customizePrefixCls);
  var getIconPosition = function getIconPosition() {
    var expandIconPosition = props.expandIconPosition;
    if (expandIconPosition !== undefined) {
      return expandIconPosition;
    }
    return direction === 'rtl' ? 'right' : 'left';
  };
  var renderExpandIcon = function renderExpandIcon() {
    var panelProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var expandIcon = props.expandIcon;
    var icon = expandIcon ? expandIcon(panelProps) : /*#__PURE__*/React.createElement(_RightOutlined["default"], {
      rotate: panelProps.isActive ? 90 : undefined
    });
    return (0, _reactNode.cloneElement)(icon, function () {
      return {
        className: (0, _classnames["default"])(icon.props.className, "".concat(prefixCls, "-arrow"))
      };
    });
  };
  var iconPosition = getIconPosition();
  var collapseClassName = (0, _classnames["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-borderless"), !bordered), "".concat(prefixCls, "-icon-position-").concat(iconPosition), true), "".concat(prefixCls, "-rtl"), direction === 'rtl'), "".concat(prefixCls, "-ghost"), !!ghost), className);
  var openAnimation = (0, _extends2["default"])((0, _extends2["default"])({}, _openAnimation["default"]), {
    appear: function appear() {}
  });
  return /*#__PURE__*/React.createElement(_rcCollapse["default"], (0, _extends2["default"])({
    openAnimation: openAnimation
  }, props, {
    expandIcon: function expandIcon(panelProps) {
      return renderExpandIcon(panelProps);
    },
    prefixCls: prefixCls,
    className: collapseClassName
  }));
};
Collapse.Panel = _CollapsePanel["default"];
Collapse.defaultProps = {
  bordered: true
};
var _default = exports["default"] = Collapse;