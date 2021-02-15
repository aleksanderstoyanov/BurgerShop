export async function deleteOrder(context){
    const{id}=context.params;
    await fetch(`https://burger-shop-6043c-default-rtdb.europe-west1.firebasedatabase.app/orders/${id}.json`,{method:'DELETE'});
    this.redirect('#/home');
}