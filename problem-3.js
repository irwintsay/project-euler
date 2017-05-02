// Problem 3: Largest prime factor

// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?


// Solution

// Return true if test is a prime number, otherwise false
function isPrime(test) {
  let prime = true;
  let divisor = 2;
  while(prime && divisor <= Math.ceil(test / 2)) {
    prime = test % divisor !== 0;
    divisor++;
  }
  return prime;
}

// Find the largest prime factor of test number
function solution(test) {
  if(isPrime(test)) {
    return `${test} is a prime number`;
  }
  else {
    let divisor = 2;
    let largestPrimeFactor = null;
    let found = false;
    let counter = 0;
    while(divisor <= Math.sqrt(test) && !found) {
      if(test % divisor === 0) {
        if(isPrime(test / divisor)) {
          largestPrimeFactor = test / divisor;
          found = true;
        } else if(isPrime(divisor)) {
          largestPrimeFactor = divisor;
        }
      }
      divisor++;
      counter++;
    }
    console.log('Iterations:', counter);
    return largestPrimeFactor;
  }
}

console.log(solution(13195));
console.log(solution(600851475143));