/*
 1     2     3
      ABC   DEF
 4     5     6
GHI   JKL   MNO
 7     8     9
PQRS  TUV   WXYZ
 *     0     #

given a keypad, and a phone number, 
write a function which lists all words 
which are possible by pressing these numbers

input number: 5
output: j k l
input number: 234
output: adg adh adi aeg aeh aei afg afh
        afi bdg bdh bdi beg beh bei bfg
        bfh bfi cdg cdh cdi ceg ceh cei
        cfg cfh cfi
*/
/*
define map with phone number and letter
key will be number and value is letter (using array)
then whenever click the number
i can get all letter array
[a,b,c]
[d,e,f]
[g,h,i]

if digits is none
return []
if digit is one like 2
return [a, b, c]
if digits are two like 23
return ["ad","ae","af","bd","be","bf","cd","ce","cf"]

[ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]

*/


let table = new Map()
table.set('1', [])
table.set('2', ['a', 'b', 'c'])
table.set('3', ['d', 'e', 'f'])
table.set('4', ['g', 'h', 'i'])
table.set('5', ['j', 'k', 'l'])
table.set('6', ['m', 'n', 'o'])
table.set('7', ['p', 'q', 'r', 's'])
table.set('8', ['t', 'u', 'v'])
table.set('9', ['w', 'x', 'y', 'z'])

if (digits === '') {
  return []
} else if (digits.length === 1) {
  return table.get(digits)
}

let arr = digits.split('')
let store = []
for (let i = 0; i < arr.length; i++) {
  store.push(table.get(arr[i]))
}
console.log(store)
function recur(arr) {
  debugger
  if (arr.length === 2) {
    let a = [];
    for (let i = 0; i < arr[0].length; i++) {
      for (let j = 0; j < arr[1].length; j++) {
        a.push(arr[0][i] + arr[1][j])
      }
    }
    return a
  } else if (arr.length > 2) {
    let a = [];
    for (let i = 0; i < arr[0].length; i++) {
      let array = recur(arr.slice(1))
      for (let j = 0; j < array.length; j++) {
        a.push(arr[0][i] + array[j])
      }
    }
    return a
  }
}
return recur(store)    