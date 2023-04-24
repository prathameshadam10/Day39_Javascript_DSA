// Write a program in the following steps
// a. Generates 10 Random 3 Digit number.
// b. Store this random numbers into a array.
// c. Then find the 2nd largest and the 2nd smallest element without sorting the array.
let number= [];
for(var i=0;i<10;i++){
    let num = Math.floor(Math.random()*999)
    number.push(num)
}
console.log(number);

let largestNumber = 0;
let secondLargestNumber = 0;
let smallestNumber = number[9];
let secondSmallestNumber = number[0];
for(element of number){
  // for largest number and second largest number
  if(element>largestNumber){
    secondLargestNumber = largestNumber;
    largestNumber = element;
  }
  else if(element>secondLargestNumber && element != largestNumber){
    secondLargestNumber = element;
  }
  // for smallest number and second smallest number
    if(element<smallestNumber){
        secondSmallestNumber = smallestNumber;
        smallestNumber = element;
    }
    else if(element<secondSmallestNumber && element != smallestNumber){
        secondSmallestNumber = element;
    }
}
console.log("Largest element is => ",largestNumber);
console.log("Second largest element is => ",secondLargestNumber);
console.log("Smallest element is => ",smallestNumber);
console.log("Second smallest element is => ",secondSmallestNumber);