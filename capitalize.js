//capitalize first letter

function capitalize(str){
    var first = str[0].toUpperCase();
    //console.log(first);
    var strg = str.slice(1);
    console.log(first+strg);
    
}

capitalize("hello world");