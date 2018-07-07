function powerOfTwo(num){
if (num == 0) return 0;
  while (num != 1)
  {
      if (num%2 != 0)
         return 0;
      num = num/2;
  }
  return 1;
}

console.log(powerOfTwo(32));
console.log(powerOfTwo(6));
console.log(powerOfTwo(7));