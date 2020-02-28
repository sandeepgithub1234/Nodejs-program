const buf = Buffer.from([-1, 5,3,6,8,9,11,13,15,17,19]);

console.log(buf.readInt8(3));
// Prints: -1
console.log(buf.readInt8(1));
// Prints: 5
//console.log(buf.readInt8(2));