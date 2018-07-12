let arr1 = [4,5,5,6,13];

//second largest in array
function largestArray(arr){
let temp = [];
arr.forEach(
    (element)=>{
        if(temp.indexOf(element)== -1)
        temp.push(element);
    })
arr2 = temp.sort((a,b)=>a-b);
return (arr2[arr2.length - 2]);
}
console.log(largestArray(arr1));