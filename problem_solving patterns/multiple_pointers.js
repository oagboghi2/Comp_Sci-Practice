function sumZero(arr){
    var left = 0;
    var right = arr.length - 1;
    while(left < right){
        var sum = arr[left] + arr[right];
        if(sum === 0) {
            console.log([arr[left], arr[right]])
            return [arr[left], arr[right]];
        } else if(sum > 0) {
            right--;
        } else {
            left++;
        }
    } 
}

sumZero([-4,-3,-2,-1,0,1,2,3,10])