
/*
*
**
***
****
*****
*/
var n;
function printStar(n){

    for(var i=1; i<=n; i++)
    {
        for(var j=1; j<=i; j++)
        {
            console.log("*");
        }
        console.log(" ");
    }
}

printStar(5);