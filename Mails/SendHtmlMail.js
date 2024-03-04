const nodemailer = require('nodemailer');
const SendHtmlMail = async(from,psw,to,subject,body,callback) => {
    const transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: from,
            pass: psw
        }
    });


    const mailOptions = {
        from:from,
        to:to,
        subject:subject,
        html:body
    }

   transport.sendMail(mailOptions,(err) => {
        if(err){
            callback(err,false);
            return;
        }
        
       callback(undefined,true);
    });
}

module.exports = SendHtmlMail;