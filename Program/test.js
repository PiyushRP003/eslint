// program to find the largest among three numbers

  
const num1 = 3;
const num2 =  2;
const num3 = 3;
let largest;

// check the condition
if(num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}

// display the result
console.log('The largest number is ' + largest);

function add(a,b){
    if(a>b){
        return a+b
    }
    return a*b;
} 

console.log(add(num1,num2));