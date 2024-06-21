"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Modal = _interopRequireWildcard(require("./Modal"));
var _confirm = _interopRequireWildcard(require("./confirm"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function modalWarn(props) {
  return (0, _confirm["default"])((0, _confirm.withWarn)(props));
}
var Modal = _Modal["default"];
Modal.info = function infoFn(props) {
  return (0, _confirm["default"])((0, _confirm.withInfo)(props));
};
Modal.success = function successFn(props) {
  return (0, _confirm["default"])((0, _confirm.withSuccess)(props));
};
Modal.error = function errorFn(props) {
  return (0, _confirm["default"])((0, _confirm.withError)(props));
};
Modal.warning = modalWarn;
Modal.warn = modalWarn;
Modal.confirm = function confirmFn(props) {
  return (0, _confirm["default"])((0, _confirm.withConfirm)(props));
};
Modal.destroyAll = function destroyAllFn() {
  while (_Modal.destroyFns.length) {
    var close = _Modal.destroyFns.pop();
    if (close) {
      close();
    }
  }
};
Modal.config = _confirm.globalConfig;
var _default = exports["default"] = Modal;