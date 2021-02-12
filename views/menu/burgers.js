const url='https://burger-shop-6043c-default-rtdb.europe-west1.firebasedatabase.app/burgers/.json';
import partials from  '../partials.js';

export async function loadBurgers(context){
    context.app.burgers=[];

 await fetch(url)
 .then((response)=>response.json())
 .then((result)=>{
   Object.entries(result).forEach(([key,obj]) => {
       const {name,price,img}=obj;
    
       context.app.burgers.push({name,price,img});
       
   });


 })
 .then(()=>{ context.loadPartials(partials).partial('./templates/burgers.hbs',context.app);
})

   
}