self.importScripts(
  "https://cdn.jsdelivr.net/npm/spark-md5@3.0.0/spark-md5.min.js"
)

self.onmessage = function (e) {
  const { index, chunk } = e.data
  const reader = new FileReader()

  reader.onload = function (event) {
    const arrayBuffer = event.target.result
    const spark = new SparkMD5.ArrayBuffer()
    spark.append(arrayBuffer)
    const hash = spark.end()
    self.postMessage({ index, hash })
  }

  reader.readAsArrayBuffer(chunk)
}
