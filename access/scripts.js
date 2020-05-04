/* Psuedo Code for Generate Password
	1. create global variables 
	2. link submit button on-click to deliver function called generatePassword
	3. after prompt asks how many characters between 8-128
	4. confirm - upper, lower, number, symbols
	5. if yes bring varible and run / if no ask them to try again when ready
	6. display password
*/

// defining global varables (cannot get letters to stick to 1 line!)
let upperCase = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z'
];
let lowerCase = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z'
];
let number = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];
let symbol = [ '`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '*', '(', ')', '<', '>', '?', ',', '.', '/' ];
let passwordarr = [];
let finalpassword = '';

// GENERATE PASSWORD button (ties to html line below)
/*<button onclick="askQuestions()">Generate Password</button> */

function generatePassword (pizzaface) {
	console.log('Look below');
	for (var i = 0; i < pizzaface.length; i++) {
		console.log('added something to passwordarr');
		passwordarr.push(pizzaface[i]);
	}
}
// ask for password length - create conditions if not within range, letters, blank
function askQuestions () {
	//ask how many characters you want
	var characterprompt = prompt('How many characters do you want in your password, must be between 8 and 128', '10');
	var numCharacters = parseInt(characterprompt);
	if (Number.isInteger(numCharacters) === false) {
		return alert('Invalid Input');
	}
	else {
		if (numCharacters < 8 || numCharacters > 128) {
			return alert('number is out of range');
		}
		else {
			alert('number is valid');
		}
	}
	//ask for what type of characters you want (define r as true)
	var r = confirm('Do you want UpperCase Letters?');
	if (r == true) {
		generatePassword(upperCase);
	}
	r = confirm('Do you want lower case letters?');
	if (r == true) {
		generatePassword(lowerCase);
	}
	r = confirm('Do you want numbers?');
	if (r == true) {
		generatePassword(number);
	}
	r = confirm('Do you want symbols?');
	if (r == true) {
		generatePassword(symbol);
	}
	//tell user if password does not contain any characters
	if (passwordarr.length < 1) {
		return alert('there are no characters for the password');
	}
	//put desired length, letters, numbers, symbols all together
	for (var incrementingnumber = 0; incrementingnumber < numCharacters; incrementingnumber++) {
		var letterAdd = passwordarr[Math.floor(Math.random() * passwordarr.length)];
		finalpassword = finalpassword + letterAdd.toString();
	}
	//make code to put password on html
	var putPassHTML = document.getElementById('putPassHTML');
	putPassHTML.textContent += finalpassword;
}
