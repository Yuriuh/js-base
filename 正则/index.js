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

// 锚点：字符串开始^与结尾$

// 测试 12:34 格式的时间
var goodInput = '13:34'
var badInput = '123:456'
var regexp = /^\d\d:\d\d$/
console.log(regexp.test(goodInput)) // true
console.log(regexp.test(badInput)) // false

// Flag "m" — 多行模式

var str = `1st place: Winnie
2nd place: Piglet
33rd place: Eeyore`

console.log(str.match(/^\d+/gm)) // 1, 2, 33

// 词边界 \b

var regexp = /\bJava\b/
console.log('Hello, Java!'.match(regexp)) // Java

// 转义、特殊字符

// 特殊字符列表:
// [ \ ^ $ . | ? * + ( )

console.log('Chapter 5.1'.match(/\d\.\d/)) // 5.1
console.log('function g()'.match(/g\(\)/)) // "g()"
console.log('1\\2'.match(/\\/)) // '\'

// 量词 `+,*,?` 和 `{n}`

console.log("I'm 12345 years old".match(/\d{5}/)) //  "12345"
console.log("I'm not 12, but 1234 years old".match(/\d{3,5}/)) // "1234"
console.log("I'm not 12, but 345678 years old".match(/\d{3,}/)) // "345678"

var str = '+7(903)-123-45-67'

var numbers = str.match(/\d{1,}/g)

console.log(numbers) // 7,903,123,45,67

// 缩写

var str = '+7(903)-123-45-67'

console.log(str.match(/\d+/g)) // 7,903,123,45,67

var str = 'Should I write color or colour?'

console.log(str.match(/colou?r/g)) // color, colour

console.log('100 10 1'.match(/\d0*/g)) // 100, 10, 1

// 贪婪搜索

var reg = /".+"/g

var str = 'a "witch" and her "broom" is one'

console.log(str.match(reg)) // "witch" and her "broom"

// 懒惰模式

var reg = /".+?"/g

var str = 'a "witch" and her "broom" is one'

console.log(str.match(reg)) // witch, broom

// 替换方法

var reg = /"[^"]+"/g

var str = 'a "witch" and her "broom" is one'

console.log(str.match(reg)) // witch, broom

// 捕获组

console.log('Gogogo now!'.match(/(go)+/i)) // "Gogogo"

// 例子：域名

var regexp = /(\w+\.)+\w+/g

console.log('site.com my.site.com'.match(regexp)) // site.com,my.site.com

// 例子：邮箱

var regexp = /[-.\w]+@([\w-]+\.)+[\w-]+/g

console.log('my@mail.com @ his@site.com.uk'.match(regexp)) // my@mail.com, his@site.com.uk

// 例子： 匹配括号中的内容

var str = '<h1>Hello, world!</h1>'

var tag = str.match(/<(.*?)>/)

console.log(tag)
console.log(tag[0]) // <h1>
console.log(tag[1]) // h1

// 嵌套组

var str = '<span class="my">'

var regexp = /<(([a-z]+)\s*([^>]*))>/

var result = str.match(regexp)
console.log(result[0]) // <span class="my">
console.log(result[1]) // span class="my"
console.log(result[2]) // span
console.log(result[3]) // class="my"

var match = 'ac'.match(/a(z)?(c)?/)

console.log(match.length) // 3
console.log(match[0]) // ac（完全匹配）
console.log(match[1]) // undefined，因为 (z)? 没匹配项
console.log(match[2]) // c

// /g 不会返回组的内容

var str = '<h1> <h2>'

var tags = str.match(/<(.*?)>/g)

console.log(tags) // <h1>,<h2>

// matchAll

var results = '<h1> <h2>'.matchAll(/<(.*?)>/gi)

// results - is not an array, but an iterable object
console.log(results) // [object RegExp String Iterator]

console.log(results[0]) // undefined (*)

results = Array.from(results) // let's turn it into array

console.log(results[0]) // <h1>,h1 (1st tag)
console.log(results[1]) // <h2>,h2 (2nd tag)
