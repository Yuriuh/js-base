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

// matchAll 返回的格式

var results = '<h1> <h2>'.matchAll(/<(.*?)>/gi)

var [tag1, tag2] = results

console.log(tag1[0]) // <h1>
console.log(tag1[1]) // h1
console.log(tag1.index) // 0
console.log(tag1.input) // <h1> <h2>

// 命名组

var dateRegexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g

var str = '2019-10-30 2020-01-01'

var results = str.matchAll(dateRegexp)

for (var result of results) {
  var { year, month, day } = result.groups

  console.log(`${day}`)
  console.log(`${month}`)
  console.log(`${year}`)
}

// 替换捕获组

var str = 'John Bull'
var regexp = /(\w+) (\w+)/

console.log(str.replace(regexp, '$2, $1')) // Bull, John

// 非捕获组 ?:

var str = 'Gogogo John!'

// ?: 从捕获组中排除 'go'
var regexp = /(?:go)+ (\w+)/i

var result = str.match(regexp)

console.log(result[0]) // Gogogo John（完全匹配）
console.log(result[1]) // John
console.log(result.length) // 2（数组中没有更多项）

// 反模式

var str = `He said: "She's the one!".`

var regexp = /(['"])(.*?)\1/g

console.log(str.match(regexp)) // "She's the one!"

// 选择（OR）|

var reg = /html|php|css|java(script)?/gi

var str = 'First HTML appeared, then CSS, then JavaScript'

console.log(str.match(reg)) // 'HTML', 'CSS', 'JavaScript'

// 时间正则表达式

var reg = /[01]\d|2[0-3]:[0-5]\d/g

console.log('12'.match(reg)) // 12 (matched [01]\d)

// 前瞻肯定断言

var str = '1 turkey costs 30€'

console.log(str.match(/\d+(?=€)/)) // 30 （正确地跳过了单个的数字 1）

// 前端否定断言

var str = '2 turkeys cost 60€'

console.log(str.match(/\d+(?!€)/)) // 2（正确地跳过了价格）

// 后瞻肯定断言

var str = '1 turkey costs $30'

console.log(str.match(/(?<=\$)\d+/)) // 30 （跳过了单个的数字 1）

// 后瞻否定断言

var str = '2 turkeys cost $60'

console.log(str.match(/(?<!\$)\d+/)) // 2 (跳过了价格)

// 前瞻断言合后端断言的捕获组

var str = '1 turkey costs 30€'
var reg = /\d+(?=(€|kr))/ // €|kr 两边有额外的括号

console.log(str.match(reg)) // 30, €

var str = '1 turkey costs $30'
var reg = /(?<=(\$|£))\d+/

console.log(str.match(reg)) // 30, $

// 防止回溯

var regexp = /^((?=(\w+))\2\s?)*$/

console.log(regexp.test('A good string')) // true

var str =
  'An input string that takes a long time or even makes this regex to hang!'

console.log(regexp.test(str)) // false，执行得很快！

// 括号被命名为 ?<word>，使用 \k<word> 来引用
var regexp = /^((?=(?<word>\w+))\k<word>\s?)*$/

var str =
  'An input string that takes a long time or even makes this regex to hang!'

console.log(regexp.test(str)) // false

console.log(regexp.test('A correct string')) // true

var str = 'let varName = "value"'

var regexp = /\w+/y

regexp.lastIndex = 3
console.log(regexp.exec(str)) // null（位置 3 有一个空格，不是单词）

regexp.lastIndex = 4
console.log(regexp.exec(str)) // varName（在位置 4 的单词）

// str.match(regexp)

var str = 'I love JavaScript'

var result = str.match(/Java(Script)/)

console.log(result[0]) // JavaScript（完全匹配）
console.log(result[1]) // Script（第一个分组）
console.log(result.length) // 2

// 其他信息：
console.log(result.index) // 7（匹配位置）
console.log(result.input) // I love JavaScript（源字符串）

// 带 g
var str = 'I love JavaScript'

var result = str.match(/Java(Script)/g)

console.log(result[0]) // JavaScript
console.log(result.length) // 1
