/*
Word Count Engine
Implement a document scanning function wordCountEngine, which receives a string document and returns a list of all unique words in it and their number of occurrences, sorted by the number of occurrences in a descending order. If two or more words have the same count, they should be sorted according to their order in the original sentence. Assume that all letters are in english alphabet. You function should be case-insensitive, so for instance, the words “Perfect” and “perfect” should be considered the same word.
The engine should strip out punctuation (even in the middle of a word) and use whitespaces to separate words.
Analyze the time and space complexities of your solution. Try to optimize for time while keeping a polynomial space complexity.

Examples:
input:  document = "Practice makes perfect. you'll only
                    get Perfect by practice. just practice!"
output: [ ["practice", "3"], ["perfect", "2"],
          ["makes", "1"], ["youll", "1"], ["only", "1"], 
          ["get", "1"], ["by", "1"], ["just", "1"] ]
Important: please convert the occurrence integers in the output list to strings (e.g. "3" instead of 3). We ask this because in compiled languages such as C#, Java, C++, C etc., it’s not straightforward to create mixed-type arrays (as it is, for instance, in scripted languages like JavaScript, Python, Ruby etc.). The expected output will simply be an array of string arrays.
*/

function wordCountEngine(document) {
    // your code goes here
    var data = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
    document = document.toLowerCase()
    document = document.split('').filter(letter => {
      if (data.includes(letter) || letter === ' ') {
        return letter
      }
    }).join('').split(' ')
    if (document.includes('')) {
      document = document.filter(word => {
        if (word !== '') return word
      })
    }
    let map = {}
    for (let i = 0; i < document.length; i++) {
      if (!map[document[i]]) {
        map[document[i]] = 1
      } else {
        map[document[i]] += 1
      }
    }
    let len = new Set(document);
    len = Array.from(len).length
    let i = 0, result = [], target = null
    while (i < len) {
        let keyStore = null
        let max = 0;
        for (let key in map) {
          if (map[key] > max) {
            max = map[key]
            target = [key, map[key].toString()]
            keyStore = key
          }
        }
        result.push(target)
        delete map[keyStore]
      i++
    }
    return result
  }
  
  let document = "Practice makes perfect. you'll only get Perfect by practice. just practice!"
  console.log(wordCountEngine(document))
  