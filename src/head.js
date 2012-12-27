/*global console: false*/

/**
 * @name JsSIP
 * @namespace
 */
(function(window) {
var JsSIP = (function() {
  "use strict";
  var
    productName = 'PlivoWebPhone',
    productVersion = '0.2.2';

  return {
    name: function() {
      return productName;
    },
    version: function() {
      return productVersion;
    }
  };
}());
