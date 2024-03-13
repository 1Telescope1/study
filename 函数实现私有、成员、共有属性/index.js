function Person(name) {
  // 私有属性
  let privateAge = 0;

  // 共有属性
  this.name = name;

  // 成员属性
  this.getAge = function () {
    return privateAge;
  };

  this.setAge = function (age) {
    if (typeof age === 'number' && age >= 0) {
      privateAge = age;
    } else {
      console.error('Invalid age');
    }
  };
}

// 静态属性
Person.species = 'Human';

// 示例用法
const john = new Person('John');
john.setAge(30);
console.log(john.getAge()); // 输出: 30
console.log(john.name); // 输出: John
console.log(Person.species); // 输出: Human
console.log(john.privateAge); // 输出: undefined
