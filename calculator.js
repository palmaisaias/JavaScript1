// use 'let' to declare the variables and add values to those variables
let number1 = 5;
let number2 = 3;

// this will perform addition, subtraction, multiplication and division. It will also print the results
// in the console once added to an html page
console.log("Sum:", number1 + number2);
console.log("Difference:", number1 - number2);
console.log("Product:", number1 * number2);
console.log("Quotient:", number1 / number2);

// comparison operators used on number1 and number2
console.log("Is number1 equal to number2?", number1 === number2);
console.log("Is number1 greater than number2?", number1 > number2);
console.log("Is number1 not equal to number2?", number1 !== number2);

// using logical operators to determine the conditions
let isPositive = number1 > 0 && number2 > 0;
let isEven = number1 % 2 === 0 || number2 % 2 === 0;

// combined conditions
console.log("Are both numbers positive?", isPositive);
console.log("Is at least one number even?", isEven);

// created a new set just to explore different results
let number3 = 8;
let number4 = 32;

console.log("Sum:", number3 + number4);
console.log("Difference:", number3 - number4);
console.log("Product:", number3 * number4);
console.log("Quotient:", number3 / number4);

console.log("Is number3 equal to number4?", number3 === number4);
console.log("Is number3 greater than number4?", number3 > number4);
console.log("Is number3 not equal to number4?", number3 !== number4);

// since we are just updating the value of existing variables and not creating new ones, 'let' is not used
// before the isPositive and isEven, otherwise they get flagged
isPositive = number3 > 0 && number4 > 0;
isEven = number3 % 2 === 0 || number4 % 2 === 0;

console.log("Are both numbers positive?", isPositive);
console.log("Is at least one number even?", isEven);