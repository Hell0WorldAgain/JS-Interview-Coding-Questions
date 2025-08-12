/* sum(a)(b)(c)....( n)() */

let sum = function (a) {
    return function (b) {
        if (b){
            return sum(a+b);
        }
        return (a);
    }
}
console.log(sum(1)(2)(3)(4)(50)());

/* Using arrow function */
let sum = a => b => b ? sum(a + b) : a;

console.log(sum(10)(20)(3)(4)());
