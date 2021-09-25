// Take 10 student inputs and marks and save them in an object.Output=
// { 'sonu':85, 'Kartik':90, 'Deepak':96, 'Aman':76, 'Somesh':60, 'Umesh':85,
//  'Amarpal':70, 'Roshan':57, 'Riyaz':98, 'Shabid':56 }
var user = require('readline-sync');
var names={}
for (var i = 0; i <10; i++){
    var Name =user.question("Enter your name:-");
    var marks=user.questionInt("Enter the marks:-");
    names[Name]=marks;
    }
console.log(names);