//Code used in solving Project Euler problems
//Project Euler problem 1: sum of all multiples up to limit
const multipleSum = (mult1, mult2, limit) => {
    let sum = 0
    let multiples = []
    for(i=1; i<limit; i++){
      if(i%mult1 === 0 || i%mult2 === 0) {
        sum += i
        multiples.push(i)}
    }
    return sum
  }
  
  //Project Euler problem 2: sum ogf all even Fibonacci numbers that do not exceed 4 million
  //dp fibonacci
const fib = (n) => {
  memo = {}
  if(memo[n]) return memo[n]
  if(n <= 2) return 1
  else {
    f = fib(n-1) + fib(n-2)
    memo[n] = f
  return f}
}

  const evenFibonacci  = (upperLimit) => {
    evenFibNumbers = []
    i = 1
    while(fib(i)<upperLimit){
      if (fib(i)%2 ===0) evenFibNumbers.push(fib(i))
      i++
    }
    return evenFibNumbers.reduce((a,b)=>a+b,0)
  }

  //Project Euler solution 3, largest prime factor of n
function isPrime(n) 
{
    // Check if n is less than 2 => not prime
    if (n<2) return false;
    if(n===2) return true;
    // Loop from 2 to square root of n
    for (let i = 2; i <= Math.sqrt(n); i++) 
        // If i is a divisor of n, n is not prime
        if (n % i == 0) return false;

    return true;
}
const largestPrimeFactor=(n)=> {
  let currentLargest
  for(let i=1; i <= n; i++) {
    if(n%i === 0 && isPrime(i)) {
      currentLargest = i
      console.log(i)
  }
}
  return currentLargest
}


//Project Euler Problem 4 Find largest three digit palindromic number
const isPalindrome = (str) => {
  for(i=0; i<str.length/2; i++) {
    if(str[i]!==str[str.length-1-i]) return false
  }
  return true
}

const largesThreeDigitPalindromicNumber = () => {
  let largest = []
  for(let i=100; i<=999; i++){
    for(let j=100; j<=999; j++){
      curProduct = i*j
      let stringedNumber = curProduct.toString()
      if(isPalindrome(stringedNumber)) {
        largest.push(i*j)
      }  }}
  return Math.max(...largest)
}