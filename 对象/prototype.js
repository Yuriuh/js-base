var obj = {}

var proto = obj.__proto__

console.log('obj proto', proto)

var fn = () => {}

var fnProto = fn.__proto__

console.log('fn proto', fnProto)

var arr = []

var arrProto = arr.__proto__

console.log('arr proto', arrProto)

var map = new Map()

console.log('map', map)

var mapProto = map.__proto__

console.log('map proto', mapProto)

var set = new Set()

var setProto = set.__proto__

console.log('set proto', setProto)

var reg = new RegExp()

var regProto = reg.__proto__

console.log('reg proto')
