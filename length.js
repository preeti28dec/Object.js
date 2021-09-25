var obj = {a:1,b:2,c:3};
const propOwn = Object.getOwnPropertyNames(obj);
var a =propOwn.length;
console.log(a);
for (var i=0 ; i<a; i++){
    console.log(i);
    // console.log(obj[i]);
}
