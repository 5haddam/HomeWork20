function initializeSumCalculator() {
    let sumOfPreviousNumbers = 0; 
    function resultOfSum(newNumber) { 
        sumOfPreviousNumbers += newNumber;
        return sumOfPreviousNumbers
    }
    return resultOfSum;
}

const sum = initializeSumCalculator();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
