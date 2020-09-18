def helper(arr, i, j):
  arr[i][j] = 0
  if i != 0 and arr[i-1][j] != None and arr[i-1][j] == 1:
    helper(arr, i-1, j)
  if i != len(arr)-1 and arr[i+1][j] != None and arr[i+1][j] == 1:
    helper(arr, i+1, j)
  if j != 0 and arr[i][j-1] != None and arr[i][j-1] == 1:
    helper(arr, i, j-1)
  if j != len(arr[0])-1 and arr[i][j+1] != None and arr[i][j+1] == 1:
    helper(arr, i, j+1)
  return

def get_number_of_islands(binaryMatrix):
  rowLen = len(binaryMatrix)
  colLen = len(binaryMatrix[0])
  count = 0
  for i in range(0, rowLen):
    for j in range(0, colLen):
      if binaryMatrix[i][j] == 1:
        helper(binaryMatrix, i, j)
        count += 1
        
  return count
      
 
binaryMatrix = [ [0,    1,    0,    1,    0],
                 [0,    0,    1,    1,    1],
                 [1,    0,    0,    1,    0],
                 [0,    1,    1,    0,    0],
                 [1,    0,    1,    0,    1] ]
print(get_number_of_islands(binaryMatrix))