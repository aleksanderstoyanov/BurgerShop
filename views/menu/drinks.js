const url='https://burger-shop-6043c-default-rtdb.europe-west1.firebasedatabase.app/drinks/.json';
import partials from '../partials.js'

export async function loadDrinks(context){
    context.app.drinks=[];
  

    await fetch(url)
    .then((response)=>response.json())
    .then((result)=>{
        Object.entries(result).forEach(([key,obj])=>{
            const{name,price,img}=obj;

            context.app.drinks.push({name,price,img});
        })
    })


    context.loadPartials(partials).partial('./templates/drinks.hbs',context.app);
    
}