// bind
// call 和 apply 是直接调用函数, 而 bind 则是返回一个新函数 (并没有调用原来的函数)
// 这个新函数会 call 原来的函数, call 的参数由你指定

var $ = sel => document.querySelector(sel)

var view = {
  element: $('#container'),
  bindEvents() {
    // var _this = this
    // this.element.onclick = function() {
    //   _this.onClick.call(_this)
    // }

    // 等价于上面的写法
    this.element.onClick = this.onClick.bind(this)
  },
  onClick() {
    this.element.addClass('active')
  }
}

var max = Math.max.apply(null, numbers)
var min = Math.min.apply(null, numbers)