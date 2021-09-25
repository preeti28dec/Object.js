// You need to count the number of occurrences of each unique character 
// of a word "MISSISSIPPI" and store them in an object in key, value pairs.
var list1=[]
var word="MISSISSIPPI"
var dict={}
for (var i of word) {
    if(list1.includes(i)){
        dict[i]=dict[i]+1
    }
    else{
        list1.push(i);
        dict[i]=1;
    }
}
console.log(dict);