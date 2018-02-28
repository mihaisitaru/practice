// document.getElementById("coursesI").addEventListener("click", function(event){
//     event.preventDefault()
// });

/* Begin nav built */

function Widget(width,height) {
	this.width = width || 50;
	this.height = height || 50;
	this.$elem = null;
}

Widget.prototype.render = function($where){
	if (this.$elem) {
		this.$elem.css({
			width: this.width + "px",
			height: this.height + "px"
		}).appendTo($where);
	}
};

function Button(width, height, label) {
	Widget.call(this,width,height);
	this.label = label || "Default";
	this.$elem = $("<button class='main-nav'>").text(this.label);
}

Button.prototype = Object.create(Widget.prototype);

Button.prototype.render = function($where) {
	Widget.prototype.render.call(this,$where);
	this.$elem.click(this.onClick.bind(this));
};

Button.prototype.onClick = function(evt) {
	console.log("Button '" + this.label + "' clicked!");
	var popUp = document.getElementsByClassName("pop-up")[0];
	if(this.label === "Courses" && popUp) {
		popUp.classList.toggle("display-block");
	} else if (this.label === "Home") {
		$("btn3").click(window.open('index.html', '_self'));
	} else {
		$("btn1").click(window.open('https://www.linkedin.com/in/mihai-sitaru/', '_blank'));
	}	
};

$(document).ready(function(){
	var $body = $(document.body);
	var btn3 = new Button(80,50,"Home");
	var btn2 = new Button(80,50,"Courses");
	var btn1 = new Button(80,50,"About");

	btn1.render($(".first-content"));
	btn2.render($(".first-content"));
	btn3.render($(".first-content"));
});

/* End nav built */

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

// var courseButton = document.getElementById("coursesI");

// courseButton.addEventListener("click", function () {
// 	var popUp = document.getElementsByClassName("pop-up")[0];
// 	if (popUp) {
// 		popUp.classList.toggle("display-none");
// 	} else {
// 		popUp.classList.toggle("display-block");
// 	}
// }, false);
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

/* the "this" example 1 */

// function foo() {
// 	console.log(this.bar);
// }

// var bar = "bar1";
// var o2 = {bar: "bar2", foo: foo};
// var o3 = {bar: "bar3", foo: foo};

// foo(); //bar1
// o2.foo(); //bar2
// o3.foo(); //bar3

/* the "this" example 2 */

// var o1 = {
// 	bar: "bar1",
// 	foo: function() {
// 		console.log(this.bar);
// 	}
// };

// var o2 = {bar: "bar2", foo: o1.foo};

// var bar = "bar3";

// var foo = o1.foo;

// o1.foo(); //bar1
// o2.foo(); //bar2
// foo(); //bar3

// function foo() {
// 	var bar = "bar1";
// 	baz();
// }

// function baz() {
// 	console.log(this.bar);
// }

// var bar = "bar2";
//foo(); //bar2, because you cannot create a cross brigde between this (locally) and the global scope

// function foo() {
// 	var bar = "bar1";
// 	this.baz = baz;
// 	this.baz();
// }

// function baz() {
// 	console.log(this.bar);
// }

// var bar = "bar2";
// foo(); //bar2, because you cann  ot create a cross brigde between this (locally) and the global scope

// function foo() {
// 	console.log(this.bar);
// }

// var bar = "bar1";
// var obj = {bar: "bar2"};

// foo(); //bar1
// foo.call(obj); //bar2, because of explicit binding
// foo.apply(obj); //bar2, because of explicit binding


// function foo() {
// 	console.log(this.bar);
// }

// var obj = {bar: "bar"};
// var obj2 = {bar: "bar2"};

// var orig = foo;
// foo = function(){ orig.call(obj); };


// foo(); //bar
// foo.call(obj2); //bar, because of hard binging when foo got overwritten

//the same code as above, but this time with a function that can be reused, bind()

// function bind(fn,o) {
// 	return function() {
// 		fn.call(o);
// 	};
// }

// function foo() {
// 	console.log(this.bar);
// }

// var obj = {bar: "bar"};
// var obj2 = {bar: "bar2"};

// foo = bind(foo, obj);

// foo(); //bar
// foo.call(obj2); //bar

// next level hard binding:

// if(!Function.prototype.bind2) {
// 	Function.prototype.bind2 = function(o) {
// 		var fn = this; // the function!
// 		return function() {
// 			return fn.apply(o, arguments);
// 		};
// 	};
// }

// function foo(baz) {
// 	console.log(this.bar + " " + baz);
// }

// var obj = { bar: "bar" };
// foo = foo.bind2(obj);

// foo("baz"); // "bar baz" and not "baz baz", because the obj is hard binding of the fn.apply function

// function foo() {
// 	this.baz = "baz";
// 	console.log(this.bar + " " + baz);
// }

// var bar = "bar";
// var baz = new foo(); // undefined undefined

/* Begin examples of closure: */

