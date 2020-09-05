/*
Shortest Word Edit Path
Given two words source and target, and a list of words words, find the length of the shortest series of edits that transforms source to target.

Each edit must change exactly one letter at a time, and each intermediate word(and the final target word) must exist in words.

If the task is impossible, return -1.
Examples:
source = "bit", target = "dog"
words = ["but", "put", "big", "pot", "pog", "dog", "lot"]

O(N*K^2)

*/

function shortestWordEditPath(source, target, words) {
    // your code goes here
    if (!words.includes(target) || source.length !== target.length) {
      return -1
    }
    let count = 0, prev = null
    words.sort()
    while (words.length) { 
      let removeTarget = null
      for (let i = 0; i < words.length; i++) {    
          let diffCount = 0
        for (let j = 0; j < words[i].length; j++) {
          if (source[j] !== words[i][j]) {
            diffCount++
          }
        }
        if (diffCount === 1) {
             removeTarget = words[i]
            break;
        }    
      }
      if (removeTarget) count++
      if (target === removeTarget) {
          return count
      }
      if (removeTarget !== null) {
        let idx = words.indexOf(removeTarget)
            words.splice(idx, 1)
            prev = source
            source = removeTarget 
      } else {
        source = prev
        count--
      }
    }
    return -1
}
