//Code used in solving Project Euler problems
//Project Euler problem 1: sum of all multiples up to limit
const multipleSum = (mult1, mult2, limit) => {
  let sum = 0;
  let multiples = [];
  for (i = 1; i < limit; i++) {
    if (i % mult1 === 0 || i % mult2 === 0) {
      sum += i;
      multiples.push(i);
    }
  }
  return sum;
};

//Project Euler problem 2: sum ogf all even Fibonacci numbers that do not exceed 4 million
//dp fibonacci
const fib = n => {
  memo = {};
  if (memo[n]) return memo[n];
  if (n <= 2) return 1;
  else {
    f = fib(n - 1) + fib(n - 2);
    memo[n] = f;
    return f;
  }
};

const evenFibonacci = upperLimit => {
  evenFibNumbers = [];
  i = 1;
  while (fib(i) < upperLimit) {
    if (fib(i) % 2 === 0) evenFibNumbers.push(fib(i));
    i++;
  }
  return evenFibNumbers.reduce((a, b) => a + b, 0);
};

//Project Euler solution 3, largest prime factor of n
function isPrime(n) {
  // Check if n is less than 2 => not prime
  if (n < 2) return false;
  if (n === 2) return true;
  // Loop from 2 to square root of n
  for (let i = 2; i <= Math.sqrt(n); i++)
    // If i is a divisor of n, n is not prime
    if (n % i == 0) return false;

  return true;
}
const largestPrimeFactor = n => {
  let currentLargest;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0 && isPrime(i)) {
      currentLargest = i;
      console.log(i);
    }
  }
  return currentLargest;
};

//Project Euler Problem 4 Find largest three digit palindromic number
const isPalindrome = str => {
  for (i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
};

const largesThreeDigitPalindromicNumber = () => {
  let largest = [];
  for (let i = 100; i <= 999; i++) {
    for (let j = 100; j <= 999; j++) {
      curProduct = i * j;
      let stringedNumber = curProduct.toString();
      if (isPalindrome(stringedNumber)) {
        largest.push(i * j);
      }
    }
  }
  return Math.max(...largest);
};

//brute force Problem 5 (evenly divisible number by up to 20)
const evenlyDivisible = () => {
  max = 1000000000000;
  found = false;
  for (i = 10; i < max; i += 20) {
    if (
      i % 2 === 0 &&
      i % 3 === 0 &&
      i % 4 === 0 &&
      i % 5 === 0 &&
      i % 6 === 0 &&
      i % 7 === 0 &&
      i % 8 === 0 &&
      i % 9 === 0 &&
      i % 10 === 0 &&
      i % 11 === 0 &&
      i % 12 === 0 &&
      i % 13 === 0 &&
      i % 14 === 0 &&
      i % 15 === 0 &&
      i % 16 === 0 &&
      i % 17 === 0 &&
      i % 18 === 0 &&
      i % 19 === 0 &&
      i % 20 === 0
    )
      return i;
  }

  return false;
};

//Problem 6 sum of the squares minus the root of the sum
const sumOfTheSquares = num => {
  let sumOfSquares = 0;
  let sumOfRoot = 0;
  let add = 0;
  for (i = 0; i <= num; i++) {
    sumOfSquares += Math.pow(i, 2);
    add += i;
  }
  sumOfRoot = Math.pow(add, 2);

  return sumOfRoot - sumOfSquares;
};

Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

Examples:

s = "3[a]2[bc]", return "aaabcbc".
s = "3[a2[c]]", return "accaccacc".
s = "2[abc]3[cd]ef", return "abcabccdcdcdef".

Accepted

// s = "3[a]2[bc]", return "aaabcbc".
const isNum = (num)=>{
  numbers = '0123456789'
  if(numbers.indexOf(num)) return true
  return
}
const decode = (str) => {
  ans = ''
  for(i=0; i<str.length; i++){

    if(str[i]==='[') {
      ans+=str[i+1].repeat(Number(str[i-1]))
      i++
    }
  }
  return ans
}
