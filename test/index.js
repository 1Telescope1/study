const file = new File(['Hello, World!'], 'hello.txt', { type: 'text/plain' });

const fileReader = new FileReader();

fileReader.onload = (e) => {
  // 通过 e.target?.result 获取读取的文件块内容，并将其转换为 ArrayBuffer 类型
  const fileBuffer = e.target?.result;
  console.log(fileBuffer); // ArrayBuffer {...}
};

// 读取文件内容
fileReader.readAsArrayBuffer(file);
