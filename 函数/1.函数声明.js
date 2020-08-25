// 匿名函数
var anonymousFn = function() {
  return true
}

anonymousFn()

// 署名函数
function namedFn() {
  return false
}

// 箭头函数
var arrowFn = () => true

// 异步匿名函数
var asyncAnonymousFn = async function() {
  return true
}

// 异步署名函数
async function asyncFn() {
  return true
}

// 异步箭头函数
var asyncArrowFn = async () => true