
import partials from './partials.js';
const orderUrl='https://burger-shop-6043c-default-rtdb.europe-west1.firebasedatabase.app/orders/.json';
export async function loadHome(context){
     const orders=context.app.orders=[];
     let sum=0;
    context.app.totalPrice=0;
     await fetch(orderUrl).
     then((response)=>response.json())
     .then((data)=>Object.entries(data).forEach(([key,obj])=>{
          const order=obj;
         
         orders.push(order);
         sum+=parseFloat(order.price);
     }));
     context.app.totalPrice=sum;
    console.log(context.app.totalPrice);
     context.loadPartials(partials,context.app).partial('./templates/home.hbs',context.app);
}