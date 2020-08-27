/*
Award Budget Cuts
The awards committee of your alma mater (i.e. your college/university) asked for your assistance with a budget allocation problem they’re facing. Originally, the committee planned to give N research grants this year. However, due to spending cutbacks, the budget was reduced to newBudget dollars and now they need to reallocate the grants. The committee made a decision that they’d like to impact as few grant recipients as possible by applying a maximum cap on all grants. Every grant initially planned to be higher than cap will now be exactly cap dollars. Grants less or equal to cap, obviously, won’t be impacted.
Given an array grantsArray of the original grants and the reduced budget newBudget, write a function findGrantsCap that finds in the most efficient manner a cap such that the least number of recipients is impacted and that the new budget constraint is met (i.e. sum of the N reallocated grants equals to newBudget).
Analyze the time and space complexities of your solution.

Example:
input:  grantsArray = [2, 100, 50, 120, 1000], newBudget = 190
output: 47 # and given this cap the new grants array would be
           # [2, 47, 47, 47, 47]. Notice that the sum of the
           # new grants is indeed 190
Constraints:

[time limit] 5000ms
[input] array.double grantsArray
0 ≤ grantsArray.length ≤ 20
0 ≤ grantsArray[i]
[input] double newBudget

[output] double
*/

function findGrantsCap(grantsArray, newBudget) {
  
    grantsArray.sort((a,b)=> a-b); // must sort this
    
    /*
    let avgBudgets = newBudget / grantsArray.length; // 190 / 5 = 38
    
    for (let i = 0; i < grantsArray.length && avgBudgets > grantsArray[i]; i++) {
      
      const currentGrant = grantsArray[i];
     
      const leftOver = avgBudgets - currentGrant; //  38 - 2 = 36
      const restOfBudgets = (grantsArray.length - 1) - i;
      
      const amountToIncrease = leftOver / restOfBudgets; // 36 / 4 = 9
      avgBudgets += amountToIncrease; // 38 + 9 = 47
    }
    
    return avgBudgets;
    */
    
    // alternative
    /*
    
      if (grantsArray == null || newBudget <= 0) return 0;
  
      grantsArray.sort((a, b) => a - b);
  
      let prefixSum = 0;
  
      for (let index = 0; index < grantsArray.length; index++) {
          const current = grantsArray[index];
          const available = newBudget - prefixSum;
          const numbersLeft = grantsArray.length - index;
  
          if (current * numbersLeft > available) return available / numbersLeft;
  
          prefixSum += current;
      }
  
      return grantsArray[grantsArray.length - 1];
    */

    // alternative
    /*
    let dividedNum = newBudget / grantsArray.length; // 1.5
    while (grantsArray[0] < dividedNum) { // 2 < 1.5
      newBudget -= grantsArray[0] // 
      grantsArray.shift() // leads to O(n^2) but if you implemented a queue LL then it'll be O(n)
      dividedNum = newBudget / grantsArray.length //
    }
    return dividedNum
  */
    
    let dividedNum = newBudget / grantsArray.length; // 1.5
    let i = 0
    let len = grantsArray.length
    while (grantsArray[i] < dividedNum) { // 2 < 1.5
      newBudget -= grantsArray[i]
      i++
      len--
      dividedNum = newBudget / len
    }
    return dividedNum
   
  }
  
  
  
  const newBudget = 400
  const grantsArray = [2,100,50,120,167] // total = 439
  
  findGrantsCap(grantsArray, newBudget)