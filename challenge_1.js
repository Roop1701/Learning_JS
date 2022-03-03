// Check if number is prime or not
//1. Promot the user to input a whole number
// if the user the doesn't provide a whole number, keep prompting
// the user to input a valid number untl they give one
var number;
do {
  number = prompt("Please enter a whole number");
} while (!!Number.isInteger(number));
// 3. if the providing is prime: prin the number
// 4. if the number is not prime: print its smallest positive divisor expect 1
isPrime(number);
function isPrime(number){
    if (number == 1) {
        console.log("1 is neither prime nor composite");
    }
    else if (number == 2) {
        console.log("2 is a prime number");
    }
    else if (number % 2 == 0) {
        console.log(number + " is not a prime number");
        console.log(number + " is a composite number");
        console.log("its smallest positive divisor is 2");
    }
    else {
        for (var i = 3; i < number; i++) {
        if (number % i == 0) {
            console.log(number + " is not a prime number");
            console.log(number + " is a composite number");
            console.log("its smallest positive divisor is " + i);
            break;
        }
        else if (i == number - 1) {
            console.log(number + " is a prime number");
        }
        }
    }
    }
