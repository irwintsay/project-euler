// Problem 4: Largest palindrome product

// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.


// Solution

function isPalindrome(test) {
  return test === parseInt(`${test}`.split('').reverse().join(''));
}

// Find the largest palindrome product of X-digit numbers
function findLargestPalindromeProduct(numDigits) {
  let upper = '';
  for(let i = 1; i <= numDigits; i++) {
    upper += 9;
  }
  let lower = parseInt(upper.substring(0, upper.length - 1));
  upper = parseInt(upper);
  let test = Math.pow(upper, 2) + 1;
  let found = false;
  while(!found) {
    test--;
    if(isPalindrome(test)) {
      let factor = upper;
      let sqrt = Math.sqrt(test);
      while(!found && factor >= sqrt && factor > lower) {
        if(test % factor === 0 && test / factor <= upper) {
          found = true;
          console.log(test, factor, test / factor);
        }
        factor--;
      }
    }
  }
  return test;
}

console.log('The largest palindrome product is:', findLargestPalindromeProduct(3));