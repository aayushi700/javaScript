
function highest(arr){
    var length = arr.length;
    var largest = arr[0];
    //console.log(length);
    for(var i=0;i<=length;i++)
    {
        if(arr[i]>largest)
        {
         largest = arr[i];
        }
    }
    console.log(largest); 
}

function smallest(arr){
    var length = arr.length;
    var lowest = arr[0];

    for(var j=0;j<=length;j++)
    {
        if(arr[j]<lowest)
        {
         lowest = arr[j];
        }
    }
    console.log(lowest);
}
var num = [2,3,4,7,5,10]
highest(num);
smallest(num);