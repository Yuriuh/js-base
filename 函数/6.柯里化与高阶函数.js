/*
柯里化 / 高阶函数
返回函数的函数
  - 柯里化: 将 f(x, y) 变成 f(x=1)(y) 或 f(y=1)(x)
  - 高阶函数:
    - 在数学和计算机科学中, 高阶函数是至少满足下列一个条件的函数:
      - a. 接受一个或多个函数作为输入
      - b. 输出一个函数
      不过它常常同时满足两个条件
*/

// 柯里化之前
var sum = function(a, b) {
  return a + b
}

// 柯里化之后
var addOne = function(b) {
  return sum(1, b)
}

// var template = '<h1>Hi, I am {{name}}</h1>'
var HandleBar = function(template, data) {
  return template.replace('{{name}}', data.name)
}
// var t = HandleBar(template, { name: 'Yuriuh' })
// console.log('t', t)

var curryingHandleBar = function(template) {
  return function(data) {
    return template.replace('{{name}}', data.name)
  }
}

var t = curryingHandleBar('<h1>Hi, I am {{name}}</h1>')

// var s = t({ name: 'Yuriuh' })
// console.log('s', s)

/*
数组中的高阶函数
var array = []
array.sort((a, b) => a - b)
array.forEach((a) => {})
array.map(() => {})
array.filter(() => {})
array.reduce(() => {})
*/

// fn.bind.call(fn, {}, 1, 2, 3)

var array = [1, 2, 3, 4, 5, 6, 7, 8]

// 面向过程的写法
var sum = 0
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    sum += array[i]
  }
}
console.log('sum', sum)

// 面对对象的写法
var newArray = array.filter(n => n % 2 === 0).reduce((prev, next) => prev + next, 0)

console.log('newArray', newArray)

// reduce(filter(array, n => n % 2 === 0), (prev, next) => prev + next, 0)

// sort(filter(array, n => n % 2 === 1), (a, b) => a - b)