# PurrSub.js

An ultra-light, pub-sub module. Created to replace the EventEmitter usage in some Flux-based applications.
```
npm install purrsub
```

## Compatibility

PurrSub.js is compatible with AMD (require.js), CommonJS (like browserify) and as a global script in html.

## Usage

```
var PurrSub = require('PurrSub');
var instance  = new PurrSub();

...

// To subscribe for an event:
instance.subscribe('event', callback);

// To publish an event (params are optional and will be received by all registered callbacks):
instance.publish('event', params);

// To unsubscribe from an event (pass a reference to a previously registered callback function):
instance.unsubscribe('event', callback);
```

## License
MIT
