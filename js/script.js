var budget = prompt("What is your budget?");
var phonePrice = prompt("How much does the phone costs without taxes?");
var accessories = prompt("How much you want to spend on accessories without taxes?");
var taxes = prompt("Insert taxes percent, without the percent sign");
var moneyToSpend = 0;

budget = Number(budget);
phonePrice = Number(phonePrice);
accessories = Number(accessories);
taxes = Number(taxes) / 100;

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
