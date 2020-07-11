/*
Good morning! Here's your coding interview problem for today.
This problem was recently asked by Google.
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
Bonus: Can you do this in one pass?
*/

const isThere = function (arr, k) {
  for (let i = 0; i < arr.length; i++) {
    let target = k - arr[i];
    if (arr.includes(target)) return true;
  }
  return false;
};

let input = [10, 15, 3, 7];
let k = 17;
isThere(input, k);
