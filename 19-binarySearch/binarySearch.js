class MySolution {
  constructor() {
    this.flag = false;
  }

  binarySearch(nums, target) {
    // Insert code here;
    let beginning = 0; 
    let endIndex = nums.length - 1;  
    let middleIndex;    

     
    while (beginning <= endIndex){ 
      middleIndex = Math.floor((beginning + endIndex) / 2);  
      if(nums[middleIndex] === target){  
        return true;

      } else if (nums[middleIndex] > target){ 
        endIndex = middleIndex - 1;

      } else {
        beginning = middleIndex + 1; 
      }
    }
    return false; 

  }  
}
// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;