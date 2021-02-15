import { loadHome } from "../views/home.js";
import { loadIntro } from "../views/intro.js";
import { loadBurgers, postBurgers } from "../views/menu/burgers.js";
import { loadDrinks,postDrinks} from "../views/menu/drinks.js";
import { loadMenu } from "../views/menu/menu.js";
import { loadLogin, postLogin } from "../views/users/login.js";
import { loadRegister, postRegister } from "../views/users/register.js";
import {loadProfile} from '../views/users/profile.js';
import { logOutOfUser } from "../views/users/logout.js";



const app = Sammy('#root', function (context) {
    this.use('Handlebars', 'hbs')

    this.get('#/intro',loadIntro);
    this.get('#/home',loadHome);
    this.get('#/register',loadRegister);
    this.get('#/login',loadLogin);
    this.get('#/menu',loadMenu);
    this.get('#/burgers',loadBurgers);
    this.get('#/drinks',loadDrinks);
    this.get('#/profile',loadProfile);
    this.get('#/logOut',logOutOfUser);
    this.post('#/register',postRegister);
    this.post('#/login',postLogin);
    this.post('#/burgers',postBurgers);
    this.post('#/drinks',postDrinks);
});

app.run('#/intro');
