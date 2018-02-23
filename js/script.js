document.getElementById("coursesI").addEventListener("click", function(event){
    event.preventDefault()
});

function buyPhone() {

	var budget = prompt("What is your budget?");
	var phonePrice = prompt("How much does the phone costs without taxes?");
	var accessories = prompt("How much you want to spend on accessories without taxes?");
	var taxes = prompt("Insert taxes percent, without the percent sign");
	var moneyToSpend = 0;

	budget = Number(budget);
	phonePrice = Number(phonePrice);
	accessories = Number(accessories);
	taxes = Number(taxes) / 100;

	function verifyInput(budget, phonePrice, accessories, taxes) {
		if(isNaN(budget) || isNaN(phonePrice) || isNaN(accessories) || isNaN(taxes)) {
			alert("One of the values provided is not valid, please try again.");
		} else {
			while(budget > 0) {
				moneyToSpend = ((phonePrice + accessories) * taxes + (phonePrice + accessories)).toFixed(2);
				if(moneyToSpend > budget) {
					alert("You don't have enough money to spend!");
					alert("You need $" + (moneyToSpend - budget) + " more!");
					break;
				} else {
					budget = "$" + ((budget - moneyToSpend).toFixed(2));
					alert("Nice, you have " + budget + " left!");	
					break;	
				}
			}
		}
	}

	verifyInput(budget, phonePrice, accessories, taxes);

}

var buyButton = document.getElementById("purchase");
buyButton.addEventListener("click", buyPhone);

var courseButton = document.getElementById("coursesI");

courseButton.addEventListener("click", function () {
	var popUp = document.getElementsByClassName("pop-up")[0];
	if (popUp) {
		popUp.classList.toggle("display-none");
	} else {
		popUp.classList.toggle("display-block");
	}
}, false);
/* a try, throw, catch, finally example: /*

// try {
// 	console.log("Start of try runs");
// 	unicycle;
// 	console.log("End of try runs");
// 	if(!unicycle) {
// 		throw new SyntaxError("Aha!");
// 	}
// } catch (err) {
// 	console.log("Error has occured: " + err.stack + err.message);
// } finally {
// 	console.log("This is always run");
// }
// console.log("... the the execution continues");

/* an IIFE - immediately invoked function expression example: */

// var foo = "foo";

// (function(){
// 	var foo = "foo2";
// 	console.log(foo);
// })();

// console.log(foo);

/* the use of with, example: */

// var obj = {
// 	a: 2,
// 	b: 3,
// 	c: 4

// };

// obj.a = obj.b + obj.c;
// obj.c = obj.b - obj.a;

// with(obj){
// 	a = b + c;
// 	c = b - a;
// 	d = 3; /* this creates a global variable not an obj property */
// }

// console.log(obj.d); /* undefined */
// console.log(d); /* 3 */

/* using eval to evaluate a given string as a variable - bad practice! */

// var bar = "bar";

// function foo(str) {
// 	eval(str);
// 	console.log(bar);
// }

// foo("var bar = 42;");

/* how to use let blocks */

// function foo(bar) {
// 	{ let baz = bar; 
// 		console.log(baz);
// 	}
// 	console.log(baz);
// }

// foo("bar");

/* theoretical dynamic scoping in JS */

// function foo() {
// 	console.log(bar);
// 	function baz() {
// 		var bar = "bar";
// 		foo();
// 	}
// }
// baz();

/* example of hoisting */

// console.log(a(1));

// function a(foo) {
// 	if (foo > 20) return foo;
// 	return b(foo+2);
// }

// function b(foo) {
// 	return c(foo) + 1;
// }

// function c(foo) {
// 	return a(foo * 2);
// }

/* display the alphabet with IIFE*/

// (function() {

// 	function C() {
// 		console.log("OOPS!");
// 	}

// 	function E(f) {
// 		console.log("E");
// 		F();
// 		var f = F;
// 	}

// 	function A() {
// 		console.log("A");
// 		B();
// 	}

// 	var C;

// 	function G() {
// 		console.log("G");
// 		H();

// 		function H() {
// 			console.log("H");
// 			I();
// 		}
// 	}

// 	var D = d;

// 	function d() {
// 		console.log("D");
// 		E(F);
// 	}

// 	function I() {
// 		console.log("I");
// 		J();
// 		J();
// 	}

// 	function B() {
// 		console.log("B");
// 		C();
// 	}

// 	function F() {
// 		console.log("F");
// 		G();
// 	}

// 	var rest = "KLMNOPQRSTUVWXYZ".split(""), obj = {};
// 	for (var i=0; i<rest.length; i++) {
// 		(function(i){
// 			// define the current function
// 			obj[rest[i]] = function() {
// 				console.log(rest[i]);
// 				if (i < (rest.length-1)) {
// 					obj[rest[i+1]]();
// 				}
// 			};
// 		})(i);
// 	}

// 	function J() {
// 			console.log("J");
// 			obj.K();
// 	}

// 	function C() {
// 		console.log("C");
// 		D();
// 	}

// 	return A();

// })()();

