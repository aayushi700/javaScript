
let union = function(arr1,arr2){
    arr3 = [...arr1,...arr2];
    let arr = [];
    arr3.forEach(
        (item) =>{
            if(arr.indexOf(item) == -1)
            arr.push(item);
        })
    return (arr.sort((a,b) => a-b));
}

console.log(union([1,2,3],[100,2,1,10]));