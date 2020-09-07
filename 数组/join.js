var arr = ['a', 'b', 'c']
var str = arr.join('-')
console.log('join', str)

Array.prototype.myJoin = function(separator) {
  let result = this[0] || ''
  for (let i = 1; i < this.length; i++) {
    result += separator + this[i]
  }
  return result
}

var arr = ['a', 'b', 'c']
var str = arr.myJoin('-')
console.log('my join', str)