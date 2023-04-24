//Extend the Prime Factorization Program to store all the Prime Factors of a 
// number n into an array and finally display the output.
let array = []
let a = 130;
for (let i = 2; i < a; i++) {
    while( a%i == 0){
      console.log(i," ");
    array.push(i)
      a = a/i ;
    }
}
  if(a>=2){
    console.log(a);
    array.push(a)
  }

console.log(array);