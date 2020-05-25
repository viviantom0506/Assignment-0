function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  let min = nums[0];
  let max = nums[0];
  var sum = min+max;
  for(var i = 0; i < nums.length; i++) {
    if(nums[i] >= max) {
      nums[i] = max;
    }
    else if(nums[i] <= min) {
      nums[i] = min;
    }
    return sum = max+min;
  }
}
// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;