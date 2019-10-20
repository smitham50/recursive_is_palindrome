function isPalindrome(word) {
  console.log("WORD", word)
  if (word.length === 0 || word.length === 1) {
    return true;
  }
  if (word[0] !== word[word.length - 1]) {
    return false;
  }
  return isPalindrome(word.substr(1, word.length - 2));
}

console.log(isPalindrome("seashells"));
console.log(isPalindrome("rotator"));
console.log(isPalindrome("sagas"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("sentences"));


