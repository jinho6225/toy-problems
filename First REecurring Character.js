//firstRecurringCharacter-exercise

//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

function firstRecurringCharacter(input) {
  let hash = {};
  for (let i = 0; i < input.length; i++) {
    if (!hash[input[i]]) {
      hash[input[i]] = 1;
    } else {
      return input[i];
    }
  }
  return undefined;
}

var input = [2, 5, 5, 2, 3, 5, 1, 2, 4];
firstRecurringCharacter(input);
