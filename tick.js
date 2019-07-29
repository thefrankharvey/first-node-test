console.log('start')
process.nextTick(function() {
    console.log('nexTick callback');
})
console.log('scheduled')