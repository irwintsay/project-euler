// 145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

// Find the sum of all numbers which are equal to the sum of the factorial of their digits.

// Note: as 1! = 1 and 2! = 2 are not sums they are not included.


// Solution

// Return array of all curious numbers
function findCuriousNums(n) {
  var curiousNums = [];

  for(let i = 3; i < n; i++) {
    if(findDigitFactorialSum(i) === i) {
      curiousNums.push(i);
    }
  }
  return curiousNums;
}

function factorial(i) {
  if(i < 0) {
    return "Out of bounds";
  } else if (i >= 2) {
    return i * factorial(i - 1);
  } else {
    return 1;
  }
}

function findDigitFactorialSum(num) {
  return `${num}`.split('').reduce((sum, i) => sum + factorial(parseInt(i)), 0);
}

console.log(findCuriousNums(10000000));