// 模式 + 修饰符
// var regexp = new RegExp('pattern', 'flags')

var regexp = /pattern/gim // 伴随修饰符 g、m 和 i（后面会讲到）

// search 方法
var str = 'I love JavaScript!'

var regexp = /love/

console.log('search string', str.search(regexp))

// 修饰符

// i ignore 不区分大小写

// g global 匹配所有

// m multiline 多行模式

// u 完整 unicode 支持

// y 粘滞模式
