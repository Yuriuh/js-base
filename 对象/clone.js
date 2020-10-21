// 浅拷贝

var person = {
  name: 'Yuriuh',
  age: 18,
}

function shallowClone(target) {
  const clone = {}
  Object.keys(target).forEach(key => {
    const value = target[key]
    clone[key] = value
  })
  return clone
}

var clonedPerson = shallowClone(person)

console.log('clonedPerson', clonedPerson)
