function fizzBuzz(){
    for(let i=0;i<30;i++){
        const isDivisibleby3=(i+1)%3===0;
        const isDivisibleby5=(i+1)%5===0;
        if(isDivisibleby3 && isDivisibleby5){
            console.log("FizzBuzz");
        }else if(isDivisibleby3){
            console.log("Fizz");
        }else if(isDivisibleby5){
            console.log("Buzz");
        }else{
            console.log(i);
        }
    }
}
fizzBuzz();

