const express = require('express');
const router = express.Router();
require('dotenv').config();
const sgMail = require('@sendgrid/mail');

router.get('/', (req, res) =>
    res.render('home'));


router.post('/quote', (req, res) => {
    sgMail.setApiKey('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');
    const msg = {
        to: 'dickensjuma13@gmail.com',
        from: 'orders@kadianga.com',
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