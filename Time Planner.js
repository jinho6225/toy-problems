function meetingPlanner(slotsA, slotsB, dur) {
    // your code goes here
    let array = []
    for (let i = 0; i < slotsA.length; i++) {
      for (let j = 0; j < slotsB.length; j++) {
        if (compare(slotsA[i], slotsB[j], dur)) {
          array.push(Math.max(slotsA[i][0], slotsB[j][0]), Math.max(slotsA[i][0], slotsB[j][0])+dur)
          return array
        }
      }
    }
    return array
  }
  
  function compare(a, b, dur) {
    return Math.max(a[0], b[0]) + dur <= Math.min(a[1], b[1]);
  }

/*
*/
  
  //Jin-ho
  //Sebastian

//tiem: O(n)
//space: O(1)
  function meetingPlanner(slotsA, slotsB, dur) {
    let po1 = 0, po2 = 0, result
    while (po1 < slotsA.length || po2 < slotsB.length) {
      if (slotsB[po2] === undefined) break;
      if (slotsA[po1][1] > slotsB[po2][0]) {
        result = helper(slotsA[po1], slotsB[po2], dur)
        if (result) {
          return [Math.max(slotsA[po1][0], slotsB[po2][0]), (Math.max(slotsA[po1][0], slotsB[po2][0]) + dur)]
        } else {
          po2++
        }
      } else {
        po1++
        po2 = 0
      }
    }
    return []
  }
  
  function helper(a, b, dur) {
    return Math.max(a[0], b[0]) + dur <= Math.min(a[1], b[1])
  }


  