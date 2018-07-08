function format(num) {
    var n = num.toFixed(2);
    return n;
}
function round(num){
var n=Math.round(num*100)/100;
return n;
}
console.log(round(23.4567));
console.log(format(23.4567));