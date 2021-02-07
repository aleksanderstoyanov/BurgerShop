import partials from '../partials.js';

export function loadRegister(context){
    context.loadPartials(partials).partial('./templates/register.hbs');
}