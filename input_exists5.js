// Write a program to take 1 input and check whether given input exists in 
// our object or not, if it exists print exists or else prints not exist.
// dict={“name”:”Raju”, “marks”:56}
// if input is “name” then output will be “exist”
// If input is “class” then output will be “not exists”.
var user = require('readline-sync');
var input =user.question('Enter the property name:');
var dict={"name":"Raju", "marks":56}
for (i in dict){
    if (i==input){
        console.log("In object this is exists");
        break
    }
    else{
        console.log("In object this is not exist");
        break
    }
    }