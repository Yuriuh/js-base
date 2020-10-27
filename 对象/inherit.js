function 猫科() {}

猫科.prototype.爬树 = function () {}
猫科.prototype.叫 = function () {}

function 狮子(name) {
  this.name = name
}

// 狮子.prototype.__proto__ = 猫科.prototype

继承(狮子, 猫科)

function 继承(继承者, 被继承者) {
  var F = function () {}
  F.prototype = 被继承者.prototype
  继承者.prototype = new F()
  继承者.prototype.constructor = 继承者
}

var 马利什 = new 狮子('马利什')

console.log('马利什 爬树', 马利什.爬树)
console.log('马利什 叫', 马利什.叫)

console.log('马利什', 马利什)

// Es6 继承
class 猫 {
  爬树() {}
  叫() {}
}

class 狮 extends 猫 {
  constructor(name) {
    super()
    this.name = name
  }
}

var 奇克 = new 狮('奇克')

console.log(奇克)
console.log('奇克 吃', 奇克.叫)

// 所谓的借用构造函数实现继承的模式
// 垃圾

// function 猫科(options) {
//   this.颜色 = options.颜色
// }

// function 狮子(options) {
//   猫科.call(this, options)
//   this.名字 = options.名字
// }

// var 铠 = new 狮子({
//   名字: '铠',
//   颜色: '白色'
// })

// 如何给父类传递属性

// function 猫科(options) {
//   this.颜色 = options.颜色
// }

// 猫科.prototype.爬树 = function() {}
// 猫科.prototype.叫 = function() {}

// function 狮子(options) {
//   猫科.call(this, options)
//   this.名字 = options.名字
// }

// 狮子.prototype.__proto__ = 猫科.prototype

继承(狮子, 猫科)

// function 继承(继承者, 被继承者) {
//   var F = function() {}
//   F.prototype = 被继承者.prototype
//   继承者.prototype = new F()
//   继承者.prototype.constructor = 继承者
// }

// var 马利什 = new 狮子({
//   名字: '马利什',
//   颜色: '棕色',
// })

// es6 代码

// class 猫科 {
//   constructor(options) {
//     this.颜色 = options.颜色
//   }
//   叫() {}
//   爬树() {}
// }

// class 狮子 extends 猫科 {
//   constructor(options) {
//     super(options)
//     this.名字 = options.名字
//   }
// }

// var 马利什 = new 狮子({
//   名字: '马利什',
//   颜色: '棕色',
// })
