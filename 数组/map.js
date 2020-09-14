// var arr = [1, 2, 3, 4, 5]
// var newArr = arr.map((item, index, array) => {
//   return item * 2
// })
// console.log('newArray', newArr)

Array.prototype.myMap = function (fn) {
  fn = fn || (() => {})
  const result = []
  for (let i = 0; i < this.length; i++) {
    const item = this[i]
    result.push(fn(item, i, this))
  }
  return result
}

var arr = [1, 2, 3, 4, 5]
var newArr = arr.myMap((item, index, array) => {
  return item * 2
})
console.log('newArray', newArr)
