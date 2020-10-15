// const sayMixin = {
//   sayHi() {
//     console.log(`Hi, I'm ${this.name}`)
//   },
//   sayBye() {
//     console.log(`Bye, I'm your ${this.name}`)
//   },
// }

// class User {
//   constructor(name) {
//     this.name = name
//   }
// }

// Object.assign(User.prototype, sayMixin)

// const u = new User('Yuriuh')

// u.sayHi()
// u.sayBye()

let sayMixin = {
  say(phrase) {
    console.log(phrase)
  },
}

let sayHiMixin = {
  __proto__: sayMixin, // (或者，我们可以在这儿使用 Object.create 来设置原型)

  sayHi() {
    // 调用父类方法
    super.say(`Hello ${this.name}`) // (*)
  },
  sayBye() {
    super.say(`Bye ${this.name}`) // (*)
  },
}

class User {
  constructor(name) {
    this.name = name
  }
}

// 拷贝方法
Object.assign(User.prototype, sayHiMixin)

// 现在 User 可以打招呼了
new User('Dude').sayHi() // Hello Dude!
