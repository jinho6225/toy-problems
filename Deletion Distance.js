function deletionDistance(str1, str2) {
    const str1Len = str1.length; // 6
    const str2Len = str2.length; // 6
    const memo = []
  
    for (var i = 0; i <= str1Len; i++){
      memo.push([]);
      memo[i].push(new Array(str2Len))
      console.log(memo);
      for (var j = 0; j <= str2Len; j++){
        if (i === 0){
          memo[i][j] = j;
        } else if (j === 0){
          memo[i][j] = i;
        } else if (str1[i-1] === str2[j-1]){
          memo[i][j] = memo[i-1][j-1];
        } else {
          memo[i][j] = 1 + Math.min(memo[i-1][j], memo[i][j-1]);
        }   
      }
    }
    return memo[str1Len][str2Len]; 
  }
  let str1 = "hott", str2 = "oth"
  console.log(deletionDistance(str1, str2))
  str1 = "abc", str2 = "acb"
  console.log(deletionDistance(str1, str2))
  str1 = "ab", str2 = "ba"
  console.log(deletionDistance(str1, str2))