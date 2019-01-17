//Make a function that computes a factorial recursively

// A factorial is when tou take a number n and multiply by each preceding integer until ou hit one

//n * (n -1) * (n-2) ... * 3 * 2 * 1

function factorial(n){
   // first make a base case
   if( n <= 1){
     return 1
   } 
   else {
     //the subtraction ends the recursion. Or the "loop"
     res = factorial(n - 1) * n 
     console.log(res)
     return  res
   
   }
}

// Think of the body of the function of a recursive function like hte inner part of the loop. That is the part of the code being run over and voer again, and we use the base case to break that loop.

 //  okay so we run the factorial down to 1, and we multiply the n against the factorial. Notice the n isn't inside the (). As a result, the previous n is what will * against the loop n
     
    //  ex:
    //  fac(4) * n => fac(3) * n => fac(2) * n => fac(1) * n
    // 1 * 2 * 3 *4 =24
    // factorial(4) => 24

factorial(1)
factorial(2)
factorial(3)
factorial(10)
factorial(13)