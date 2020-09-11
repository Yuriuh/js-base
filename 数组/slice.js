// var arr = [1, 2, 3, 4, 5]
// var newArr = arr.slice(1, 3)
// console.log('newArr', newArr)

Array.prototype.mySlice = function (begin, end) {
  let result = []
  begin = begin || 0
  end = end || this.length
  for (let i = begin; i < end; i++) {
    result.push(this[i])
  }
  return result
}

var arr = [1, 2, 3, 4, 5]
var newArr = arr.mySlice(1, 3)
console.log('newArr', newArr)
