import _createClass from "@babel/runtime/helpers/createClass";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
var UnreachableException = /*#__PURE__*/_createClass(function UnreachableException(value) {
  _classCallCheck(this, UnreachableException);
  return new Error("unreachable case: ".concat(JSON.stringify(value)));
});
export { UnreachableException as default };