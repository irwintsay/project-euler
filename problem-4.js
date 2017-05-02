// Problem 4: Largest palindrome product

// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.


// Solution

function isPalindrome(test) {
  return test === parseInt(`${test}`.split('').reverse().join(''));
}

// Find the largest palindrome product of X-digit numbers
function findLargest(numDigits) {
  let upper = '';
  for(let i = 1; i <= numDigits; i++) {
    upper += 9;
  }
  let lower = parseInt(upper.substring(0, upper.length - 1));
  upper = parseInt(upper);
  let test = Math.pow(upper, 2);

  let found = false;
  let x = null, y = null;
  let perf = 0;
  while(!found) {
    perf++;
    if(isPalindrome(test)) {
      let counter = upper;
      let sqrt = Math.sqrt(test);
      while(!found && counter >= sqrt && counter > lower) {
        if(test % counter === 0 && test / counter <= upper) {
          found = true;
          x = counter;
          y = test / counter;
        }
        counter--;
        perf++;
      }
    }
    test--;
  }
  console.log(x, y, test + 1, perf);
}

findLargest(3);