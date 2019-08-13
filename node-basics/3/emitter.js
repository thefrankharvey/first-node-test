var sayHello = function() { 
    console.log('Hello to you!'); 
}

var sayGoodbye = function() { 
    console.log('Goodbye to you!'); 
}

//make event emitter that require nodes events module
var EventEmitter = require('events').EventEmitter;

emitter = new EventEmitter();

// this creates an object (i think) like this:
// { hello: [func sayHello] }
emitter.on('hello', sayHello)
// emitter.on('goodbye', sayGoodbye)

// list global methods for emitters
global.emitter
// list global emitter events
global.emitter._events
// list hello events
global.emitter._events.hello
// global.emitter._events.hello.toString

// remove 1 listener
emitter.removeListener('hello', sayHello)
// remove all listener
emitter.removeAllListeners('hello', sayHello)
// set max listeners
emitter.setMaxListeners(100)