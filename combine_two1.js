// Write a Python program to combine two dictionary adding values for common keys.
var d1 = {'a': 100, 'b': 200, 'c':300,'d':400}
var d2 = {'a': 300, 'b': 200, 'c':100,'d':100}
for (x in d1){ 
    console.log(d1[x]+d2[x])
}