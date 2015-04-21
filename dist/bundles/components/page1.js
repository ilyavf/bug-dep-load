/*components/page1*/
define('components/page1', [
    'exports',
    'module',
    'components/appstate'
], function (exports, module, _componentsAppstate) {
    'use strict';
    var _interopRequire = function (obj) {
        return obj && obj.__esModule ? obj['default'] : obj;
    };
    var appstate = _interopRequire(_componentsAppstate);
    console.log('page1.js loaded. appstate: ' + typeof appstate, appstate);
    module.exports = {};
});
