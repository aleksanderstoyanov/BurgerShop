import partials from '../partials.js';

export function loadMenu(context){
    context.loadPartials(partials).partial('./templates/menu.hbs');
}