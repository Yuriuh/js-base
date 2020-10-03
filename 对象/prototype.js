var obj = {}

var proto = obj.__proto__

console.log('obj proto', proto)

var fn = () => {}

var fnProto = fn.__proto__

console.log('fn proto', fnProto)

var arr = []

var arrProto = arr.__proto__

console.log('arr proto', arrProto)
