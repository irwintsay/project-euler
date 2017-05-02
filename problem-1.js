// Problem 1: Multiples of 3 and 5

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.


// ===== Solution

// Sum of Multiples takes a range and an array of multiples to sum up
function sumOfMultiples(range, multiples) {
  let sum = 0;

  for(let i = 1; i < range; i++) {
    let isMultiple = false;
    multiples.forEach(multiple => {
      if(i % multiple === 0) {
        isMultiple = true;
      }
    })
    sum += isMultiple ? i : 0;
  }

  return sum;
}

// Return true if test number is an even multiple of `multiple`
function testMultiple(test, multiple) {
  return test % multiple === 0 ? true : false;
}

console.log(sumOfMultiples(10, [3, 5]));
console.log(sumOfMultiples(1000, [3, 5]));