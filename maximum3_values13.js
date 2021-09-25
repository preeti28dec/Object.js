// Write a programme to find the 3 maximum values of an object and print them.
// output:-[58,56,100]
var list = { 'a':50, 'b':58, 'c':56, 'd':40, 'e':100, 'f':20 }
var keys = Object.keys(list);
var max = list[keys[0]];
for (var i = 1; i < keys.length; i++) {
    var value = list[keys[i]];
    if (value > max) max = value;
}
console.log(max)
