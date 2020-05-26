function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  let finalSet = new Set();
  for(var i = 0; i < args.length; i++) {
    for(let numbers of args[i]) {
      finalSet.add(numbers);
    }
    
  }
  return finalSet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;