//Sume of primes <=n
//Sol 1

function isPrime(number) {
    var start = 2;
    while (start <= Math.sqrt(number)) {
        if (number % start++ < 1) return false;
    }
    return number > 1;
}

console.log(isPrime(3))

function sumPrimes(num) {
  
  var sum = 0;
  var primes =[];
  
  for(var i = 2; i<=num; i++){
    if(isPrime(i)){
       sum += i;
       }
  }
  return total;
}

console.log(sumPrimes(10))

//======================================================
// Sol 2
function sumPrimes(num) {
    if (num <= 2) {
      return 2;
    }
  
    let i = 2;
    while (i < num) {
      if (num % i === 0) {
        return (sumPrimes(num - 1))
      }
      i++;
    }
    
    return (num + sumPrimes(num - 1))
  }

  console.log(sumPrimes(10))