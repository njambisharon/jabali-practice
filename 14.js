function countVowels(text){
let vowels="aeiou";
let count=0;
    for (let i=0 ;i<text.length; i++){
       if(vowels.includes(text[i])){
         count++;
       }
    }
     return count;
}

  console.log(countVowels("javascript"));