function quickSort(arr) {
    // 基本情况：如果数组长度为 0 或 1，直接返回
    if (arr.length <= 1) {
        return arr;
    }
    
    // 选择基准（这里选择数组的中间元素）
    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = arr[pivotIndex];
    
    // 用于存放小于、等于、大于基准的元素
    const left = [];
    const right = [];
    
    // 遍历数组中的所有元素，按大小分到不同的数组中
    for (let i = 0; i < arr.length; i++) {
        if (i === pivotIndex) continue; // 跳过基准元素本身
        
        if (arr[i] < pivot) {
            left.push(arr[i]); // 小于基准的放左边
        } else {
            right.push(arr[i]); // 大于等于基准的放右边
        }
    }
    
    // 递归排序左右两部分，并将结果合并返回
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// 测试快排
const arr = [34, 7, 23, 32, 5, 62, 32, 1];
console.log(quickSort(arr));
