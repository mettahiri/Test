let {doubleMe} = require('./lib');

/**
 Function: "doubleMe"
 input: (number,callback)
 description:  a function that multiply a number after a some time
 example:

 doubleMe(2, function(x) {
    console.log('result is ',x); //result is 4
 });

 */

/**TODO
 apply the function doubleMe on each element of the array with respecting the order of execution
 so apply the function doubleMe on the first element and display the result
 then apply it to the second element and display the result
 ...
 then apply it to the nth element and display the result

 NB: the array could have a variable length So your solution should work on any array of number regardless of his length

 Example:
 arr = [1, 2, 3, 4, 5];
 expected Output:
 //wait the result of doubleMe(1)
 2
 //wait the result of doubleMe(2)
 4
 //wait the result of doubleMe(3)
 6
 //wait the result of doubleMe(4)
 8
 //wait the result of doubleMe(5)
 10
 */

let arr = [1, 2, 3, 4, 5];
//Your Code

async function getResult(n){
     doubleMe(n,  await function test(x) {
        console.log('result is ', x); 
    });
}
async function processArray(array){
       for(const n of array){
           await  getResult(n)
       }
}
processArray(arr);



