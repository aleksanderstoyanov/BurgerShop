import partials from '../partials.js';

export  function loadProfile (context){
    context.loadPartials(partials).partial('./templates/profile.hbs',context.app);
}