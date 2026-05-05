

function findMax(arr){
    let max = 0;
    for(i in arr){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}

console.log(findMax([3,12,7,2,25,]));
console.log(findMax([7,87,89,0,-100]));
console.log(findMax([]));