
let removal = function(arr){
    arr1 = [];
    arr.forEach(
        (element) => {
            if(!!element){
                arr1.push(element);
            }
        })
    return arr1;
}
console.log(removal([NaN, 0, 15, false, "",undefined,47,null]));