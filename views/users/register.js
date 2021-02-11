const auth=firebase.auth();
import partials from '../partials.js';

export function loadRegister(context){
    context.loadPartials(partials).partial('./templates/register.hbs');
}
export function postRegister(context){
    
    const{username,password,rePassword}=context.params;
    
    if (!isValidDataForRegister(username,password,rePassword)) {
       this.redirect('#/register');
       
    }
    auth.createUserWithEmailAndPassword(username,password).then((response)=>{
          console.log(response);
        context.app.loggedIn=true;
       localStorage.setItem('user',JSON.stringify({username,password}));
       context.app.username=usernamea;
       this.redirect('#/home');
    })
    
    
 
}

function isValidDataForRegister(username,password,rePassword){

  
    if (username===''||password===''||rePassword==='') {
       
       return false;
    }
    if (password!=rePassword) {
       
        return false;
    }
    if (password.length<6||rePassword.length<6||username.length<8) {
      
        return false;
    }

    return true;

}