// Write a bubble sort 

//Bubble sort works by comparing two adjacent numbers next to each other and then swapping their places if the smaller index value is larger then the larger index. Continue looping until array is in order

function BubbleSort(arr){
  let temp;
  //First, we will need a while loop or a do loop, to iterate thought he array.
  var i = 0
  do{
    i++
      for(var j = 0; j < arr.length; j++){
      if(arr[j] > arr[j+1]){
        temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }else{
        continue
      }
      console.log(arr)
    }
  }
  while(i < arr.length)
  return arr


  //Next, we will need a second loop to swap index

}

BubbleSort([11,3,4,2,9,7,6,5,8,1])

//You can also use a nested for loop inside of a for loop
function BubbleSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      } else {
        continue
      }
      console.log(arr)
    }
  }
}