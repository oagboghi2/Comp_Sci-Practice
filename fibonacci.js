function fibonacci (n){
  if(n <= 2){
    return 1;
  }
  else {
    sum = fibonacci(n-1) + fibonacci(n-2)
    console.log(sum)
    return sum
  }
}

fibonacci(7)