function isSubsequence(string1, string2) {
    // Escape special characters and build a regex pattern
    const escapedString = string1.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    const pattern = new RegExp(escapedString.split('').join('.*'), 'i');
    
    // Test if string1 is a subsequence of string2
    return pattern.test(string2);
  }


  