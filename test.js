/*const number = 40;
try {
    if(number > 50) {
        console.log('Success');
    }
    else {

        // user-defined throw statement
        throw Error('The number is low');
    }

    // if throw executes, the below code does not execute
    console.log('hello');
}
catch(error) {
    console.log('An error caught'); 
    console.log('Error message: ' + error);  
} */


/*function test() {
    x = 10
}

x = 20

console.log(x) */

let arr1 = ['one', 'two'];
let arr2 = ['three', 'four', 'five'];

console.log(arr1 + arr2)

arr1 = arr2

console.log(arr1)

arr1.push(2)

console.log(arr1)

console.log(arr2)