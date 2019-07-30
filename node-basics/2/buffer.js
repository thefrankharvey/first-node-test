var buf = new Buffer.alloc(5)
console.log(buf)
buf.write('hello world')
console.log(buf.toString())

// buffer takes four args
// input, offset (skip '2'), length ('1'), encoding
buf.write('hello', 2, 1, 'utf8')

// can compare buffers like so
buf1.compare(buf2)
// compare can be used for sorting
buf1.equals(buf2)
but1.toJSON()

buf 
//Buffer() is deprecated due to security and usability issues
//used Buffer.alloc() instead

// ?? What the heck is a buffer ??
// Array of integers that eah point to a byte of data in memory outside of V8 engine
// Deeply linked to streams -- look into streams
// Info via https://flaviocopes.com/node-buffers/

// It seems like when a stream receives data faster than it can process it, 
// it dumps the raw binary into a buffer
// The binary is then processed by the browser/client into human readable characters