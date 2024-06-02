/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var results = []
    var reverseResults = []
    var reversedResults = []
    var vowels = ['a', 'e', 'i', 'o', 'u' ];


    for( let i=0; i<s.length; i++){
        if(vowels.includes(s[i])){
            reverseResults.push({index: i, value: s[i]})
        }else{
            results.push({index: i, value: s[i]})
        }
    }
   
    
    for( let i=reverseResults.length; i>=0; i--){
        console.log( reverseResults[i]);
        for(let j=0; j<reverseResults.length; j++){
            console.log(reverseResults[j])
    }
};

reverseVowels('haelalooa'.split(''));


