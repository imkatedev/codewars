// Even or even_or_odd
// https://www.codewars.com/kata/

//Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOddWithTernaryOperator(num){
	return num % 2 == 0  ? "even" : "odd"
 }
 

function evenOrOdd(num){
	if ( num % 2 == 0){
		return 'Even'
	}
	else{
		return 'Odd'
	}
}