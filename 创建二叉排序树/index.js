class ListNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left ? left : null;
    this.right = right ? right : null;
  }
}

const arr = [3, 5, 5, 6, 7, 7, 8, 9];

function createTree(arr) {
  if (arr.length == 0) return;
  const mid = Math.floor(arr.length / 2);
  const root = new ListNode(arr[mid]);
  root.left = createTree(arr.slice(0, mid));
  root.right = createTree(arr.slice(mid + 1));

  return root;
}

console.log(createTree(arr));
