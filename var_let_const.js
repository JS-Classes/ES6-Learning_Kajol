//Redeclaration allowed
var x = 56;
// 1000 lines of code
var x = "sdfs";

// Var is function scope or global
function add()
{
    var xx = "sdfsf";
}

//var can be hoisted
console.log(age);
var age = 67;

//let can be hoisted
console.log(age);
let age = 67;


//Redeclaration no allowed but can be mutate
let y = 45;
y = "sdfs";

//No mutation allowed
const z = true;
//z = false;

// Block scoped : let and const
function add1()
{
    var xx = "sdfsf";
    if(xx == "")
    {
        let x = 234.6;

    }
}

