def index_equals_value_search(arr):
  start = 0;
  last = len(arr)-1
  mid = int(round(last - start) / 2)
  
  while start <= last:
    if arr[mid] == mid:
      return mid
    else:
      if arr[mid] > mid:
        last = mid - 1
        mid = int(round(last - start) / 2)
      else:
        start = mid + 1
        mid = start + int(round(last - start) / 2)
  return -1