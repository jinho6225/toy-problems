def find_array_quadruplet(arr, s):
  dic = {}
  arr.sort()
  total = 0
  for x in arr:
    total += x
    if x not in dic:
      dic[x] = 1
    else:
      dic[x] += 1

  result = []
  if len(arr) == 0 or len(arr) < 4 or total < s: return result
  if sum == s: return arr

  for i in range(len(arr)):
    for j in range(i+1, len(arr)):
      for k in range(j+1, len(arr)):
        totalOfThree = arr[i]+arr[j]+arr[k]
        dic[arr[i]] -= 1
        dic[arr[j]] -= 1
        dic[arr[k]] -= 1
        diff = s - totalOfThree
        if diff in dic and dic[diff] > 0:
            answer = [arr[i],arr[j],arr[k],diff]
            result.append(answer)
            dic[arr[i]] += 1
            dic[arr[j]] += 1
            dic[arr[k]] += 1
            break;

        dic[arr[i]] += 1
        dic[arr[j]] += 1
        dic[arr[k]] += 1

  if len(result) == 0:
    return result

  return result[0]

