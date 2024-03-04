const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const path = require("path");

const SendTemplate = async(from,psw,to,subject,customViewsPath,body,context,callback) => {
    
    const transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: from,
            pass: psw
        }
    });
    
    const viewsPath = path.resolve(customViewsPath);

    const options = {
        viewEngine: {
            extName: '.hbs',
            layoutsDir: viewsPath,
            defaultLayout: false,
            partialsDir: viewsPath,
        },
        viewPath: viewsPath,
        extName: '.hbs'
    };

    transport.use('compile', hbs(options));

    const mailOptions = {
        from:from,
        to:to,
        subject:subject,
        template:body,
        context:context
    }

   transport.sendMail(mailOptions,(err) => {
        if(err){
            callback(err,false);
            return;
        }
        
       callback(undefined,true);
    });
}

module.exports = SendTemplate;