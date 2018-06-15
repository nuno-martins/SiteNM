const express = require ('express');
const hbs = require('hbs');
const app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');

app.get('/', (request,response, hbs) => {
    //response.send('<h1>Hello From Express</h1>');
    response.render('welcome.hbs',{
            title: "welcome to my site!",
            text: "server"
        });
});






app.listen(3000);