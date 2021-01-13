const fs = require('fs')
module.exports = function(source) {
  console.log(source)
  const result = JSON.stringify(eval('(' + source + ')'))
  fs.readFile('config.json', function(err, data) {
    // eval函数可以将JSON字符串解析为对象 JSON.stringify(eval('(' + source + ')'))
    fs.writeFile('config.json', JSON.stringify(eval('(' + source + ')'), null, 2), function(err) {
      console.log("error", err)
      if (!err) {
        console.log('文件写入成功')
      } else {
        console.log('文件写入失败')
      }
    })
  })
  return result
}