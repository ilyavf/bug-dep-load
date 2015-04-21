## Setup:

```
$ npm install
$ bower install
$ grunt build
$ python -m SimpleHTTPServer 8000
```

# Test

Open http://localhost:8000

Notice in console:

```
index.js loaded. appstate: object Object {test: 123}
page1.js:16 page1.js loaded. appstate: object Module {default: (...), defaults: (...)}
```

So in index.js the imported module has __esModule=true

In page1.js it does not have the flag.