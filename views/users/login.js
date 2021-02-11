import partials from '../partials.js';
 
export function loadLogin(context){
    context.loadPartials(partials).partial('./templates/login.hbs');
}

export function postLogin(context){
    const{username,password}=context.params;
    console.log(username);
}