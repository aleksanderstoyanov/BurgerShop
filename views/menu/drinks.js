import partials from '../partials.js'

export function loadDrinks(context){
    context.loadPartials(partials).partial('./templates/drinks.hbs');
    
}