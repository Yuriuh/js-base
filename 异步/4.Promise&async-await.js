// 自己写 Promise

function buyFruit(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('apple')
    }, 1000 * time)
  })
}

var promise = buyFruit(3)

promise.then(result => {
  console.log('The bought fruit is:', result)
})

// async / await

function buyFruitAsync(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('banana')
    }, 1000 * time)
  })
}

void (async function () {
  var result = await buyFruitAsync(3)
  console.log('result', result)
})()

// 自己实现 promise

function Promise(fn) {
  let status = 'pending'
  function successNotify() {
    status = 'resolve'
  }
  function failNotify() {
    status = 'rejected'
  }
  function todoThen() {
    if (status === 'resolve') {
      for (let i = 0; i < successArray.length; i++) {
        successArray[i].call()
      }
    } else if (status === 'rejected') {
      for (let i = 0; i < failArray.length; i++) {
        failArray[i].call()
      }
    }
  }

  let successArray = []
  let failArray = []
  fn.call(undefined, successNotify, failNotify)

  return {
    then(successFn, failFn) {
      successArray.push(successFn)
      failArray.push(failFn)
      return undefined // 简化
    },
  }
}

async function fetchTodo(i) {
  const url = `https://jsonplaceholder.typicode.com/todos/${i}`
  const res = await fetch(url)
  const json = res.json()
  return json
}

async function render() {
  let result = []
  for (let i = 1; i < 10; i++) {
    const p = fetchTodo(i)
    result.push(p)
  }
  console.log('result', result)
  for (let i = 0; i < result.length; i++) {
    const res = await result[i]
    console.log('res', res)
  }
}

render()
