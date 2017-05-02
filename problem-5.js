// Problem 5: Smallest multiple

// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?


// Solution

let perf = 0;

function checkAllDivisible(test, limit) {
  let allDivisible = true;
  while(allDivisible && limit > 0) {
    perf++;
    allDivisible = test % limit === 0;
    limit--;
  }
  return allDivisible;
}

function isPrime(test) {
  let prime = true;
  let divisor = 2;
  while(prime && divisor <= Math.ceil(test / 2)) {
    perf++;
    prime = test % divisor !== 0;
    divisor++;
  }
  return prime;
}

function productOfPrimes(limit) {
  let product = 1;
  for(let i = 2; i <= limit; i++) {
    perf++;
    if(isPrime(i)) {
      product *= i;
    }
  }
  return product;
}

function solution(limit) {
  let product = productOfPrimes(limit);
  let step = product;
  let test = null;
  while(!test) {
    perf++;
    test = checkAllDivisible(product, limit) ? product : false;
    product += step;
  }
  return test;
}

console.log(solution(20));
console.log('Perf:', perf);
