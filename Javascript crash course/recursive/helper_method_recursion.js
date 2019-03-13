function collectOddValues(arr) {

    let result = [];
    // create empty variable

    function helper(helperInput) {
        // base case. If this condition is true, we return aka pop out of the 
        // call stack
        if (helperInput.length === 0) {
            return;
        }
        // if/else statement checks to see if first elemt of array is even or odd. 
        // If odd, push element into the empty result array. If even, just continue 
        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }
        // either way, use slice to shorten the arr by 1 at the start of the array. 
        // This will happen until the array become empty, and thus triggers the 
        // base case
        helper(helperInput.slice(1))
    }
    //we call the helper function here
    helper(arr)
    //return result array when result is empty
    return result;
}

collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9])