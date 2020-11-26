//function expression: simplest name approach
function square(number)
{
    let squared = number * number;
    return squared;
}
let s = square(345);
console.log(s);

//function expression: anonymous function
var fun1 = function (number)
{
    let squared = number * number;
    return squared;
}
let s1 = fun1(345);
console.log(s1);

//Arrow function
