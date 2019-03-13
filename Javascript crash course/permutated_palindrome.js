function solution(s) {
  // create a temporary variable
  var temp = [];
  // create a temporary object
  var lookup = {};
  // make a for loop through a string
  for(var i = s.length - 1; i >= 0; i--){
    temp.push(s[i])
    console.log(temp)
    // reverse the string
    var rword = temp.join('')
    
  }
  // compare reversed string to original string
  console.log(rword)
  console.log(s)
  // So we now have 2 string variables. Our original s and rword, the reversed 
  // string. We can iterate through both and keep track of the elements 
  // inside by using the empty object

  for(var j = 0; j < s.length; j++){
    var letter = s[j];
    // if letter exists, create key in object and give it a value of 1, and then increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    console.log("return true", lookup)
  }

  for(var k = 0; k < rword.length; k++){
    var letter = rword[k];
    // can't find letter or letter is zero than it's not an anagram. 
    // If this is the case, the words are not permutation. return false
    if(!lookup[letter]){
      console.log("return false")
      return false
    } else {
      lookup[letter] -= 1;
    }
  }
  return true
}

solution('ecarrac')
