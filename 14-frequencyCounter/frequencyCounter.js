function frequencyCounter(word) {
  // Create a mapping of key frequency 

  let freq = {};

  // Split the string into an array of letters
  // If the key exists, increment
  // Otherwise, add the letter as a key and initialize its value to 1
  word.split('').forEach((character) => {
    if (freq[character]) {
      freq[character] += 1;
    } else {
      freq[character] = 1;
    }
  });

  return freq;
}

// Do not edit this line;
module.exports = frequencyCounter;