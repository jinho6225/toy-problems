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




# find two numbers that adds up to s
def two_sum(arr, s):
  dic = dict()
  for i in range(len(arr)):
    num = arr[i]
    if num in dic:
      return [dic[num], num]
    else:
      key = s - num
      dic[key] = num
  return []

def find_array_quadruplet(arr, s):
  res = []
  for i in range(len(arr)):
    num1 = arr[i]
    s1 = s - num1
    for j in range(i+1, len(arr)):
      num2 = arr[j]
      s2 = s1 - num2
      temp_res = two_sum(arr[j+1:], s2)
      if len(temp_res) == 0:
        continue
      else:
        temp_res.append(num1)
        temp_res.append(num2)
        res.append(sorted(temp_res))
  res.sort()
  if len(res) > 0:
    return res[0]
  return []
  
arr = [2, 7, 4, 0, 9, 5, 1, 3]
s = 20
print(find_array_quadruplet(arr, s))