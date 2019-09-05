const express = require('express');
const SGmail = require('@sendgrid/mail');
const bodyParser=require('body-parser')
const morgan = require('morgan')
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const session = require('express-session');
require('dotenv').config();
const app = express();
const expressLayouts = require('express-ejs-layouts');
const port = process.env.PORT || 3000;

//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//static folder
app.use(express.static('public'));
app.use(morgan('tiny'));

//ejs 
app.use(expressLayouts);
app.set('view engine', 'ejs');

// initialize cookie-parser to allow us access the cookies stored in the browser. 
app.use(cookieParser());

// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

// Connect flash
app.use(flash());

// Global variables
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

//routes
app.use('/', require('./routes/index.js'));

app.listen(port, () => {
console.log(`listening on port ${port}`)
})