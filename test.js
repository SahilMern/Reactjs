// function abc(){
//     console.log(abc.xyz);
    
// }
// abc()
// abc.xyz=400
// abc.xyz =200
// abc()

const number = [44,85,98,5]
number[100] = 100
// console.log(number); //Output:- 44, 85, 98, 5, <96 empty items>, 100 ]
// console.log(number[20]);// Undefined

console.log(typeof typeof 144); //string
const array =[...'sahil']
console.log(array, "arrray");

//!NOTE parseInt function string ko left se right tak padhta hai aur jab tak valid number milta hai, tab tak usse parse karta hai.
console.log(parseInt("10+2ss"));
console.log(parseInt("7FM")); 
console.log(parseInt("M7F"));                  


console.log(isNaN("Praveen"));
console.log([1, 2].map((num) => {
    if (num > 0) return;
    return num * 2;
}));



