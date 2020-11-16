function findBusiestPeriod(data) {
    // your code goes here
    let sumOfVisitor = 0;
    let maxVisitor = sumOfVisitor;
    let result;
    for (let i = 0; i < data.length; i++) {
        if (data[i][2] === 1) {
          sumOfVisitor += data[i][1]
        } else {
          sumOfVisitor -= data[i][1]
        }
        if (i === data.length-1 || data[i][0] !== data[i+1][0]) {
            if (sumOfVisitor > maxVisitor) {
                maxVisitor = sumOfVisitor
                result = data[i][0]
                console.log(maxVisitor, result)
            }        
        }
    }
    return result
  }
  
  let data =  
    [
        [1487799425,14,1],
        [1487799425,4,1],
        [1487799425,2,1],
        [1487800378,10,1],
        [1487801478,18,1],
        [1487901013,1,1],
        [1487901211,7,1],
        [1487901211,7,1]
    ]
//   let data = 
//     [ 
//         [1487799425, 14, 1], 
//         [1487799425, 4,  0],
//         [1487799425, 2,  0],
//         [1487800378, 10, 1],
//         [1487801478, 18, 0],
//         [1487801478, 18, 1],
//         [1487901013, 1,  0],
//         [1487901211, 7,  1],
//         [1487901211, 7,  0] 
//     ]

  console.log(findBusiestPeriod(data))
  /*  
  
  
  
    input:  data = [ 
  [1487799425, 14, 1], 
  [1487799425, 4,  0], <=
  [1487799425, 2,  0],
    [1487800378, 10, 1], <- x
  [1487801478, 18, 0],
  [1487801478, 18, 1], <- o
  [1487901013, 1,  0],
  [1487901211, 7,  1],
  [1487901211, 7,  0] ]
  output: 1487800378
  
  define sumOfVisitor = data[0][1]
  define maxVisitor = sumOfVisitor
  define array = []
  iterate data array from the 0 index
  
  Note that if there is more than one period with the same visitor peak, return the earliest one.
  
  Assume that the array data is sorted in an ascending order by the timestamp. 
  Explain your solution and analyze its time and space complexities.
  
  */


// usgin hash table

function findBusiestPeriod(data) {
    // your code goes here
    let obj = {}
    for (let i = 0; i < data.length; i++) {
      if (data[i][0] in obj) {
        if (data[i][2] === 1) {
          obj[data[i][0]] += data[i][1]
        } else {
          obj[data[i][0]] -= data[i][1]
        } 
      } else {
        if (data[i][2] === 1) {
           obj[data[i][0]] = data[i][1]
        } else {
          obj[data[i][0]] = data[i][1] * -1
        } 
      }
    }
    let sum;
    let max;
    let result = null
    for (let key in obj) {
      if (sum === undefined) {
        sum = obj[key]
        max = sum
        result = Number(key)
      } else {
        sum += obj[key]
        if (sum > max) {
          max = sum
          result = Number(key)
        }      
      }
    }
    return result
  }