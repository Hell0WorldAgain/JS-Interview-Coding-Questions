// Adding unlimited numbers, while accessing those as arguments directly from parameters
// There's a object in JS called as arguments, JS made all those parameters received in a function as parameters.

// 1st way - using Arguments
function addNumbers(){
    let ans = 0;
    for(let i = 0; i < arguments.length; i = i+1){
        ans = ans + arguments[i];
    }
    return ans;
}
let result = addNumbers(20,50,80);
let result2 = addNumbers(200,500,800,1200,1500,1800,2000);
console.log(result, result2);

// 2nd way - using Spread Operator
function addNumbersV2(...abhi){
    let ans = 0;
    for(let i = 0; i < abhi.length; i++){
        ans = ans + abhi[i];
    }
    return ans;
}
let result = addNumbersV2(20,50,80);
let result2 = addNumbersV2(200,500,800,1200,1500,1800,2000);
console.log(result, result2);
