var globalVar = 1

function fn(param1) {
  var localVar1 = 'localVar1'
  var localVar2 = 'localVar2'

  function innerFn1(param2) {
    var localVar2 = 'innerFn1 localVar2'
    console.log('local1', local1)
    console.log('local2', local2)
  }

  function innerFn2(param3) {
    var localVar2 = 'innerFn2 localVar2'
    innerFn1(localVar2)
  }
}

/*
抽象词法树
只分析语义
window = {
  global1: {

  },
  fn: {
    param1,
    localVar1,
    localVar2,
    innerFn1: {
      param2,
      localVar2
    },
    innerFn2: {
      param3,
      localVar2,
    }
  }
}
*/

var a = 1

// 词法作用域只能确定 a 是哪个 a, 但是不能确定 a 的值
function b() {
  console.log('a', a)
}

a = 2
b()