// Given a number N return the index value of the Fibonacci sequence, where the sequence is:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3
//For example: fibonacciRecursive(6) should return 8

// O(n)
function fibonacciIterative(n) {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    if (i < 2) {
      arr.push(i);
    } else if (i === 2) {
      arr.push(i - 2 + (i - 1));
    } else if (i > 2) {
      arr.push(arr[i - 2] + arr[i - 1]);
    }
  }
  return arr[n];
}
fibonacciIterative(6);

// O(2^n)
function fibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
fibonacciRecursive(6);

//memoization
var fib = function (N) {
  let map = {};
  return (function fibo(n) {
    if (n in map) {
      return map[n];
    } else {
      if (n === 0) {
        return n;
      } else if (n === 1) {
        return n;
      } else if (n >= 2) {
        map[n] = fibo(n - 1) + fibo(n - 2);
        return map[n];
      }
    }
  })(N);
};
