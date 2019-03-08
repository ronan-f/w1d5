//Implement a Node.js script that imports the functionality of your module, adds at least 5 different data points to the module's data list, and outputs the sorted list.

var part1Functions = require('./researchPart1')

part1Functions.pushNumber(6);
part1Functions.pushNumber(7);
part1Functions.pushNumber(4);
part1Functions.pushNumber(19);
part1Functions.pushNumber(23);
part1Functions.pushNumber(5);

console.log(part1Functions.returnSortFunction());


