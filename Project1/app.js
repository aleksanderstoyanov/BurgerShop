const app = Sammy('#root', function (context) {
    this.use('Handlebars', 'hbs')
    const partials = {
        header: './templates/header.hbs',
        footer: './templates/footer.hbs',
        orders: './templates/orders.hbs'
    }

    this.get('#/intro', function (context) {
        context.loadPartials(partials).partial('./templates/intro.hbs');
     
        console.log(context);
       
    })
    this.get('#/home', function (context) {
        context.loadPartials(partials).partial('./templates/home.hbs');
    })

    this.get('#/register', function (context) {
        context.loadPartials(partials).partial('./templates/register.hbs');
    })

    this.get('#/login', function (context) {
        context.loadPartials(partials).partial('./templates/login.hbs');
    })

    this.get('#/menu', function (context) {
        context.loadPartials(partials).partial('./templates/menu.hbs');
    })
    this.get('#/burgers', function (context) {
        context.loadPartials(partials).partial('./templates/burgers.hbs');
    })
    this.get('#/drinks', function (context) {
        context.loadPartials(partials).partial('./templates/drinks.hbs');
    })
    this.get('#/profile',function(context){
        context.loadPartials(partials).partial('./templates/profile.hbs');
    })

});

app.run('#/intro');
