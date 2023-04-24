let one =0;
let two=0;
let three=0;
let four=0;
let five=0;
let six=0; 
let map = new Map()
while(one!=10 && two!=10 && three!=10 && four!=10 && five!=10 && six!=10){
let dice = Math.floor(Math.random()*6)
switch(dice){
    case 1 : one++
    map.set(1,one)
    break;
    case 2 : two++
    map.set(2,two)
    break;
    case 3 : three++
    map.set(3,three)
    break;
    case 4 : four++
    map.set(4,four)
    break;
    case 5 : five++
    map.set(5,five)
    break;
    case 6 : six++
    map.set(6,six)
    break;
}
}
let smallest = 10
let largest = 0
for(let i = 1;i<=map.size;i++){
    console.log(i+" "+map.get(i))
}
for(let k of map.values())
{
 if(smallest>k){
        smallest = k
    }
}

for(let k of map.values()){
if(k>largest){
    largest = k
}
}
// console.log(smallest)
for(let [key,value] of map)
{
    if(value==largest){
        console.log("Largest time repeated element is : ",key,"for times",value)
    }
   
if(value==smallest){
    console.log("smallest time repeated element is : ",key,"for times",value)
}
}