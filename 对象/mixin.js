const sayMixin = {
  sayHi() {
    console.log(`Hi, I'm ${this.name}`)
  },
  sayBye() {
    console.log(`Bye, I'm your ${this.name}`)
  },
}

class User {
  constructor(name) {
    this.name = name
  }
}

Object.assign(User.prototype, sayMixin)

const u = new User('Yuriuh')

u.sayHi()
u.sayBye()
