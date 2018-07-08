function gcd( n1, n2)
{
    if (n2 != 0)
       return gcd(n2, n1%n2);
    else 
       return n1;
}
console.log(gcd(21,7));