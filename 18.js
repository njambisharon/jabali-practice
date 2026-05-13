const products = [
  { name: "T-shirt",    price: 800,  stock: 12,  category: "clothing"    },
  { name: "Headphones", price: 2500, stock: 0,   category: "electronics" },
  { name: "Notebook",   price: 150,  stock: 45,  category: "stationery"  },
  { name: "Sneakers",   price: 3200, stock: 5,   category: "clothing"    },
  { name: "Pen",        price: 50,   stock: 200, category: "stationery"  },
];
let totalValue=(products[0].price)*(products[0].stock);
for(i=0;i<products.length;i++){
    if(products[i].price*products[i].stock){
        totalValue=(products[i].price)*(products[i].stock);
    }


   // if (products[i].category==='clothing'){
        //onsole.log(products[i].name);
    }
    console.log(totalValue);
   // if(products[i].price<=1000){
        //console.log(products[i].name);
    

    //if(products[i].stock<=0){

       // console.log(products[i].name);
  
