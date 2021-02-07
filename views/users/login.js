import partials from '../partials.js';
 
export function loadLogin(context){
    context.loadPartials(partials).partial('./templates/login.hbs');
}