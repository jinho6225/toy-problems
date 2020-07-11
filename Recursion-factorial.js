// Write two functions that finds the factorial of any number.
// One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  //code here
  if (number === 1) {
    return 1;
  }
  let answer = 1 * number;
  console.log('recursion');
  return answer * findFactorialRecursive(number - 1);
}

findFactorialRecursive(5);

function findFactorialIterative(number) {
  //code here
  let answer = 1;
  while (number >= 1) {
    answer = answer * number;
    number--;
  }
  console.log('iterative');
  return answer;
}
findFactorialIterative(5);
