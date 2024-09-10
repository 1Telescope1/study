// const a = {
//   value: 1,
//   valueOf: function () {
//     return this.value++;
//   }
// };

// console.log(a == 1 && a == 2 && a == 3);

// function fn(a, b) {
//   console.log(a);
//   c = 0;
//   var c;
//   a = 3;
//   b = 2;
//   console.log(b);
//   function a() {}
//   console.log(b);
// }

// fn(1);

// let globalVar = "I'm global";

// function outerFunc() {
//   let outerVar = "I'm outside";

//   function innerFunc() {
//     let innerVar = "I'm inside";

//     console.log(globalVar);
//     console.log(outerVar);
//     console.log(innerVar);

//     globalVar = 'Changed globally';
//   }

//   innerFunc();

//   console.log(globalVar);
// }

// outerFunc();

// console.log(globalVar);

var a = 1;

function a() {
  console.log(a, 456);
  let a = 2;
}
console.log(a, 123);
a();
