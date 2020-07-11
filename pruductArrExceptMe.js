/*
Good morning! Here's your coding interview problem for today.
This problem was asked by Uber.
Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].
Follow-up: what if you can't use division?
*/

//return newArr
//define newArr
//defined sum function outside
//for loop
//make new array except i (using slice)
//invoke sum function passing new array as an argument
//return value will be push into newArr
//return newArr

const pruductArrExceptMe = function (arr) {
  let newArr = [];
  function sum(arr) {
    let total = 1;
    arr.forEach((ele) => {
      total *= ele;
    });
    return total;
  }
  for (let i = 0; i < arr.length; i++) {
    let nArr = arr.slice(0, i).concat(arr.slice(i + 1));
    newArr.push(sum(nArr));
  }
  return newArr;
};

let input = [1, 2, 3, 4, 5];
// [120, 60, 40, 30, 24].
// let input = [3, 2, 1]
// [2, 3, 6].
pruductArrExceptMe(input);
