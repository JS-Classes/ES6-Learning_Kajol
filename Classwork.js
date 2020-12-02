//Find matching numbers in a sentence using regex

//let num1 = "The con1223cept aro234se in the 1950s when the Amer123ican mathem123atician";
//let regexNumber = /\d+/g; //+, *, ? (quantifier)
//let matches = num1.match(regexNumber);
//console.log(matches);

// Find matching email using regex

let email = "ab12c@xyz.com ab12c@xyz ab12c@xyz.net";
let regexEmail = /[a-z]+\w*@[a-z]+.(com|net)/g;
let correctEmails = email.match(regexEmail);
console.log(correctEmails);

