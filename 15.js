function timeTable(n){
   for (let i=1;1<=10; i++){
    let result =n*i;
    console.log(i);
    if((n*i)>15){
      return `Stopped at ${n*i}`;
    }
   //console.log(`${n}x${i}=${result}`);
   }
}
timeTable(7);