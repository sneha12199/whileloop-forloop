function three_digit_armstrong_number() 
{
 for (var i = 1; i < 10; ++i) 
 {
   for (var j = 0; j < 10; ++j) 
     {
        for (var k = 0; k < 10; ++k)
        {
          var pow = (Math.pow(i,3) + Math.pow(j,3) + Math.pow(k,3));
          var plus = (i * 100 + j * 10 +  k);
          if (pow == plus) 
           {     
             console.log(pow);
            }
         }
       }// take an input
const number = prompt("Enter a positive integer");
const numberOfDigits = number.length;
let sum = 0;

// create a temporary variable
let temp = number;

while (temp > 0) {

    let remainder = temp % 10;

    sum += remainder ** numberOfDigits;

    // removing last digit from the number
    temp = parseInt(temp / 10); // convert float into integer
}

if (sum == number) {
    console.log(`${number} is an Armstrong number`);
}
else {
    console.log(`${number} is not an Armstrong number.`);
}
Run Code
Output

Enter a positive integer: 92727
92727 is an Armstrong number
In the above program, an Armstrong number of n digits is checked.

When the user enters a number, it is taken as a string. The length property returns the length of a string.

The number entered by the user is stored in a temp variable. And a while loop is used to iterate until its value is less than 0. Each digit of the number is raised to the power of the length of the number.

Share on:
Did you find this article helpful?

Related Examples
JavaScript Example

Find Armstrong Number in an Interval

JavaScript Example

Check if the Numbers Have Same Last Digit

JavaScript Example

Check Prime Number

JavaScript Example

Find the Factors of a Number


Join our newsletter for the latest updates.
Enter Email Address
Join


Tutorials
Python 3 Tutorial
JavaScript Tutorial
SQL Tutorial
HTML Tutorial
R Tutorial
C Tutorial
C++ Tutorial
Java Tutorial
Rust Tutorial
Go Tutorial
Kotlin Tutorial
Swift Tutorial
C# Tutorial
DSA Tutorial
Examples
Python Examples
JavaScript Examples
C Examples
Java Examples
Kotlin Examples
C++ Examples
Company
About
Advertising
Privacy Policy
Terms & Conditions
Contact
Blog
Careers
Youtube
Apps
Learn Python
Learn C Programming
Learn Java
© Parewa Labs Pvt. Ltd. All rights reserved.

   

    }
  }
three_digit_armstrong_number();