const people =[
    { 
        name:"Njambi",
        age:20,
    },
    {  name:"Valary",
        age:40,  
    },
    { name:"Viona",
        age:30,
    },
 
      ];
      for (let i=0;i<people.length;i++){
        const name =people[i].name;
        const age =people[i]['age'];
        console.log(`This is ${name},age ${age}`)
      }