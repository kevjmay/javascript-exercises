const removeFromArray = function() {

    let argsArr = Array.from(arguments)
    let first = argsArr.shift()
    let second = argsArr.slice(0,)
    let filteredArray = first.filter(item => !second.includes(item))
    
    return filteredArray

};

removeFromArray([1, 2, 3], 3, 4)

// Do not edit below this line
module.exports = removeFromArray;
