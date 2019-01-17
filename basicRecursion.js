function basicRecursion(max, current){
  if(current > max) return ;
  console.log(current)
  basicRecursion(max, current*2)
}
basicRecursion(15,1)