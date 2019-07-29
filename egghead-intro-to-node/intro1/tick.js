console.log('start')
process.nextTick(function() {
    console.log('nexTick callback');
});
//'scheduled' runs second not third
//node uses event loop processing
//looks for next executable event
//the callback is inside a function
//so it executes on the next loop
//similar to timeout but doesn't require
//any i/o from the client
console.log('scheduled');