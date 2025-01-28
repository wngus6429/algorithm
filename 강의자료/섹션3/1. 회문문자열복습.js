function solution2(word) {
  if (word.toUpperCase() === word.toUpperCase().split("").reverse().join("")) {
    return "YES";
  } else {
    return "NO";
  }
}

const problem2 = "goooG";
console.log(solution2(problem2));
// 20250129 복습

function isPalindrome(word) {
  word = word.toUpperCase();
  const len = word.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (word[i] !== word[len - 1 - i]) {
      return "NO";
    }
  }
  return "YES";
}

const problem3 = "racecar";
console.log(isPalindrome(problem3));
