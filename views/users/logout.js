export function logOutOfUser(context){
    context.app.loggedIn=false;
    localStorage.clear();
        this.redirect('#/home');

}