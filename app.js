const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv/config');
const app = express();

//MIDDLEWARE
app.use(bodyParser.json());




////////////////// ///////////import router

const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);


//ROUTES

app.get('/', (req,res) =>{
    res.send('we are home');
});

/////////////////////////////////////// conect to db
mongoose.connect('process.env.DB_ CONNECTION',
{ useUnifiedTopology: true ,
useNewUrlParser: true },
() => {
console.log('connected to db');
}

);

///////////////////////////////////// how we start listeinnig to server

app.listen(3000, function(req, res){
console.log('server running');
})





