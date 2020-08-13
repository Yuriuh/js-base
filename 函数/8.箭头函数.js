// 用 () => {} 声明的函数
/*
1. 定义: 用 () => {} 声明的函数
  - 1. () => {}
  - 2. (x, y) => x + y
  - 3. (x, y) => ({ x, y })
  - 4. v => v
2. 特点
  - 1. 没有隐式参数 this 和 arguments
  - 2. 不能作为构造函数
*/


// setTimeout(function() {
//   console.log('this', this)
// }.bind({name: 'Yuriuh'}), 1000)

// setTimeout(function() {
//   console.log('this', this)
// }, 1000)

// setTimeout(function() {
//   console.log('this', this)
//   setTimeout(function() {
//     console.log('inner this', this)
//   }, 1000)
// }.bind({name: 'Yuriuh'}), 1000)

// setTimeout(function() {
//   console.log('this', this)
//   setTimeout(function() {
//     console.log('inner this', this)
//   }.bind(this), 1000)
// }.bind({name: 'Yuriuh'}), 1000)

setTimeout(function() {
  console.log('this', this)
  setTimeout(() => {
    console.log('inner this', this)
  }, 1000)
}.bind({name: 'Yuriuh'}), 1000)