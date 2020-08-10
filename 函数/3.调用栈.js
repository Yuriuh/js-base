// 参考网站: http://latentflip.com/loupe

// 依次执行
function a() {
  console.log('a')
}

function b() {
  console.log('b')
}

function c() {
  console.log('c')
}

// a()

// b()

// c()

// 嵌套执行
function d() {
  console.log('d1')
  e()
  console.log('d2')
  return 'd'
}

function e() {
  console.log('e1')
  f()
  console.log('e2')
  return 'e'
}

function f() {
  console.log('f1')
  return 'f'
}

d()
console.log('end')

// 递归
function fib(n) {
  if (n >= 3) {
    return fib(n - 1) + fib(n - 2)
  }
  return 1
}

fib(5)