function sum (number1, number2) {
    return number1 + number2;
}

let result = sum(12, 10);

console.log(result);




let myArray = [2, 4, 5, 8, 7, 3];

function average (array) {
    let sum = 0;

    for (let value of array) {
        sum += value;
    }

let average = sum / array.length;

return average;
 }

 console.log(average(myArray));









 function generateArrayOfNumbers (number) {
    let array = [];

    for (let index = 1; index <= number; index += 1){
        array.push(index);
    }
 }

    console.log(generateArrayOfNumbers, 10);





