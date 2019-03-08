//Create a module that exports a function that takes a number as a parameter and stores it in a list. The list should not be accessible from outside the module.

let listOfNumbers = [];

var pushNumber = function(number){
  listOfNumbers.push(number);
}

exports.pushNumber = pushNumber;


