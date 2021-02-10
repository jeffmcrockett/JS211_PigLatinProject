'use strict'

let smallestNonNegative = function(num1, num2) {
  if (num1 < 0) {
      return num2;
  }
  if (num2 < 0) {
      return num1;
  }
  if (num1 < num2) {
      return num1;
  }   else {
      return num2;
  }
}

let indexOfFirstVowel = function(word) {
  // first find the indexes of all vowels
  // compare vowels one at time, carrying the smaller indexed vowel
  let aIndex = word.indexOf("a");
  let eIndex = word.indexOf("e");
  let iIndex = word.indexOf("i");
  let oIndex = word.indexOf("o");
  let uIndex = word.indexOf("u");
  let vowelArray = [aIndex, eIndex, iIndex, oIndex, uIndex];
  let vowel = -1;
  for (let x = 0; x < vowelArray.length; x++) {
    vowel = smallestNonNegative(vowel, vowelArray[x])
  }
  // return the index position of the first vowel
  return vowel;
}

const pigLatin = function(word) {
  // add yay to the end of a word that starts with a vowel
  if (indexOfFirstVowel(word) == 0) {
      return word+"yay";
  }
  // add ay to the end of the word that has no vowels
  if (indexOfFirstVowel(word) == -1) {
      return (word+"ay");
  }
  // remove the consonants before the first vowel
  // of a word that does not start with a vowel and add
  // those consonants to the end of the word + ay
  if (indexOfFirstVowel(word) > 0) {
    let position = indexOfFirstVowel(word);
    // word with one consonant before the first vowel
    if (position == 1) {
        let charMove = word.charAt(0);
        let newStr = word.slice(1);
        return newStr+charMove+"ay";
    }
    // word with two consonants before the first vowel
    if (position == 2) {
        let charMove = (word.charAt(0))+(word.charAt(1));
        let newStr = word.slice(2);
        return newStr+charMove+"ay";
    }
    // word with three consonants before the first vowel
    if (position == 3) {
        let charMove = (word.charAt(0))+(word.charAt(1))+(word.charAt(2));
        let newStr = word.slice(3);
        return newStr+charMove+"ay";
    }
    // word with four consonants before the first vowel
    if (position == 4) {
        let charMove = (word.charAt(0))+(word.charAt(1))+(word.charAt(2))+(word.charAt(3));
        let newStr = word.slice(4);
        return newStr+charMove+"ay";
    }
  }
}

// function onclick to run the translation functions
let translate = function () {
  let inputBox = document.getElementById('input'); 
  let input = inputBox.value;
  let newWord = (pigLatin(input))
  let output = document.createElement('div');
  let text = document.createTextNode(newWord);
  document.body.appendChild(output);
  output.appendChild(text);
}


let button2 = document.getElementById("translateNow");
button2.addEventListener('click', translate);








// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins in with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.



