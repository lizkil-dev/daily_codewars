/* Sum of odd numbers
Given the triangle of consecutive odd numbers:

                  1
               3     5
            7     9    11
         13    15    17    19
      21    23    25    27    29
   31    33    35    37    39    41
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8 */ 

function rowSumOddNumbers(n) {

   let firstnumber = n*n-(n-1)
   let lastnumber = (n*n)+(n-1)
   let sum = 0

   for(let i = firstnumber; i <= lastnumber; i = i+2){
      sum = sum + i       
   }
   return sum
}

