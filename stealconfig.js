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

