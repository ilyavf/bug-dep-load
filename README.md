## Setup:

```
$ npm install
$ bower install
$ grunt build
$ python -m SimpleHTTPServer 8000
```

## Successful development mode:

Open http://localhost:8000/index-dev.html

Notice in console:

```
page1.js:4 page1.js loaded.
index.js:4 Successfully loaded: page1
```

## Errors in production mode:

Open http://localhost:8000/ 
 
Notice in console:

```
steal.js:1622 Assertion failed: is loading
steal.js:1908 Assertion failed: Load in linkSet not loaded!
index.js:75 Invalid page linked!
steal.js:140 Potentially unhandled rejection [4] TypeError: Error loading "rinsTokeninput" at rinsTokeninput
Error loading "rinsTokeninput" from "components/page1/page1" at http://localhost:8000/components/page1/page1.js
Cannot read property 'name' of null
    at linkSetFailed (http://localhost:8000/bower_components/steal/steal.js:1821:38)
    at doLink (http://localhost:8000/bower_components/steal/steal.js:1765:7)
    at updateLinkSetOnLoad (http://localhost:8000/bower_components/steal/steal.js:1807:18)
    at http://localhost:8000/bower_components/steal/steal.js:1628:11
    at tryCatchReject (http://localhost:8000/bower_components/steal/steal.js:1183:30)
    at runContinuation1 (http://localhost:8000/bower_components/steal/steal.js:1142:4)
    at Fulfilled.7.Fulfilled.when (http://localhost:8000/bower_components/steal/steal.js:930:4)
    at Pending.7.Pending.run (http://localhost:8000/bower_components/steal/steal.js:821:13)
    at Scheduler.3.Scheduler._drain (http://localhost:8000/bower_components/steal/steal.js:97:19)
    at 3.define.drain (http://localhost:8000/bower_components/steal/steal.js:62:9)
```

## Less errors in production mode:

1. in components/page2 comment out 1st import line (import jqueryui from 'jqueryui';)
2. grunt build
3. python -m SimpleHTTPServer 8000

Notice in console:

```
page1.js:14 page1.js loaded.
steal.js:1622 Assertion failed: is loading
index.js:75 Successfully loaded: page1
```
