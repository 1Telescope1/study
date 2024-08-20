function findPeakElement(nums: number[]): number {
  if(nums.length==1) return 0
  let left = 0, right = nums.length
  return fn(nums, left, right)
};

function fn(nums: number[], left: number, right: number): number {
  console.log(nums,left,right)
  if(left >= right) return 0
  const mid = Math.floor((left + right) / 2)
  if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
    return mid
  } else {
    return fn(nums.slice(left, mid), left, mid - 1) || fn(nums.slice(mid, right), mid, right)
  }
}

console.log(findPeakElement([1, 2, 3, 1]));
