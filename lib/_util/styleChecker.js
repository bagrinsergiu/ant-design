"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isStyleSupport = exports.isFlexSupported = void 0;
var isStyleSupport = exports.isStyleSupport = function isStyleSupport(styleName) {
  if (typeof window !== 'undefined' && window.document && window.document.documentElement) {
    var styleNameList = Array.isArray(styleName) ? styleName : [styleName];
    var documentElement = window.document.documentElement;
    return styleNameList.some(function (name) {
      return name in documentElement.style;
    });
  }
  return false;
};
var isFlexSupported = exports.isFlexSupported = isStyleSupport(['flex', 'webkitFlex', 'Flex', 'msFlex']);