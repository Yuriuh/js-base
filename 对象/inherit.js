function 猫科() {}

猫科.prototype.爬树 = function() {}
猫科.prototype.叫 = function() {}


function 狮子(name) {
  this.name = name
}

// 狮子.prototype.__proto__ = 猫科.prototype

继承(狮子, 猫科)

function 继承(继承者, 被继承者) {
  var F = function() {}
  F.prototype = 被继承者.prototype
  继承者.prototype = new F()
  继承者.prototype.constructor = 继承者
}

var 马利什 = new 狮子('马利什')

console.log('马利什 爬树', 马利什.爬树)
console.log('马利什 叫', 马利什.叫)

console.log('马利什', 马利什)