// defining global varables
let upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z' ];
let lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z' ];
let number = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];
let symbol = [ '`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '*', '(', ')', '<', '>', '?', ',', '.', '/' ];
let passwordarr = [];

}
// button code from index.html below
/* <button onclick="myFunction()">Generate Password</button> */

function myfunction () {
	alert('Generate Password');
}

/*
1. create global variable - done  
2. link submit button on-click to deliver function called generatePassword
3. after prompt asks how many characters between 8-128
4. confirm - upper, lower, number, symbols
5. if yes bring varible and run / if no ask them to try again when ready
6. display password
*/
function generatePassword (pizzaface) {
	console.log('Look below');
	for (var i = 0; i < pizzaface.length; i++) {
		console.log('added something to passwordarr');
		passwordarr.push(pizzaface[i]);
	}


//   // Uppercase
// function generatePassword (lowerCase) {
//     console.log('Look below');
//     for (var i = 0; i < lowerCase.length; i++) {
//       console.log(lowerCase[i]);
//     }
//     function generatePassword (number) {
//       console.log('Look below');
//       for (var i = 0; i < number.length; i++) {
//         console.log(number[i]);
//       }
//       // Uppercase
//     function generatePassword (symbol) {
//         console.log('Look below');
//         for (var i = 0; i < symbol.length; i++) {
//           console.log(symbol[i]);
//         }
// }
// alert(generate password)
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

//the array needs to be flattened
arrchar = [].concat.apply([], arrchar);

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

document.querySelector('#myBtn').addEventListener('click', generatePassword(upperCase));
