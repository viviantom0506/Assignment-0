function sumOfNumsWithinARange(nums, start, end) {
  // Insert code here;
  var num = [];
  var count = 0;
  for(var i = start; i< end; i++) {
    if(nums[i] <= start || nums[i] <= end) {
      count++;
    }
    
  }
  return count;

}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;