
function solve() {
   
    let cart = document.getElementById("cart");
    let orders = document.getElementById("orders")
    cart.addEventListener("click", function () {
        if (orders.style.display != "none") {
            orders.style.display = "none";
        } 
        else {
           orders.style.display="block";
        }
    })


}

