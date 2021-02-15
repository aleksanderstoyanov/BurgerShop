const auth=firebase.auth();
import partials from '../partials.js';
 
export function loadLogin(context){
    context.loadPartials(partials).partial('./templates/login.hbs');
}

export function postLogin(context){
    const{username,password}=context.params;

  auth.signInWithEmailAndPassword(username,password).then(()=>{
    localStorage.setItem('user',JSON.stringify({username,password}));
     context.app.loggedIn=true;
     context.app.username=username;
     this.redirect('#/home');
  }).catch((error)=>{
      const errorMesage=error.message;
      alert(errorMesage);
  }); 

}