import partials from '../partials.js';
const urlBurgers = 'https://burger-shop-6043c-default-rtdb.europe-west1.firebasedatabase.app/burgers/.json';
const urlDrinks = 'https://burger-shop-6043c-default-rtdb.europe-west1.firebasedatabase.app/drinks/.json';
export async function loadMenu(context) {
    context.app.burgers = [];
    context.app.drinks = [];
    await fetch(urlBurgers)
        .then((response) => response.json())
        .then((result) => {
            Object.entries(result).forEach(([key, obj]) => {
                const { name, price, img } = obj;

                context.app.burgers.push({ name, price, img });

            });


        })
        .then(() => {
            context.loadPartials(partials).partial('./templates/burgers.hbs', context.app);
        })
    await fetch(urlDrinks)
        .then((response) => response.json())
        .then((result) => {
            Object.entries(result).forEach(([key, obj]) => {
                const { name, price, img } = obj;

                context.app.drinks.push({ name, price, img });
            })
        })


    context.loadPartials(partials).partial('./templates/menu.hbs', context.app);
}