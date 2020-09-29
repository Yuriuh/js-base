// var arr = [1, 2, 3, 4, 5]

// var newArr = arr.filter(item => item > 2)

// console.log('newArr', newArr)

Array.prototype.myFilter = function (fn) {
  fn = fn || (() => {})
  const result = []
  for (let i = 0; i < this.length; i++) {
    const item = this[i]
    if (fn(item, i, this)) {
      result.push(item)
    }
  }
  return result
}

var arr = [1, 2, 3, 4, 5]

var newArr = arr.myFilter(item => item > 2)

console.log('newArr', newArr)
