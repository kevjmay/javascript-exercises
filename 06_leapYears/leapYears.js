const leapYears = function(num) {

    let year = num;

    if (year % 4 === 0) {
        
        if (year % 100 === 0 && year % 400 !== 0) {
            return false
        } else {
            return true
        }

    } else {
        return false
    } 

};

leapYears(1996)

// Do not edit below this line
module.exports = leapYears;
