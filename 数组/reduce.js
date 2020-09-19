var arr = [1, 2, 3, 4]

var newArr = arr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})

console.log('newArr', newArr)
