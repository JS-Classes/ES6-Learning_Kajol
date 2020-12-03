//1. Program to print multiplication table for a number 

const number=3;
for(let i = 1; i <= 10; i++) {
    const result = i * number;
    console.log(`${number} * ${i} = ${result}`);
}

//2. Program to print multiplication table for a number upto some range (default should be 10)

let y = 2;
function MULTIPLY (y, range = 5) {
    
   for (let x = 1; x<= 10; x++){
       let mul = y*x;
       console.log(`${y} * ${x} = ${mul}`);
       if(x == range)
       {
            break;
       }
    }
}
MULTIPLY(y,2);

//3. Program to print multiplication table for numbers from m to n.

function MultiplicationTable(m,n, range = 10)
{
    for(let i = m; i<= n; i++)
    {
        console.log(`Multiplication Table for ${i}`)
        for(let x = 1; x<=range; x++)
        {
            let mul = m*x;
            console.log(`${i} * ${x} = ${mul}`);
        }
    }
}

MultiplicationTable(2,5);







