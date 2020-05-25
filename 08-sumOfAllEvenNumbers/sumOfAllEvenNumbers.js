function sumOfAllEvenNumbers(nums) {
  // Insert code here;
  let num = [];
  var sum = 0;
  var i;
  for(i = 0; i < nums.length; i++) {
    if(nums[i] %2 === 0) {
      sum += i;
      count++;
    }
  }
  return count;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;