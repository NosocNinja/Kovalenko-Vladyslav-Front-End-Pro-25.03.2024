//funvtion 1
let array = [1, 2, 'a', 3, 'b', 'c', 4, 5, 'd'];

function averageArithmeticOfArray(array){
    let sum = 0;
    let numberOfNumbers = 0;

    array.forEach(element => {
        if(typeof element === 'number'){
            sum += element;
            numberOfNumbers++
        }
    });


    if (numberOfNumbers === 0){
        return 0;
    }
    else{
        return summa / numberOfNumbers;
    }
}

console.log(averageArithmeticOfArray())

//function 2
function doMath(x, znak, y){
    let result = 0;
    switch (znak){
        case '+':
            result = x + y;
            return result;
        case '-':
            result = x - y;
            return result;
        case '*':
            result = x * y;
            return result;
        case '/':
            if (y !== 0){
                result = x / y;
                return result;
            }
            else{
                return alert('Error')
            }
        case '%':
            result = x % y;
            return result;

        case '^':
            result = Math.pow(x, y)
            return result;
        default:
            alert('Error')
    }
    return result;
}

console.log(doMath(parseFloat(prompt('Give me first number')),prompt('Give me mathematical sign'), parseFloat(prompt('Give me second number'))) + ' - result')

//function 3
function fillTwoDimensionalArray(){
    const mainLength = parseInt(prompt('Enter the length of the main array:'))
    const innerLength = parseInt(prompt("Enter the length of the inner arrays:"));

    let twoDimensionalArray = [];

    for(let i = 0; i < mainLength; i++) {
        let innerArray = [];
        for(let j = 0; j < innerLength; j++){
            innerArray.push(prompt(`Enter the value for element [${i}][${j}]:`));
        }
        twoDimensionalArray.push(innerArray);
    }
    return twoDimensionalArray;
}

const myTwoDimensionalArray = fillTwoDimensionalArray();
console.log("Filled two-dimensional array:", myTwoDimensionalArray);