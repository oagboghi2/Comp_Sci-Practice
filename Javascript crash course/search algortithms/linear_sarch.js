function linerarSearch(arr, num) {
    var count = 0;
    console.log("count", count)

    for (var i = 0; i < arr.length; i++) {
        console.log("arr[i]", arr[i])
        if (arr[i] === num) {
            console.log("testcase 1")

            return count;
        } else if (count >= arr.length - 1) {
            console.log("testcase 2")
            console.log("count", count)
            count = -1
        } else {
            console.log("testcase 3")
            //console.log("count", count)
            count++
        }
    }
    console.log(count);
    return count;
}

//linerarSearch([9,8,7,6,5,4,3,2,1,0], 10)
linerarSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)