// function foo() {
// 	var bar = "bar";
// 	function baz() {
// 		console.log(bar);
// 	}
// 	bam(baz);
// }

// function bam(baz) {
// 	baz(); //bar
// }

// foo();

// function foo() {
// 	var bar = "bar";

// 	return function() {
// 		console.log(bar);
// 	};
// }

// function bam() {
// 	foo()();
// }

// bam(); //bar

// function foo() {
// 	var bar = "bar";
	
// 	setTimeout(function(){
// 		console.log(bar);
// 	}, 1000);
// }

// foo(); //bar, after 1 second

// function foo() {
// 	var bar = 0;

// 	setTimeout(function() {
// 		console.log(bar++);
// 	}, 1000);
// 	setTimeout(function() {
// 		console.log(bar++);
// 	}, 2000);
// }

// foo(); // 0 after one second, 1 after two seconds

// function foo() {
// 	var bar = 0;

// 	setTimeout(function(){
// 		var baz = 1;
// 		console.log(bar++);

// 		setTimeout(function(){
// 			console.log(bar+baz);
// 		}, 200);
// 	},100);
// }

// foo(); // 0 2

// for (var i=1; i<=5; i++) {
// 	setTimeout(function() {
// 		console.log("i: " + i); // prints 6, five times
// 	}, i*1000);
// }


// for (var i=1; i<=5; i++) {
// 	(function IIFE(i){
// 		setTimeout(function(){
// 			console.log("i: " + i); // prints 1, 2, 3, 4, 5 every second
// 		}, i*1000);
// 	})(i);
// }

// for (let i=1; i<=5; i++) {
// 	setTimeout(function() {
// 		console.log("i: " + i); // prints 1, 2, 3, 4, 5 every second
// 	}, i*1000);
// } // OR


// for (var i=1; i<=5; i++) {
// 	let j = i;
// 	setTimeout(function() {
// 		console.log("j: " + j); // prints 6, five times
// 	}, j*1000);
// }

// var foo = (function() {
// 	var o = { bar: "bar" };
// 	return { obj: o };
// })();

// console.log(foo.obj.bar); //bar, by definition this isn't closure, but object reference

/* End examples of closure */

// var foo = (function IIFE() {
// 	var o = { bar: "bar" };

// 	return {
// 		bar: function() {
// 			console.log(o.bar);
// 		}
// 	};

// })();

// foo.bar(); //bar, this is an example of a classic module pattern

// var foo = (function IIFE() {
// 	var publicAPI = {
// 		bar: function() {
// 			publicAPI.baz();
// 		},
// 		baz: function() {
// 			console.log("baz");
// 		}
// 	};
// 	return publicAPI;
// })();

// foo.bar(); //baz, example of a modified module pattern 

/* Prototype Linkages: */

// function Foo(who) {
// 	this.me = who;
// }

// Foo.prototype.identify = function() {
// 	return "I am " + this.me;
// };

// Foo.prototype.speak = function() {
// 	alert("Hello, " + 
// 		this.identify() + 
// 	".");
// };


// var a1 = new Foo("a1");
// a1.speak(); // alerts: "Hello, I am a1."

/* prototype: objects linked */

// function Foo(who) {
// 	this.me = who;
// }

// Foo.prototype.identify = function() {
// 	return "I am " + this.me;
// };

// function Bar(who) {
// 	Foo.call(this,who);
// }

// Bar.prototype = Object.create(Foo.prototype);

// Bar.prototype.speak = function() {
// 	alert("Hello, " + this.identify() + ".");
// };

// var b1 = new Bar("b1");
// var b2 = new Bar("b2");

// b1.speak(); //alerts: "Hello, I am b1."
// b2.speak(); //alerts: "Hello, I am b2."

/* Obiect linked to other objects, simplified: */

// var Foo = {
// 	 init: function(who) {
// 		 this.me = who;
// 	 },
// 	 identify: function() {
// 		 return "I am " + this.me;
// 	 }
// };

// var Bar = Object.create(Foo);

// Bar.speak = function() {
// 	 alert("Hello, " + this.identify() + ".");
// };

// var b1 = Object.create(Bar);
// b1.init("b1");
// b1.speak(); //alerts: "Hello, I am b1."

// setTimeout(function(){
// 	console.log("callback!");
// },1000); // callback example

// setTimeout(function(){
// 	console.log("one");
// 	setTimeout(function(){
// 		console.log("two");
// 		setTimeout(function(){
// 			console.log("three");
// 		},1000);
// 	},1000);
// },1000); //callback hell, the piramid of doom

// function one(cb) {
// 	console.log("one");
// 	setTimeout(cb,1000);
// }
// function two(cb) {
// 	console.log("two");
// 	setTimeout(cb,1000);
// }
// function three() {
// 	console.log("three");
// }

// one(function() {
// 	two(three);
// }); //another callback example

