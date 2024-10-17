;(function (global) {
  function MyMap() {
    this._keys = []
    this._values = []
  }

  // 实现 set 方法
  MyMap.prototype.set = function (key, value) {
    var index = this._indexOfKey(key)
    if (index === -1) {
      // 如果键不存在，则添加键值对
      this._keys.push(key)
      this._values.push(value)
    } else {
      // 如果键存在，则更新其值
      this._values[index] = value
    }
    return this
  }

  // 实现 get 方法
  MyMap.prototype.get = function (key) {
    var index = this._indexOfKey(key)
    return index !== -1 ? this._values[index] : undefined
  }

  // 实现 has 方法
  MyMap.prototype.has = function (key) {
    return this._indexOfKey(key) !== -1
  }

  // 实现 delete 方法
  MyMap.prototype.delete = function (key) {
    var index = this._indexOfKey(key)
    if (index === -1) {
      return false
    }
    // 删除键值对
    this._keys.splice(index, 1)
    this._values.splice(index, 1)
    return true
  }

  // 实现 clear 方法
  MyMap.prototype.clear = function () {
    this._keys = []
    this._values = []
  }

  // 实现 size 属性
  MyMap.prototype.size = function () {
    return this._keys.length
  }

  // 实现 keys 方法
  MyMap.prototype.keys = function () {
    return this._keys.slice() // 返回键的副本
  }

  // 实现 values 方法
  MyMap.prototype.values = function () {
    return this._values.slice() // 返回值的副本
  }

  // 实现 entries 方法
  MyMap.prototype.entries = function () {
    var entries = []
    for (var i = 0; i < this._keys.length; i++) {
      entries.push([this._keys[i], this._values[i]])
    }
    return entries
  }

  // 私有方法: 查找键的索引
  MyMap.prototype._indexOfKey = function (key) {
    // 在 ES5 中，无法使用对象作为键来进行深度比较，因此这里只能基于基本类型查找
    for (var i = 0; i < this._keys.length; i++) {
      if (this._keys[i] === key) {
        return i
      }
    }
    return -1
  }

  // 将 MyMap 挂载到全局对象上
  if (!global.MyMap) {
    global.MyMap = MyMap
  }
})(typeof window !== "undefined" ? window : globalThis)

const a = new MyMap()
a.set("a", 123)

console.log(a, 1234)
console.log(a.get("a"))
