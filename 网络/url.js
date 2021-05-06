// 创建 URL 对象
var url1 = new URL('https://www.baidu.com/?wd=bill')

console.log('url1', url1)

// 编码（encoding）

var url2 = new URL('https://www.baidu.com')

url2.searchParams.set('key', 'ъ')

console.log('url2', url2)
