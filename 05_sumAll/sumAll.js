const sumAll = function(num1, num2) {

    let arr = [];

    let num1Check = Number.isInteger(num1)
    let num2Check = Number.isInteger(num2)

    //A2: Check to see that both inputs are integers
    if (num1Check === false || num2Check === false) {
        return "ERROR";
    } else {

        //B1: Check to see if the values are both positive - if not, see A2
        if (num1 >= 0 && num2 >= 0) {
            
            //C: Check to see if we need to increment or decrement between the two values.
            if (num1 > num2) {
                for (i = num1; i >= num2; i--) {
                    arr.push(i)
                }
            } else {
                for (i = num1; i <= num2; i++) {
                    arr.push(i)
                }
            }
        
        //B2: Throws error if either value is a negative.
        } else {
            return "ERROR";
        }

    }
    
    //D: Sums the previously appended array and returns value.
    initialValue = 0;
    let sumArr = arr.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue,);
    
    return sumArr
    

};

sumAll(1, 4)

// Do not edit below this line
module.exports = sumAll;
