var chalk = require("chalk");

var input = process.argv[2];
var input2 = process.argv[3];
var input3 = process.argv[4];

console.log(chalk.blue.bold.bgYellow(input));
console.log(chalk.green.bold.bgRed(input2));
console.log(chalk.white.bold.bgBlue.underline.italic(input3));

