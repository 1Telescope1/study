// function findPeakElement(nums: number[]): number {
//   return fn(nums, 0, nums.length - 1)
// };

// function fn(nums: number[], left: number, right: number) {
//   if (left == right) return left
//   const mid = Math.floor(left + right) / 2
//   if (nums[mid] < nums[mid + 1]) {
//     return fn(nums, mid + 1, right)
//   } else {
//     return fn(nums, left, mid)
//   }
// }

for(var i=0;i<3;i++) {
  setTimeout(()=>{
    console.log(i);
    
  })
}