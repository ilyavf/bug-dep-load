/*[system-bundles-config]*/
System.bundles = {"bundles/components/page1":["components/page1"]};
/*stealconfig.js*/
define('stealconfig.js', function(require, exports, module) {
(function () {
	// taking from HTML5 Shiv v3.6.2 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
	var supportsUnknownElements = false;

	(function () {
		try {
			var a = document.createElement('a');
			a.innerHTML = '<xyz></xyz>';

			supportsUnknownElements = a.childNodes.length == 1 || (function () {
				// assign a false positive if unable to shiv
				(document.createElement)('a');
				var frag = document.createDocumentFragment();
				return (
					typeof frag.cloneNode == 'undefined' ||
						typeof frag.createDocumentFragment == 'undefined' ||
						typeof frag.createElement == 'undefined'
					);
			}());
		} catch (e) {
			// assign a false positive if detection fails => unable to shiv
			supportsUnknownElements = true;
		}
	}());


	System.config({
		transpiler: "babel",
		map: {
			"can/util/util": "can/util/jquery/jquery",
			"jquery/jquery": "jquery"
		},
		paths: {
			"jquery": "bower_components/jquery/dist/jquery.js",
			"jqueryui": "bower_components/jquery-ui/jquery-ui.js"
		},
		meta: {
				jquery: {
					exports: "jQuery",
					deps: supportsUnknownElements ? undefined : ["can/lib/html5shiv.js"]
				}
		},
		//ext: {
		//	stache: "can/view/stache/system"
		//},
		bundle:[
			"components/page1"
			//"components/page2"
		]
	});

	System.buildConfig = {
		map: {
			"can/util/util": "can/util/domless/domless"
		}
	};
})();


});
/*components/appstate*/
define('components/appstate', ['exports'], function (exports) {
    'use strict';
    var AppState = { test: 123 };
    var stateDefaults = [{ test2: 345 }];
    exports['default'] = AppState;
    exports.defaults = stateDefaults;
    Object.defineProperty(exports, '__esModule', { value: true });
});
/*index*/
define('index', [
    'exports',
    'components/appstate'
], function (exports, _componentsAppstate) {
    'use strict';
    var _interopRequire = function (obj) {
        return obj && obj.__esModule ? obj['default'] : obj;
    };
    var appstate = _interopRequire(_componentsAppstate);
    console.log('index.js loaded. appstate: ' + typeof appstate, appstate);
    System['import']('components/page1').then(function (results) {
        console.log('Successfully loaded: page1');
    })['catch'](function (ex) {
        console.error('Invalid page linked!');
        throw ex;
    });
});
