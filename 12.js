function findLargest(numbers){
    let large=numbers[0];
    for (let i =0;i<numbers.length;i++){
        if(numbers[i]>large){

            large =numbers[i];
        }

    }
    console.log(large);

}

findLargest([3,17,8,22,55]);
function findSmallest(numbers){
    let small =numbers[0];
    for (let i=0;i>numbers.length;i++){
        if(small>numbers[i]){
            small=numbers[i];
        }
    }
    console.log(small);
}
findSmallest([3,17,8,22,55]);


