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
  