// Write a programme to generate and print a dictionary that 
// contains a number (between 1 and n) in the form (x, x*x).
var user = require('readline-sync');
var num = user.questionInt('Enter the number  ');
dict = {}
for (var i = 0; i <= num; i++) {
    dict[i] = i **2
}
console.log(dict)