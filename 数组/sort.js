// var arr = [3, 2, 5, 4, 1]
// var newArr = arr.sort((a, b) => {
//   return a - b
// })
// console.log('newArr', newArr)

// 我们这里用快速排序模拟实现
Array.prototype.mySort = function (fn) {
  fn = fn || ((a, b) => a - b)
  let roundCount = this.length - 1 // 比较的轮数
  for (let i = 0; i < roundCount; i++) {
    for (let k = i + 1; k < this.length; k++) {
      if (fn.call(null, this[k], this[i]) < 0) {
        ;[this[i], this[k]] = [this[k], this[i]]
      }
    }
  }
  return this
}

var arr = [3, 2, 5, 4, 1]
var newArr = arr.mySort((a, b) => {
  return a - b
})
console.log('newArr', newArr)
