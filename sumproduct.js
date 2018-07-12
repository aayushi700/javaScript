
let sumProduct = function(arr){
    let p = 1;
for(i=0;i<arr.length;i++){
 p = p*arr[i];
}
console.log(p);
let result = arr.reduce((acc,current) => acc+current);
return result;
}

console.log(sumProduct([1,2,3,4]));