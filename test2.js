
//2. Birthday(Random) collision:
/*
a) For a group of 50 people, what is the probability that there are 
at least two of them have the same birthday(excluding year). 
assume that there are 365 days of the year, 
and using a formula to represent the result is acceptable.

96.5%
round up 97%

Number of pairs	1225 = (50 * 49)/2
Chance of a unique pair	99.7260% = 364/365
Chance of 1225 unique pairs	3.47% = (99.7260%)^1225
Chance of some match	96.53% = 1 - 3.47%
Actual Match %	100.00% = (1/1)

b) What is the minimum number of people of the group, for which the probability of two or more people have the same birthday is over 50%?

23 people

c) In a set of a billion random 32-bit integers, what is the probability of two or more integers have equal value.

d) For a set of N random numbers of m-bits binary data, what is the probability of two or more of them are equal.
*/


// 5. Write the fastest function to compute n factorial, where output should be within 1 to 2^63 n > 0, for n if its factorial is bigger than 2^63 return -1 to indicate overflow or infinite.
function recursiveFac(n) {
    if (n === 0) { return 1 } 
    else { return n * recursiveFac(n - 1) }
}

const memo = {}
function memoFac(n) {
  debugger;
  if (memo[n]) { 
    return memo[n] 
  } else { 
    if (n === 0) { 
      memo[n] = 1
    } else { 
      memo[n] = n * recursiveFac(n - 1)
    } 
  }
  return memo[n]
}

memoFac(3)