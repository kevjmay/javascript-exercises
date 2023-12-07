const repeatString = function(string, num) {
    
    output = "";

    if (num < 0) {
        output = "ERROR"
    };

    for (let i = 0; i < num; i++) {
        output += string;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
