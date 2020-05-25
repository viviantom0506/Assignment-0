function fizzBuzz(start, end) {
  // Insert code here;
 
    // Insert code here;
    var array = [];
    for(var i = start; i <= end; i++) {
      if(i % 3 === 0 && i % 5 != 0) {
        array.push("Fizz");
      }
       if(i % 5 === 0 && i % 3 != 0) {
        array.push("Buzz");
      }
      if(i % 3 === 0 && i % 5 === 0) {
        array.push("FizzBuzz");
      }
      if(i % 3 != 0 && i % 5 != 0) {
        array.push(i);
      }
    }
    return array;
  }

// Do not edit this line;
module.exports = fizzBuzz;