export function logOutOfUser(context){
    context.app.loggedIn=false;
        this.redirect('#/home');
}