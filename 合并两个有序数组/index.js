const arr1 = [1, 2, 5, 6, 8];
const arr2 = [3, 5, 5, 6, 7, 7, 8, 9];

function merge(arr1, arr2) {
  let len1 = arr1.length - 1;
  let len2 = arr2.length - 1;
  let len = len1 + len2 + 1;

  while (len1 >= 0 && len2 >= 0) {
    if (arr1[len1] > arr2[len2]) {
      arr1[len--] = arr1[len1--];
    } else {
      arr1[len--] = arr2[len2--];
    }
  }
  while (len2 >= 0) {
    arr1[len--] = arr2[len2--];
  }
  return arr1;
}

console.log(merge(arr1, arr2));
