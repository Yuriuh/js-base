let user = {
  name: 'John',
  surname: 'Smith',
}

let target = {}
let proxy = new Proxy(target, {}) // 空的 handler 对象

proxy.test = 5 // 写入 proxy 对象 (1)
console.log(target.test) // 5，test 属性出现在了 target 中！

console.log(proxy.test) // 5，我们也可以从 proxy 对象读取它 (2)

for (let key in proxy) console.log(key) // test，迭代也正常工作 (3)
