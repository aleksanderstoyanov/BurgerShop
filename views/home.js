import partials from './partials.js';


export function loadHome(context){
     context.loadPartials(partials).partial('./templates/home.hbs',context.app);
}