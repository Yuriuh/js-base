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

function deepClone(target) {
  const toString = v => Object.prototype.toString.call(v)
  const type = v => toString(v).slice(8, -1).toLowerCase()
  if (typeof target !== 'object' || target === null) {
    return target
  } else {
    if (type(target) === 'array') {
      const clone = []
      target.forEach((item, index) => {
        clone[index] = deepClone(item)
      })
      return clone
    } else if (type(target) === 'object') {
      const clone = {}
      Object.keys(target).forEach(key => {
        const value = target[key]
        clone[key] = deepClone(value)
      })
      return clone
    }
  }
}

var lion = {
  name: '奇克',
  partners: ['奇魄', '盖克', '凯'],
  from: {
    zoo: '克里米亚野生动物园',
    country: '俄罗斯',
  },
}

var lion2 = deepClone(lion)

console.log('lion2', lion2)
