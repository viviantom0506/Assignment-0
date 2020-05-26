function pairSum(nums, target) {
  // Insert code here;
   let num = [];
   var sum = 0;
   if(nums.length <=1) {
    throw "Array should be more than 1";
  }
   for(var i = 0; i < nums.length; i++) {
     for(var j = i+1; j <nums.length; j++) {
     
   
    if(target === nums[i]) {
      return true;
    }
    else if((nums[i] + nums[j]) === target && i!=j) {
      return true;
    }
   
   
   
   
  }
}
return false;

}
// Do not edit this line;
module.exports = pairSum;