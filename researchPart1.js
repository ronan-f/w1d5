//Create a module that exports a function that takes a number as a parameter and stores it in a list. The list should not be accessible from outside the module.

let listOfNumbers = [];

var pushNumber = function(number){
  listOfNumbers.push(number);
}




//Export another function that returns a version of the data list that is sorted in ascending order. The function you use to sort the data correctly should not be accessible from outside the module. (Think back to the Custom Sorting Exercise when handling sorting)



pushNumber(1);
pushNumber(4);
pushNumber(10);
pushNumber(3);



let sortedList = listOfNumbers.sort(function(a,b){
    return a - b
})

let returnSortFunction = function(){
  return sortedList;
}



exports.pushNumber = pushNumber;
exports.returnSortFunction = returnSortFunction;