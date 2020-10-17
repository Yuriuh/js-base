Array.prototype.myForEach = function (fn) {
  fn = fn || (() => {})
  for (let i = 0; i < this.length; i++) {
    const item = this[i]
    fn(item, i, this)
  }
}

var arr = [1, 2, 3, 4, 5]
arr.myForEach((item, index, array) => {
  console.log(item, index, array)
})
