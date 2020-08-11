// this 是隐式参数的第一个参数, 且必须是对象

function f() {
  console.log('this', this)
  console.log('arguments', arguments)
}

// f.call()
// f.call({ name: 'Yuriuh' })
// f.call({ name: 'Yuriuh' }, 1)
// f.call({ name: 'Yuriuh' }, 1, 2)

// this 为什么必须是对象 - 因为 this 就是函数与对象之间的羁绊
var person = {
  name: 'Yuriuh',
  sayHi(person) {
    console.log(`Hi, I'm ${person.name}`)
  },
  sayBye(person) {
    console.log(`Bye, I'm ${person.name}`)
  },
  say(person, word) {
    console.log(`${word}, I'm ${person.name}`)
  }
}
person.sayHi(person)
person.sayBye(person)
person.say(person, 'How are you')

/*
能不能变成
person.sayHi()
person.sayBye()
person.say('How are you')
*/

/*
不用语法糖的写法
person.sayHi.call(person)
person.sayBye.call(person)
person.say.call(person, 'How are you')
*/

/*
新手困惑的问题
var sayHi = person.sayHi
person.sayHi() // this === person
fn() // this === window
*/
