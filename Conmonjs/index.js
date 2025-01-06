const fs = require("fs")
const path = require("path")
const cache = {} // 缓存模块

function customRequire(modulePath) {
  // 1. 获取模块的绝对路径
  var moduleId = path.resolve(modulePath)

  // 2. 判断是否已经缓存过
  if (cache[moduleId]) {
    return cache[moduleId]
  }

  // 3. 准备并运行辅助函数
  var module = { exports: {} }
  var exports = module.exports
  var __filename = moduleId
  var __dirname = path.dirname(__filename)

  // 读取模块代码
  var code = fs.readFileSync(__filename, "utf8")

  // 通过 `new Function` 构建可执行函数，并运行
  var moduleFunc = new Function(
    "exports",
    "require",
    "module",
    "__filename",
    "__dirname",
    code
  )
  moduleFunc(exports, customRequire, module, __filename, __dirname)

  // 4. 缓存模块的导出结果
  cache[moduleId] = module.exports

  // 5. 返回模块的导出结果
  // 起初this、exports、module.exports是同一指向，但最后返回module.exports
  return module.exports
}


module.exports = customRequire
