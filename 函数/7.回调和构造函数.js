// 回调函数: 被当作参数的函数就是回调函数
function fn(cb, text) {
  cb(text)
}

function info(text) {
  console.log('info: ', text)
}

function warn(text) {
  console.log('warning: ', text)
}

fn(info, 'unused varible')

fn(warn, 'stack overflow')

// 回调与异步: 回调与异步没有任何关系

// 构造函数: 返回对象的函数就是构造函数, 一般首字母大写

var one = new Number(1)

console.log('one', one)

function Empty() {}

// new 是一个语法糖
var empty = new Empty()

console.log('empty', empty)

function Person(name) {
  this.name = name
}

var person = new Person('Yuriuh')

console.log('person', person)