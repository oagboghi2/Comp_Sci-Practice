// function countUniqueValues(arr){
//     var countArr = [];
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] !== arr[i+1]){
//             countArr.push(arr[i])
//         }
//     }
//     console.log("length" , countArr.length )
//     return countArr.length;
// }

// countUniqueValues([]);

// function countUniqueValues(arr) {
//     var i = 0;
//     var k = arr[i];
//     var j = arr[i + 1]
//     for(var i = 0; i < arr.length-1; i++){
//         console.log("var k", k);
//         console.log("var j", j);

//         if (k !== j){
//             k = j
//             j = arr[i + 1 + 1]
//             console.log("increase j by one", j)
//             console.log("testcase 1 ",k)
//         } else if(k === j){
//             j = arr[i + 1 + 1]
//             console.log("increase j by one", j)
//             console.log("testcase 2", k)
//         } else {
//             console.log("testcase 3")
//             break;
//         }
//     }
//     console.log("current index of k", k);
// }


/////////////////////////////////////////////////////////////////

function countUniqueValues(arr) {
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i]  !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
        console.log(i,j)
    }
    console.log("Anser is ", i + 1)
}

/////////////////////////////////////////////////////////////////
countUniqueValues([-2,-1,-1,0,1]);
// countUniqueValues([1,1,1,1,1,2]);