
/**
 * # Create an email pattern 
 */
let email = "mimi89.com@gmail.net";

let emailpattern = /^[a-z0-9_.]*@[a-z]{3,}\.[a-z]{3,6}$/;

console.log(emailpattern.test(email));


/**
 * # Create a  username pattern
 */
 
let myname ="Aaswrg23[]";

 
let mynamePattern = /^[A-Z]{1,1}[a-z0-9]{3,}[`~!@#$%^&*()}{'";:/?.>,<\[\]_+-\=|]*$/;

console.log(mynamePattern.test(myname));



/**
 * # Create a Bangladeshi phone number pattern
 */

let bdPhon = "+8801234567689";

let bdPhonPattern = /^(\+88)[0-9]{11,11}[^A-Za-z`~!@#$%^&*()}{'";:/?.>,<\[\]_+-\=|]*$/;

console.log(bdPhonPattern.test(bdPhon));


 

/**
 * # Create a password pattern 
 */
let passw = "Aa634534$^^&*()_}{|||56][/\;.\,";

let passwPattern = /^[A-a]{1}[a-z0-9]{4,}[`~!@#$%^&*()}{'";:/?.>,<\[\]_+-\=|]*$/;

console.log(passwPattern.test(passw));


//  let password ="112ashA@.";
// // let passwordPattern =/^[0-9a-z]*[A-Z]([*.!@#$%^&:;<>,.]){1,}$/;
// let passwordPattern =/^[0-9a-z]*[A-Z]([*.!@#$%^&(){}[]){1,}$/;
// console.log(passwordPattern.test(password));

/**
 * #Create a zipcode pattern
 */

let zipCode = "9290";

let zipCodePattern = /^[0-9]{4}[^A-Za-z`~!@#$%^&*()}{'";:/?.>,<\[\]_+-\=|]*$/;
 
console.log(zipCodePattern.test(zipCode)); 


