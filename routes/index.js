const express = require('express');
const router = express.Router();
require('dotenv').config();
const sgMail = require('@sendgrid/mail');
var nodemailer = require("nodemailer");

router.get('/', (req, res) =>
    res.render('home'));

    router.get('/products', (req, res) =>
    res.render('productSlide'));

    router.get('/contact', (req, res) =>
    res.render('contact'));
    router.get('/wishlist', (req, res) =>
    res.render('wishlist'));

   
router.post('/subscribe', (req, res) => {
    sgMail.setApiKey(process.env.API_KEY);
    const msg = {
        to: 'dickensjuma13@gmail.com',
        from: '[Kadianga Electrical Limited]',
        subject: 'Subscribtion request',
        html: `<br>Email: ${req.body.email}<br>`,
    };
    sgMail.send(msg,function(err,json){
        if(err){ return console.error(err);}
        console.log(json);
        console.log("sucess");
        req.flash('success_msg', 'Subscribtion request sucessfully!');
        res.redirect("/")
    });
    

});
router.post('/quote', (req, res) => {
    sgMail.setApiKey(process.env.API_KEY);
    const msg = {
        to: 'dickensjuma13@gmail.com',
        from: '[Kadianga Electrical Limited]',
        subject: 'Orders',
        html: `<strong>Name: ${req.body.name} <br>Email: ${req.body.email}<br>
        Phone No: ${req.body.phone}<br><br>${req.body.quote}</strong>`,
    };
    sgMail.send(msg);
    res.status(200)
    console.log("sucess");
    req.flash('success_msg', 'Order sent sucessfully!');
    res.redirect("/")

});
module.exports = router;