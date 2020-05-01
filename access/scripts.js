// defining global varables
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
	'x'
];
let number = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];
let symbol = [ '`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '*', '(', ')' ];

/*
1. create variable - done  
2. link submit button on click to function called generate password
3. after prompt asks how many characters between 8-128
4. confirm - upper, lower, number, symbols
5. if yes bring varible and run / if no ask them to try again when ready
6. display password
*/
function generatePassword () {
	console.log('Look below');
	for (var i = 0; i < upperCase.length; i++) {
		console.log(upperCase[i]);
	}
}

// {
// 	// begin with prompts and input numbers of characters
// 	//prompt for # "characters" user wants (between 8-128)
//   var Characterprompt = prompt("How many characters in the password, must be between 8 and 128.");

// 	//Test is input is #
// 	if (isNaN(Characterprompt)) {
// 	  i=0
// 	  alert("Input is not a number, please input valid number");
// 	} else {
// 	 //make answer # type using numCharacter
// 	var numCharacter = parseInt(Characterprompt);
// 	  //Test # of characters is in range
// 	  if (numCharacter < 8 || numCharacter > 128) {
// 		i=0
// 		alert("You selected a number that is not supported. Select 8-128");
// 				  } else {i=1}
// 				}
// 			  }

// }

// //ask the user if they want lowercase
//     //store it in a variable
//     var lowercase = confirm("Do you want to use lowercase characters?");
//     //create lowercase array
//     if (lowercase) {
//       var strlow = "abcdefghijklmnopqrstuvwxyz";
//       arrchar.push(strlow.split(""));
//     }
//   //ask the user if they want uppercase
//     //store it in a variable
//     var uppercase = confirm("Do you want to use uppercase characters?");
//     //create uppercase array
//     if (uppercase=true) {
//       var strup = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//       arrchar.push(strup.split(''));
//     }
//   //ask the user if they want numeric
//     //store it in a variable
//     var numbers = confirm("Do you want to use numbers?");
//     //create uppercase array
//     if (numbers=true) {
//       var strnum = "0123456789";
//       arrchar.push(strnum.split(''));
//     }
//   //ask the user if they want special characters
//     //store it in a variable
//     var symbols = confirm("Do you want to use special characters?");
//     //create uppercase array
//     if (symbols=true) {
//       var strsym = "!#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";
//       arrchar.push(strsym.split(''));
//     }

//     //the array needs to be flattened
//     arrchar = [].concat.apply([], arrchar);

//     var randchar;
//     //Now to make the password!
//     var arrpasscode = [];
//     if (arrchar.lenght<1) {
//       alert("You did not select any characters");
//       return null;
//     } else {
//       for (var i = 0; i < numCharacter; i++) {
//         randchar = Math.floor(Math.random() * Math.floor(arrchar.length));
//         var randnum = parseInt(randchar);
//         arrpasscode = arrpasscode.concat([arrchar[randnum]]);
//         //Tried to tidy code by combining into line below but kept getting errors
//         //arrpasscode = arrpasscode.concat([arrchar[parseInt(Math.floor(Math.random() * Math.floor(arrchar.length)))]]);
//       }
//     }
//     console.log(arrpasscode);
//     var passcode = arrpasscode.join('');
//     console.log(passcode);
//     return passcode;
// }
// // Write password to the #password input

// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Use add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// // example from website
// // max(...values: number[]): number
// // function generate (length = 8) {
// // 	var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// // 	var lowercase = 'abcdefghijklmnopqrstuvwxyz';
// // 	var numbers = '0123456789';
// // 	var symbols = '~!@#$%^&*()_+`-=,./?';

// // 	var a = Math.max (128)
// // 	var all = uppercase + lowercase + numbers + symbols;

// // 	var password = '';
// // 	// modify to create flow control using if else
// // 	for (var index = 0; index < length; index++) {
// // 		var character = Math.floor(Math.random() * all.length);
// // 		password += all.substring(character, character + 1);
// // 	}

// // 	return password;

document.querySelector('#myBtn').addEventListener('click', generatePassword);
