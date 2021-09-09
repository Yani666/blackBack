  
require("dotenv").config();

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require("mongoose")
const session = require('express-session'); //<------ esto es lo nuevo
const passport = require("./config/passport");
const cors = require('cors')

mongoose
    .connect(process.env.DB,{
        useUnifiedTopology: true
        })
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch(err => {
    console.error("Error connecting to mongo", err)
    })


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  cors({
    credentials: true,
    origin: [process.env.FRONTENDPOINT]
  })
);

app.use(
    session({
        secret:process.env.SECRET,
        saveUninitialized:true,
        resave:true
    })
)

app.use( passport.initialize() )
app.use( passport.session() )


//rutas

const index = require('./routes/index');
const auth = require('./routes/authRoutes');
const products = require('./routes/productsRouter')
const suggestion = require('./routes/suggestionRoute')
const orders = require('./routes/ordersRoutes')



app.use('/api', index);
app.use('/api/auth', auth)
app.use('/api/products', products)
app.use('/api/suggestion', suggestion)
app.use('/api/orders', orders)


module.exports = app;
