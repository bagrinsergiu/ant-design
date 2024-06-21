"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useModal;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var React = _interopRequireWildcard(require("react"));
var _usePatchElement3 = _interopRequireDefault(require("../../_util/hooks/usePatchElement"));
var _HookModal = _interopRequireDefault(require("./HookModal"));
var _confirm = require("../confirm");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var uuid = 0;
function useModal() {
  var _usePatchElement = (0, _usePatchElement3["default"])(),
    _usePatchElement2 = (0, _slicedToArray2["default"])(_usePatchElement, 2),
    elements = _usePatchElement2[0],
    patchElement = _usePatchElement2[1];
  function getConfirmFunc(withFunc) {
    return function hookConfirm(config) {
      uuid += 1;
      var modalRef = /*#__PURE__*/React.createRef();
      var closeFunc;
      var modal = /*#__PURE__*/React.createElement(_HookModal["default"], {
        key: "modal-".concat(uuid),
        config: withFunc(config),
        ref: modalRef,
        afterClose: function afterClose() {
          closeFunc();
        }
      });
      closeFunc = patchElement(modal);
      return {
        destroy: function destroy() {
          if (modalRef.current) {
            modalRef.current.destroy();
          }
        },
        update: function update(newConfig) {
          if (modalRef.current) {
            modalRef.current.update(newConfig);
          }
        }
      };
    };
  }
  return [{
    info: getConfirmFunc(_confirm.withInfo),
    success: getConfirmFunc(_confirm.withSuccess),
    error: getConfirmFunc(_confirm.withError),
    warning: getConfirmFunc(_confirm.withWarn),
    confirm: getConfirmFunc(_confirm.withConfirm)
  }, /*#__PURE__*/React.createElement(React.Fragment, null, elements)];
}