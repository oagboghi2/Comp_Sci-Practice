function validAnagram(first, second){
    if(first.length != second.length){
        console.log("length is off")
        return false
    }

    const lookup = {};

    for(var i = 0; i < first.length; i++){
        var letter = first[i];
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
        console.log("return true", lookup)
    }

    for(var i = 0; i < second.length; i++){
        var letter = second[i];
        // can't find letter or letter is zero thn it's not an anagram
        if(!lookup[letter]){
            console.log("return false ")
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true;
}

validAnagram('anagram', 'nagaram')