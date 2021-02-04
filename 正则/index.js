// 模式 + 修饰符
// var regexp = new RegExp('pattern', 'flags')

var regexp = /pattern/gim // 伴随修饰符 g、m 和 i（后面会讲到）

// search 方法
var str = 'I love JavaScript!'

var regexp = /love/

console.log('search string', str.search(regexp))

// 修饰符

// i ignore 不区分大小写

var str = 'I love JavaScript!'

console.log(str.search(/LOVE/)) // -1（没找到）
console.log(str.search(/LOVE/i)) // 2

// g global 匹配所有

// m multiline 多行模式

// u 完整 unicode 支持

// y 粘滞模式

// 字符类

// \d digit 0 到 9 的字符
// \s space 空格 制表符\t 换行符\n \v \f \r
// \w word 拉丁字母 数字 下划线_

var str = '+7(903)-123-45-67'

var regexp = /\d/g

console.log(str.match(regexp)) // array of matches: 7,9,0,3,1,2,3,4,5,6,7

// let's make the digits-only phone number of them:
console.log(str.match(regexp).join('')) // 79035419441

// 反向类

// \D 非数字
// \S 非空格符号
// \W 非单字字符

var str = '+7(903)-123-45-67'

console.log(str.replace(/\D/g, '')) // 79031234567

// 16进制数字

var regexp = /x\p{Hex_Digit}\p{Hex_Digit}/u

console.log('number: xAF'.match(regexp)) // xAF
