let user = {
  name: 'John',
  surname: 'Smith',
}

Object.defineProperty(user, 'fullName', {
  get() {
    return `${this.name} ${this.surname}`
  },

  set(value) {
    ;[this.name, this.surname] = value.split(' ')
  },
})

console.log(user.fullName) // John Smith

for (let key in user) console.log(key) // name, surname

function User(name, birthday) {
  this.name = name
  this.birthday = birthday

  // 年龄是根据当前日期和生日计算得出的
  Object.defineProperty(this, 'age', {
    get() {
      let todayYear = new Date().getFullYear()
      return todayYear - this.birthday.getFullYear()
    },
  })
}

let john = new User('John', new Date(1992, 6, 1))

alert(john.birthday) // birthday 是可访问的
alert(john.age) // ……age 也是可访问的
