function isSubsequence(string1, string2) {
    // Escape special characters and build a regex pattern
    const escapedString = string1.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    const pattern = new RegExp(escapedString.split('').join('.*'), 'i');
    
    // Test if string1 is a subsequence of string2
    return pattern.test(string2);
  }


// Constraints:

// 0 <= s.length <= 100
// 0 <= t.length <= 104
// s and t consist only of lowercase English letters.

// Maximum of pointer is 100

// -----
//      -----
//            -----


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isSubsequence(stringToFound, _stringReresouce) {
  if(stringToFound.length == 0) return true;
  var stringReresouce = new String(_stringReresouce);
  var encreasedSequence = [];
  stringToFound.split('').map(s => {
    var lastIndex = Number(stringReresouce.lastIndexOf(s));
    if (lastIndex) {
      encreasedSequence.push(lastIndex);
    } else {
      return false;
    }
  })

  return encreasedSequence[0]>0 && encreasedSequence.join('') ==  [...encreasedSequence].sort((a,b) => a-b).join('') && !_stringReresouce.includes(stringToFound)
}


console.log(isSubsequence('aaaaaa', 'bbaaaa'))