/*
同步与异步
同步: 等待结果
异步: 不等待结果

注意: 异步常常伴随回调一起出现, 但是异步不是回调, 回调也不是异步.
*/

// 同步的 sleep
function sleep(seconds) {
  let start = new Date()
  while (new Date() - start < seconds * 1000) {}
  return
}

console.log(1)
sleep(3)
console.log('wake up')
console.log(2)