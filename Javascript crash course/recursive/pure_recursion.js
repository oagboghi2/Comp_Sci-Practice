function collectOddValues(arr){
    let newArr = [];

    // base case
    if(arr.length === 0) {
        return newArr;
    }
    // check to see if num in array is odd. If it is, push into newArr
    if(arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }
    // newArr now has the pushed value in it. 
    // Call collectOddValue again, but with the arr shorten by 1 due to slice.
    // Keep calling CollectOddValue until the arr is empty
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    // concat the elements that are pushed
    // this makes a shallow copy of an array without nutating the original
    return newArr;
}

collectOddValues([1,2,3,4,5])