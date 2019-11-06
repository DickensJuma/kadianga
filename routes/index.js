
    const express = require('express');
    const nodemailer = require('nodemailer');
    const flash = require('connect-flash');
    const session = require('express-session');
    
require('dotenv').config();
   

var router = express.Router();

    
    // Express Session Middleware
    router.use(session({
        secret: 'ninja fox',
        resave: true,
        saveUninitialized: true
    }));
    
    // Express Messages Middleware
    router.use(require('connect-flash')());
    router.use(function (req, res, next) {
        res.locals.messages = require('express-messages')(req, res);
        next();
    });
    
    router.get('/', (req, res) =>
res.render('home'));
    // @route  GET contact
    // @desc   GET Contact page
    // @access Public
    router.get('/contact', function (req, res) {
        res.render('contact', {
            title:'Contact Us'
        });
    });
    
    // @route  POST contact
    // @desc   POST Contact information
    // @access Public
    router.post('/contact',(req,res)=>{
    
                // The actual output format of the message, that it is going to be sent by email
                const output = `
                <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
                <head>
                    <!--[if gte mso 9]>
                    <xml>
                        <o:OfficeDocumentSettings>
                        <o:AllowPNG/>
                        <o:PixelsPerInch>96</o:PixelsPerInch>
                        </o:OfficeDocumentSettings>
                    </xml>
                    <![endif]-->
                    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="format-detection" content="date=no" />
                    <meta name="format-detection" content="address=no" />
                    <meta name="format-detection" content="telephone=no" />
                    <meta name="x-apple-disable-message-reformatting" />
                    <!--[if !mso]><!-->
                       <link href="https://fonts.googleapis.com/css?family=Quicksand:400,400i,700,700i|Barlow+Condensed:400,400i,700,700i" rel="stylesheet"/>
                    <!--<![endif]-->
                    <title>Email Template</title>
                    <!--[if gte mso 9]>
                    <style type="text/css" media="all">
                        sup { font-size: 100% !important; }
                    </style>
                    <![endif]-->
                    
                
                    <style type="text/css" media="screen">
                        /* Linked Styles */
                        body { padding:0 !important; margin:0 !important; display:block !important; min-width:100% !important; width:100% !important; background:#ffffff; -webkit-text-size-adjust:none }
                        a { color:#d85d5c; text-decoration:none }
                        p { padding:0 !important; margin:0 !important } 
                        img { -ms-interpolation-mode: bicubic; /* Allow smoother rendering of resized image in Internet Explorer */ }
                        .mcnPreviewText { display: none !important; }
                        
                        /* Mobile styles */
                        @media only screen and (max-device-width: 480px), only screen and (max-width: 480px) {
                            .mobile-shell { width: 100% !important; min-width: 100% !important; }
                            
                            .m-center { text-align: center !important; }
                            .m-left { text-align: left !important; }
                            
                            .center { margin: 0 auto !important; }
                            .left { margin-right: auto !important; }
                            
                            .td { width: 100% !important; min-width: 100% !important; }
                
                            .m-br-5 { height: 5px !important; }
                            .m-br-10 { height: 10px !important; }
                            .m-br-15 { height: 15px !important; }
                            .m-br-30 { height: 30px !important; }
                
                            .m-td,
                            .m-hide { display: none !important; width: 0 !important; height: 0 !important; font-size: 0 !important; line-height: 0 !important; min-height: 0 !important; }
                
                            .m-block { display: block !important; }
                
                            .fluid-img img { width: 100% !important; max-width: 100% !important; height: auto !important; }
                
                            .column-top,
                            .column { float: left !important; width: 100% !important; display: block !important; }
                
                            .content-spacing { width: 15px !important; }
                
                            .m-bg { display: block !important; width: 100% !important; height: auto !important; background-position: center center !important; }
                
                            .h-auto { height: auto !important; }
                
                            .ptb-0 { padding-top: 0px !important; padding-bottom: 0px !important; }
                            .ptb-15 { padding-top: 15px !important; padding-bottom: 15px !important; }
                            .ptb-25 { padding-top: 25px !important; padding-bottom: 25px !important; }
                            .plr-5 { padding-left: 5px !important; padding-right: 5px !important; }
                            .plr-15 { padding-left: 15px !important; padding-right: 15px !important; }
                            .plr-0 { padding-left: 0px !important; padding-right: 0px !important; }
                            .pb-25 { padding-bottom: 25px !important; }
                            .pt-25 { padding-top: 25px !important; }
                
                            .p-25-15 { padding: 25px 15px !important; }
                        }
                    </style>
                </head>
                <body class="body" style="padding:0 !important; margin:0 !important; display:block !important; min-width:100% !important; width:100% !important; background:#ffffff; -webkit-text-size-adjust:none;">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
                        <tr>
                            <td align="center" valign="top">
                                <!-- Top -->
                                <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ededed">
                                    <tr>
                                        <td align="center" valign="top">
                                            <table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell">
                                                <tr>
                                                    <td class="td" style="width:650px; min-width:650px; font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
                                                        <!-- Wrapper -->
                                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                            <tr>
                                                                <td class="plr-15" style="padding: 10px 0;">
                                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                        <tr>
                                                                            <th class="column-top" valign="top" width="320" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">
                                                                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                                    <tr>
                                                                                        <td class="text-top m-center" style="color:#7d7e80; font-family:'Quicksand', Arial,sans-serif; font-size:12px; line-height:24px; text-align:left;">
                                                                                            
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </th>
                                                                            <th class="column-top" valign="top" width="10" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;"><div style="font-size:0pt; line-height:0pt;" class="m-br-5"></div>
                </th>
                                                                            <th class="column-top" valign="top" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">
                                                                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                                    <tr>
                                                                                        <td class="text-top righten m-center" style="color:#7d7e80; font-family:'Quicksand', Arial,sans-serif; font-size:12px; line-height:24px; text-align:right;">
                                                                                             <a href="#" target="_blank" class="link" style="color:#d85d5c; text-decoration:none;"><span class="link" style="color:#d85d5c; text-decoration:none;"></span></a>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </th>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <!-- END Wrapper -->
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                                <!-- END Top -->
                
                        
                
                                <!-- Main -->
                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                    <tr>
                                        <td>
                                            <!-- Section 1 -->
                                            <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#313941">
                                                <tr>
                                                    <td valign="top" class="m-td" style="font-size:0pt; line-height:0pt; text-align:left;">
                                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                            <tr>
                                                                <td class="img" height="30" bgcolor="#ffffff" style="font-size:0pt; line-height:0pt; text-align:left;">&nbsp;</td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <td align="center" valign="top" width="650" class="mobile-shell">
                                                        <table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell">
                                                            <tr>
                                                                <td class="td" style="width:650px; min-width:650px; font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
                                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                        
                                                                        <tr>
                                                                            <td class="h1-1-white centered p-25-15" style="padding: 30px; color:#ffffff; font-family:'Barlow Condensed', Arial,sans-serif; font-size:44px; line-height:52px; text-align:center;" bgcolor="#d85d5c">
                                                                                NEW PRODUCT REQUEST
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td class="p-25-15" style="padding: 30px 30px 50px 30px;">
                                                                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                                    <tr>
                                                                                        <td class="text-4-white centered" style="padding-bottom: 30px; color:#ffffff; font-family:'Quicksand', Arial,sans-serif; font-size:22px; line-height:34px; text-align:center;">
                                                                                             <p>You have a new Product request</p>
                                <h3>Contact Details</h3>
                                <ul> 
                                    <li>Name: ${req.body.name}</li>
                                    <li>Email: ${req.body.email}</li>
                                    <li>Phone No.: ${req.body.phone}</li>
                                </ul>
                                <h3>Message</h3>
                                 <p>${req.body.quote}</p></strong> 
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center">
                                                                                            <!-- Button -->
                                                                                            <table border="0" cellspacing="0" cellpadding="0">
                                                                                                <tr>
                                                                                                    <td class="text-btn-red" bgcolor="#ffffff" style="color:#d85d5c; font-family:'Quicksand', Arial,sans-serif; font-size:12px; line-height:16px; text-align:center; padding:11px 25px; border-radius:3px;">
                                                                                                        <a href="#" target="_blank" class="link" style="color:#d85d5c; text-decoration:none;"><span class="link" style="color:#d85d5c; text-decoration:none;"><strong></strong></span></a>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </table>
                                                                                            <!-- END Button -->
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <td valign="top" class="m-td" style="font-size:0pt; line-height:0pt; text-align:left;">
                                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                            <tr>
                                                                <td class="img" height="30" bgcolor="#ffffff" style="font-size:0pt; line-height:0pt; text-align:left;">&nbsp;</td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!-- END Section 1 -->
                
                                        
                                    
                                                            
                                <!-- Footer -->
                                <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#313941">
                                    <tr>
                                        <td align="center" valign="top">
                                            <table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell">
                                                <tr>
                                                    <td class="td" style="width:650px; min-width:650px; font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
                                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                            <tr>
                                                                <td class="p-25-15" style="padding: 45px 30px;" bgcolor="#313941">
                                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                        <tr>
                                                                            <th class="column-top" valign="top" width="290" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">
                                                                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                                    
                                                                                    <tr>
                                                                                        <td class="text-footer m-center" style="color:#97999b; font-family:'Quicksand', Arial,sans-serif; font-size:12px; line-height:24px; text-align:left;">
                                                                                            &copy; Kadianga Electrical Ltd. All Rights Reserved.
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </th>
                                                                            <th class="column-top" valign="top" width="10" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;"><div style="font-size:0pt; line-height:0pt;" class="m-br-15"></div>
                </th>
                                                                            <th class="column-top" valign="top" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">
                                                                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                                    <tr>
                                                                                        <td align="right" style="padding-bottom: 15px;">
                                                                                            <table border="0" cellspacing="0" cellpadding="0" class="center">
                                                                                                <tr>
                                                                                                    <td class="img" width="20" style="font-size:0pt; line-height:0pt; text-align:left;"><a href="#" target="_blank"><img src="images/ico_facebook_o.png" width="20" height="20" border="0" alt="" /></a></td>
                                                                                                    <td class="img" width="10" style="font-size:0pt; line-height:0pt; text-align:left;"></td>
                                                                                                    <td class="img" width="20" style="font-size:0pt; line-height:0pt; text-align:left;"><a href="#" target="_blank"><img src="images/ico_twitter_o.png" width="20" height="20" border="0" alt="" /></a></td>
                                                                                                    <td class="img" width="10" style="font-size:0pt; line-height:0pt; text-align:left;"></td>
                                                                                                    <td class="img" width="20" style="font-size:0pt; line-height:0pt; text-align:left;"><a href="#" target="_blank"><img src="images/ico_instagram_o.png" width="20" height="20" border="0" alt="" /></a></td>
                                                                                                    <td class="img" width="10" style="font-size:0pt; line-height:0pt; text-align:left;"></td>
                                                                                                    <td class="img" width="20" style="font-size:0pt; line-height:0pt; text-align:left;"><a href="#" target="_blank"><img src="images/ico_gplus_o.png" width="20" height="20" border="0" alt="" /></a></td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td class="text-footer righten m-center" style="color:#97999b; font-family:'Quicksand', Arial,sans-serif; font-size:12px; line-height:24px; text-align:right;">
                                                                                            <span class="link-2" style="color:#97999b; text-decoration:none;">YMCA, Kisumu, Kenya</span>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </th>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                                <!-- END Footer -->
                
                                <!-- Bottom -->
                                <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#2a3138">
                                    <tr>
                                        <td align="center" valign="top">
                                            <table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell">
                                                <tr>
                                                    <td class="td" style="width:650px; min-width:650px; font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
                                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                            <tr>
                                                                <td class="text-bottom centered plr-15" style="padding: 20px 30px; color:#898989; font-family:'Quicksand', Arial,sans-serif; font-size:12px; line-height:24px; text-align:center;">
                                                                    <br />
                                                                     <a href="#" target="_blank" class="link-3" style="color:#c5c5c5; text-decoration:none;"><span class="link-3" style="color:#c5c5c5; text-decoration:none;"></span></a> <a href="#" target="_blank" class="link-3" style="color:#c5c5c5; text-decoration:none;"><span class="link-3" style="color:#c5c5c5; text-decoration:none;"></span></a> 
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                                <!-- END Bottom -->
                            </td>
                        </tr>
                    </table>
                </body>
                </html>
                
                `;
    
            // NODEMAILER
            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: 'gmail',
                service:'gmail',
                secureConnection: false, // TLS requires secureConnection to be false
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: 'dickensjuma13@gmail.com', // generated ethereal user
                    pass: '0704868023dj' // generated ethereal password
                },
                tls: {
                ciphers:'SSLv3'
                }
            });
    
            // setup email data with unicode symbols
            let mailOptions = {
                from: '"Kadianga Electrical Ltd" orders@kadianga.co.ke', // sender address
                to: `kennedyojwang57@gmail.com`, // list of receivers
                subject: 'Product Request', // Subject line
                html:output // html body
            };
    
            // send mail with defined transport object
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                } else {
                    console.log('Message sent: %s', info.messageId);
                    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
                }
            });
            
            req.flash('success_msg', 'Order sent sucessfully!');
            res.redirect("/");
    });
    
    router.post('/subscribe',(req,res)=>{
    
        // The actual output format of the message, that it is going to be sent by email
        const output = `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
	<!--[if gte mso 9]>
	<xml>
		<o:OfficeDocumentSettings>
		<o:AllowPNG/>
		<o:PixelsPerInch>96</o:PixelsPerInch>
		</o:OfficeDocumentSettings>
	</xml>
	<![endif]-->
	<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="format-detection" content="date=no" />
	<meta name="format-detection" content="address=no" />
	<meta name="format-detection" content="telephone=no" />
	<meta name="x-apple-disable-message-reformatting" />
    <!--[if !mso]><!-->
   	<link href="https://fonts.googleapis.com/css?family=Quicksand:400,400i,700,700i|Barlow+Condensed:400,400i,700,700i" rel="stylesheet"/>
    <!--<![endif]-->
	<title>Email Template</title>
	<!--[if gte mso 9]>
	<style type="text/css" media="all">
		sup { font-size: 100% !important; }
	</style>
	<![endif]-->
	

	<style type="text/css" media="screen">
		/* Linked Styles */
		body { padding:0 !important; margin:0 !important; display:block !important; min-width:100% !important; width:100% !important; background:#ffffff; -webkit-text-size-adjust:none }
		a { color:#d85d5c; text-decoration:none }
		p { padding:0 !important; margin:0 !important } 
		img { -ms-interpolation-mode: bicubic; /* Allow smoother rendering of resized image in Internet Explorer */ }
		.mcnPreviewText { display: none !important; }
		
		/* Mobile styles */
		@media only screen and (max-device-width: 480px), only screen and (max-width: 480px) {
			.mobile-shell { width: 100% !important; min-width: 100% !important; }
			
			.m-center { text-align: center !important; }
			.m-left { text-align: left !important; }
			
			.center { margin: 0 auto !important; }
			.left { margin-right: auto !important; }
			
			.td { width: 100% !important; min-width: 100% !important; }

			.m-br-5 { height: 5px !important; }
			.m-br-10 { height: 10px !important; }
			.m-br-15 { height: 15px !important; }
			.m-br-30 { height: 30px !important; }

			.m-td,
			.m-hide { display: none !important; width: 0 !important; height: 0 !important; font-size: 0 !important; line-height: 0 !important; min-height: 0 !important; }

			.m-block { display: block !important; }

			.fluid-img img { width: 100% !important; max-width: 100% !important; height: auto !important; }

			.column-top,
			.column { float: left !important; width: 100% !important; display: block !important; }

			.content-spacing { width: 15px !important; }

			.m-bg { display: block !important; width: 100% !important; height: auto !important; background-position: center center !important; }

			.h-auto { height: auto !important; }

			.ptb-0 { padding-top: 0px !important; padding-bottom: 0px !important; }
			.ptb-15 { padding-top: 15px !important; padding-bottom: 15px !important; }
			.ptb-25 { padding-top: 25px !important; padding-bottom: 25px !important; }
			.plr-5 { padding-left: 5px !important; padding-right: 5px !important; }
			.plr-15 { padding-left: 15px !important; padding-right: 15px !important; }
			.plr-0 { padding-left: 0px !important; padding-right: 0px !important; }
			.pb-25 { padding-bottom: 25px !important; }
			.pt-25 { padding-top: 25px !important; }

			.p-25-15 { padding: 25px 15px !important; }
		}
	</style>
</head>
<body class="body" style="padding:0 !important; margin:0 !important; display:block !important; min-width:100% !important; width:100% !important; background:#ffffff; -webkit-text-size-adjust:none;">
	<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
		<tr>
			<td align="center" valign="top">
				<!-- Top -->
				<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ededed">
					<tr>
						<td align="center" valign="top">
							<table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell">
								<tr>
									<td class="td" style="width:650px; min-width:650px; font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
										<!-- Wrapper -->
										<table width="100%" border="0" cellspacing="0" cellpadding="0">
											<tr>
												<td class="plr-15" style="padding: 10px 0;">
													<table width="100%" border="0" cellspacing="0" cellpadding="0">
														<tr>
															<th class="column-top" valign="top" width="320" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">
																<table width="100%" border="0" cellspacing="0" cellpadding="0">
																	<tr>
																		<td class="text-top m-center" style="color:#7d7e80; font-family:'Quicksand', Arial,sans-serif; font-size:12px; line-height:24px; text-align:left;">
																			Start your project with quality electrical products & a good deal!
																		</td>
																	</tr>
																</table>
															</th>
															<th class="column-top" valign="top" width="10" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;"><div style="font-size:0pt; line-height:0pt;" class="m-br-5"></div>
</th>
															<th class="column-top" valign="top" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">
																<table width="100%" border="0" cellspacing="0" cellpadding="0">
																	<tr>
																		<td class="text-top righten m-center" style="color:#7d7e80; font-family:'Quicksand', Arial,sans-serif; font-size:12px; line-height:24px; text-align:right;">
																			<a href="#" target="_blank" class="link" style="color:#d85d5c; text-decoration:none;"><span class="link" style="color:#d85d5c; text-decoration:none;"></span></a>
																		</td>
																	</tr>
																</table>
															</th>
														</tr>
													</table>
												</td>
											</tr>
										</table>
										<!-- END Wrapper -->
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
				<!-- END Top -->

				<!-- Header -->
				<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
					<tr>
						<td align="center" valign="top">
							<table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell">
								<tr>
									<td class="td" style="width:650px; min-width:650px; font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
										<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
											<tr>
												<td class="p-25-15" style="padding: 40px 0;">
													<table width="100%" border="0" cellspacing="0" cellpadding="0">
														<tr>
															<th class="column" width="144" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
																<div class="img-center" style="font-size:0pt; line-height:0pt; text-align:center;"><a href="#" target="_blank"><img src="images/kel.png" border="0" width="144" height="80" alt="" /></a></div>
															</th>
															<th class="column" width="20" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;"><div style="font-size:0pt; line-height:0pt;" class="m-br-10"></div>
</th>
															<th class="column" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
																<table width="100%" border="0" cellspacing="0" cellpadding="0">
																	<tr>
																		<td class="text-nav righten m-center" style="color:#1d2025; font-family:'Barlow Condensed', Arial,sans-serif; font-size:16px; line-height:26px; text-align:right;">
																			<a href="#" target="_blank" class="link-4" style="color:#1d2025; text-decoration:none;"><span class="link-4" style="color:#1d2025; text-decoration:none;">CATEGORIES</span></a> &nbsp;&nbsp;|&nbsp;&nbsp; <a href="#" target="_blank" class="link-4" style="color:#1d2025; text-decoration:none;"><span class="link-4" style="color:#1d2025; text-decoration:none;">PRODUCTS</span></a> &nbsp;&nbsp;|&nbsp;&nbsp; <a href="#" target="_blank" class="link-4" style="color:#1d2025; text-decoration:none;"><span class="link-4" style="color:#1d2025; text-decoration:none;">CONTACT US</span></a>
																		</td>
																	</tr>
																</table>
															</th>
														</tr>
													</table>
												</td>
											</tr>
										</table>
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
				<!-- END Header -->

				<!-- Main -->
				<table width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td>
							<!-- Section 1 -->
							<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#313941">
								<tr>
									<td valign="top" class="m-td" style="font-size:0pt; line-height:0pt; text-align:left;">
										<table width="100%" border="0" cellspacing="0" cellpadding="0">
											<tr>
												<td class="img" height="30" bgcolor="#ffffff" style="font-size:0pt; line-height:0pt; text-align:left;">&nbsp;</td>
											</tr>
										</table>
									</td>
									<td align="center" valign="top" width="650" class="mobile-shell">
										<table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell">
											<tr>
												<td class="td" style="width:650px; min-width:650px; font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
													<table width="100%" border="0" cellspacing="0" cellpadding="0">
														<tr>
															<td class="fluid-img" style="font-size:0pt; line-height:0pt; text-align:left;"><a href="#" target="_blank"><img src="images/bg_2.png" width="650" height="300" border="0" alt="" /></a></td>
														</tr>
														<tr>
															<td class="h1-1-white centered p-25-15" style="padding: 30px; color:#ffffff; font-family:'Barlow Condensed', Arial,sans-serif; font-size:44px; line-height:52px; text-align:center;" bgcolor="#d85d5c">
																THANK YOU FOR SUBSCRIBING TO OUR NEWLETTER
															</td>
														</tr>
														<tr>
															<td class="p-25-15" style="padding: 30px 30px 50px 30px;">
																<table width="100%" border="0" cellspacing="0" cellpadding="0">
																	<tr>
																		<td class="text-4-white centered" style="padding-bottom: 30px; color:#ffffff; font-family:'Quicksand', Arial,sans-serif; font-size:22px; line-height:34px; text-align:center;">
																			ENJOY A NEW CUSTOMER DISCOUNT! <strong>& REFERRAL </strong> 
																		</td>
																	</tr>
																	<tr>
																		<td align="center">
																			<!-- Button -->
																			<table border="0" cellspacing="0" cellpadding="0">
																				<tr>
																					<td class="text-btn-red" bgcolor="#ffffff" style="color:#d85d5c; font-family:'Quicksand', Arial,sans-serif; font-size:12px; line-height:16px; text-align:center; padding:11px 25px; border-radius:3px;">
																						<a href="#" target="_blank" class="link" style="color:#d85d5c; text-decoration:none;"><span class="link" style="color:#d85d5c; text-decoration:none;"><strong>SHOP NOW</strong></span></a>
																					</td>
																				</tr>
																			</table>
																			<!-- END Button -->
																		</td>
																	</tr>
																</table>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</table>
									</td>
									<td valign="top" class="m-td" style="font-size:0pt; line-height:0pt; text-align:left;">
										<table width="100%" border="0" cellspacing="0" cellpadding="0">
											<tr>
												<td class="img" height="30" bgcolor="#ffffff" style="font-size:0pt; line-height:0pt; text-align:left;">&nbsp;</td>
											</tr>
										</table>
									</td>
								</tr>
							</table>
							<!-- END Section 1 -->

						
					
											
				<!-- Footer -->
				<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#313941">
					<tr>
						<td align="center" valign="top">
							<table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell">
								<tr>
									<td class="td" style="width:650px; min-width:650px; font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
										<table width="100%" border="0" cellspacing="0" cellpadding="0">
											<tr>
												<td class="p-25-15" style="padding: 45px 30px;" bgcolor="#313941">
													<table width="100%" border="0" cellspacing="0" cellpadding="0">
														<tr>
															<th class="column-top" valign="top" width="290" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">
																<table width="100%" border="0" cellspacing="0" cellpadding="0">
																	<tr>
																		<td class="img m-center" style="padding-bottom: 15px; font-size:0pt; line-height:0pt; text-align:left;"><a href="#" target="_blank"><img src="images/kel.png" width="131" height="18" border="0" alt="" /></a></td>
																	</tr>
																	<tr>
																		<td class="text-footer m-center" style="color:#97999b; font-family:'Quicksand', Arial,sans-serif; font-size:12px; line-height:24px; text-align:left;">
																			&copy; Kadianga Electrical Ltd. All Rights Reserved.
																		</td>
																	</tr>
																</table>
															</th>
															<th class="column-top" valign="top" width="10" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;"><div style="font-size:0pt; line-height:0pt;" class="m-br-15"></div>
</th>
															<th class="column-top" valign="top" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">
																<table width="100%" border="0" cellspacing="0" cellpadding="0">
																	<tr>
																		<td align="right" style="padding-bottom: 15px;">
																			<table border="0" cellspacing="0" cellpadding="0" class="center">
																				<tr>
																					<td class="img" width="20" style="font-size:0pt; line-height:0pt; text-align:left;"><a href="#" target="_blank"><img src="images/ico_facebook_o.png" width="20" height="20" border="0" alt="" /></a></td>
																					<td class="img" width="10" style="font-size:0pt; line-height:0pt; text-align:left;"></td>
																					<td class="img" width="20" style="font-size:0pt; line-height:0pt; text-align:left;"><a href="#" target="_blank"><img src="images/ico_twitter_o.png" width="20" height="20" border="0" alt="" /></a></td>
																					<td class="img" width="10" style="font-size:0pt; line-height:0pt; text-align:left;"></td>
																					<td class="img" width="20" style="font-size:0pt; line-height:0pt; text-align:left;"><a href="#" target="_blank"><img src="images/ico_instagram_o.png" width="20" height="20" border="0" alt="" /></a></td>
																					<td class="img" width="10" style="font-size:0pt; line-height:0pt; text-align:left;"></td>
																					<td class="img" width="20" style="font-size:0pt; line-height:0pt; text-align:left;"><a href="#" target="_blank"><img src="images/ico_gplus_o.png" width="20" height="20" border="0" alt="" /></a></td>
																				</tr>
																			</table>
																		</td>
																	</tr>
																	<tr>
																		<td class="text-footer righten m-center" style="color:#97999b; font-family:'Quicksand', Arial,sans-serif; font-size:12px; line-height:24px; text-align:right;">
																			<span class="link-2" style="color:#97999b; text-decoration:none;">YMCA, Kisumu, Kenya</span>
																		</td>
																	</tr>
																</table>
															</th>
														</tr>
													</table>
												</td>
											</tr>
										</table>
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
				<!-- END Footer -->

				<!-- Bottom -->
				<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#2a3138">
					<tr>
						<td align="center" valign="top">
							<table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell">
								<tr>
									<td class="td" style="width:650px; min-width:650px; font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
										<table width="100%" border="0" cellspacing="0" cellpadding="0">
											<tr>
												<td class="text-bottom centered plr-15" style="padding: 20px 30px; color:#898989; font-family:'Quicksand', Arial,sans-serif; font-size:12px; line-height:24px; text-align:center;">
													Want to change how you receive these emails?<br />
													You can <a href="#" target="_blank" class="link-3" style="color:#c5c5c5; text-decoration:none;"><span class="link-3" style="color:#c5c5c5; text-decoration:none;">update your preferences</span></a> or <a href="#" target="_blank" class="link-3" style="color:#c5c5c5; text-decoration:none;"><span class="link-3" style="color:#c5c5c5; text-decoration:none;">unsubscribe</span></a> from this list.
												</td>
											</tr>
										</table>
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
				<!-- END Bottom -->
			</td>
		</tr>
	</table>
</body>
</html>

        `;

    // NODEMAILER
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'gmail',
        service:'gmail',
        secureConnection: false, // TLS requires secureConnection to be false
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'dickensjuma13@gmail.com', // generated ethereal user
            pass: '0704868023dj' // generated ethereal password
        },
        tls: {
        ciphers:'SSLv3'
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Kadianga Electrical Ltd" orders@kadianga.co.ke', // sender address
        to: `kennedyojwang57@gmail.com,${req.body.email}`, // list of receivers
        subject: 'Subscription Request',
        html:output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        } else {
            console.log('Message sent: %s', info.messageId);
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        }
    });
    
    req.flash('success_msg', 'You subscribed sucessfully!');
    res.redirect("/");
});
 
        
   
router.get('/products', (req, res) =>
    res.render('products'));

 
module.exports = router;