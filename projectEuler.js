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