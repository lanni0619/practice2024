var compose = function(functions) {
    let len = functions.length;
    console.log(len);
    console.log(functions);
    return function(x) {
        
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

const fn = compose([x => x + 1, x => 2 * x])

num =[2,3,5];
console.log(num[4]);