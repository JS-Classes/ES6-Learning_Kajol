
let hackathon = 'Hackathon 2020' + 12;
//String literal

//let name = `\`Cotiviti\` ${hackathon}`;
//let name = `Cotiviti ${hackathon}
//Cotiviti ${hackathon}`;
let x = "X";
let y = "Y";
let isMale = true;

let name = `Cotiviti ${12+34-56}`;

//let z = `${isMale ? x : y}`;
//console.log(name);

//Regular Expression

//let xx = "23 067 sd fsdf sdf sd 34 2342";
//let re = /[0-9]/; // /\d/ same ho
//let re1 = new RegExp('[0-9]'); // '\d' same ho
//x.match(re);

let xx = "23 067 sd fsdf sdf sd 34 2342";
let re = /sd/;
let yy = xx.match(re);
console.log(yy);