// function trySomething(ok,err) {
// 	setTimeout(function(){
// 		var num = Math.random();
// 		if(num > 0.5) ok(num);
// 		else err(num);
// 	},1000);
// }

// trySomething(
// 	function(num) {
// 		console.log("Success: " + num);
// 	},
// 	function(num) {
// 		console.log("Sorry: " + num);
// 	}
// );

// function trySomething(cb) {
// 	setTimeout(function() {
// 		var num = Math.random();
// 		if (num > 0.5) cb(null,num);
// 		else cb("Too low!");
// 	},1000);
// }

// trySomething(function(err,num){
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log("Number: " + num);
// 	}
// }); //error first style

// function getData(d,cb) {
// 	setTimeout(function(){ cb(d); },1000);
// }

// getData(10,function(num1){
// 	var x = 1 + num1;
// 	getData(30,function(num2){
// 		var y = 1 + num2;
// 		getData(
// 			"Meaning of life: " + (x + y),
// 			function(answer) {
// 				console.log(answer);
// 			}
// 		);	
// 	});
// }); //nested-callback tasks

// function getData(d) {
// 	return new Promise(function(resolve,refect) {
// 		setTimeout(function(){ resolve(d); },1000);
// 	});
// }

// var x;

// getData(10)
// .then(function(num1) {
// 	x = 1 + num1;
// 	return getData(30);
// })
// .then(function(num2) {
// 	var y = 1 + num2;
// 	return getData("Meaning of life: " + (x + y));
// })
// .then(function(answer) {
// 	console.log(answer);
// }); //promise tasks

/* Begin new course */

/* Objects */

/* Example 1 */

// var box = {};

// box.material = "cardboard"; //adding a "material" property with the value "cardboard" on the box object, the same as box["material"] = "cardboard";
// var cb = box.material;

// box.material = "titanium"; // dinamically addind properties on the object
// cb; //"cardboard"

// var key = "material";
// box[key]; //"titanium"

/* Example 2 */

// var box = {};

// box["material"] = "cardboard";

// var func = function() {
// 	return "material";
// };

// box[func()]; //"cardoard"

/* Example 3 */

// var box = {};

// box["material"] = "cardboard";

// box["size"] = {
// 	"height": 2,
// 	"width": 80
// };

// box.area = function() {
// 	return box.size.height * box.size.width;
// } //area is a method on the box object

/* JS exercise on object: */

/* Beginning JavaScript: From Fundamentals to Functional JS */

// var animal = {};

// animal.username = "mihai";
// console.log(animal.username);

// animal['tagline'] = "hmm";
// console.log(animal['tagline']);

// var noises = [];
// animal['noises'] = noises;

// console.log(animal);

// var count = 0;
// for (var all in animal) {
//     console.log(all);
//     count++;
//     console.log(count);
//     if(all === 'username') {
//         console.log("Hi my name is " + animal[all]);
//         //return "Hi my name is " + animal[all];
//     } else if(all === 'tagline') {
//         console.log('I like to say ' + animal[all]);
//     }
// }

//var box = [];

// box['size'] = 9;
// box[0] = 'meow';
// box.push('Whooohoo!');

// // console.log(box['size']);
// // console.log(box[0]);

// // for (var k in box) {
// //     console.log(k);
// //     console.log(box[k]);
// // }

// for (var i = 0; i < box.length; i++) {
//     console.log(box[i]);
//     console.log(box.length);
// }

// box['0'] = 'meow';
// box[3] = {'babyBox': true};

// console.log(box['length']);
// console.log(box);
// console.log(box[box.length - 1]);
// console.log(box[box['length']-1]);

// var noiseArray = ["meow", "ham", "cip"];
// console.log(noiseArray);

// noiseArray.unshift = "brrrmm";
// noiseArray.push("boohoo");

// noiseArray[3] = 'growl';

// console.log(noiseArray);

// noiseArray[noiseArray.length] = "last noise"; 
// console.log(noiseArray);
// console.log(noiseArray.length);
// console.log(noiseArray[noiseArray.length - 1]);

// var animal = { username: 'DaffyDuck', tagline: 'Yippeee!'};

// animal.noises = noiseArray;

// console.log(animal);

// var animals = [];

// animals.push(animal);

// var quackers = { username: 'DaffyDuck', tagline: 'Yippeee!', noises: ['quack', 'honk', 'sneeze', 'growl'] };

// animals[animals.length] = quackers;

// console.log(animals);

// var quackers2 = { username: 'DaffyDuck', tagline: 'Yippeee!', noises: ['quack', 'honk', 'sneeze', 'growl'] };
// var quackers3 = { username: 'DaffyDuck', tagline: 'Yippeee!', noises: ['quack', 'honk', 'sneeze', 'growl'] };

// animals.push(quackers2, quackers3);

// console.log(animals.length);
// console.log(animals);

/* Paused JavaScript: From Fundamentals to Functional JS */

/* Beginning of HTML5 Web Component Fundamentals course */



/* End of HTML5 Web Component Fundamentals course*/

