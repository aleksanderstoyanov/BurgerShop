import partials from  '../partials.js';

export function loadBurgers(context){
    context.loadPartials(partials).partial('./templates/burgers.hbs');
}