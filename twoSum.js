/*
Brute Force Approach :
---------------------
The brute force approach is a straightforward and simple method for solving a problem. 
It involves checking all possible solutions to find the correct one. 
This method does not use any optimization techniques and often has high computational costs due to its exhaustive nature.
time complexity of O(n^2).
*/

function twoSumMethod1(arr, target){
    for(let i = 0; i< arr.length; i++){
        for(let j = i+1; j<arr.length; j++){
            if(arr[i]+arr[j] === target){
                return [i, j]
            }
        }
    }
    return null
}
let finalResult1 = twoSumMethod1([2, 11, 15, 7], 9)
// console.log(finalResult)
finalResult1 = twoSumMethod1([2, 11, 15, 7], 6)
// console.log(finalResult)

finalResult1 = twoSumMethod1([3,3], 6)
// console.log(finalResult)

/**
 * Using a Hash Map
 * A hash map, also known as a hash table, 
 * is a data structure that provides efficient mapping of keys to values. 
 * It uses a hash function to compute an index into an array of buckets or slots, 
 * from which the desired value can be found.
 */

const twoSumMethod2 = (arr,target) => {
    let hasMap = new Map()
    for(let i =0; i< arr.length; i++){
        let x = target - arr[i];
        if(hasMap.has(x)){
            return [hasMap.get(x), i]
        }
        hasMap.set(arr[i], i)
    }
    return null;
}
let finalResult = twoSumMethod2([2, 11, 15, 7], 9)
console.log(finalResult)
finalResult = twoSumMethod2([2, 7, 15], 6)
console.log(finalResult)
finalResult = twoSumMethod2([3,3], 6)
console.log(finalResult)