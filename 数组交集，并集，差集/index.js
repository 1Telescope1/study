const a1 = [1, 2, 5, 4, 3, 2, 1, 7];
const a2 = [3, 4, 6, 0, 3, 2, 1, 5];

// 计算数组的交集
function intersection(arr1, arr2) {
  const set = new Set(arr1.filter((value) => arr2.includes(value)));
  return Array.from(set);
}

// 计算数组的并集
function union(arr1, arr2) {
  const set = new Set([...arr1, ...arr2]);
  return Array.from(set);
}

// 计算数组的差集
function difference(arr1, arr2) {
  const set2 = new Set(arr2);
  return Array.from(arr1.filter((value) => !set2.has(value)));
}

// 例子
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

console.log(intersection(a1, a2)); // [3, 4, 5]
console.log(union(a1, a2)); // [1, 2, 3, 4, 5, 6, 7]
console.log(difference(a1, a2)); // [1, 2]
