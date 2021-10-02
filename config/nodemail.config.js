const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.SENDER_PASS,
    },
});

module.exports.sendVerificationMail = (name, email, verificationCode) => {
    transport.sendMail({
        from: process.env.SENDER_EMAIL,
        to: email,
        subject: "Please confirm your account",
        html: `<h1>Email Confirmation</h1>
          <h2>Hello ${name}</h2>
          <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
          <a href=http://localhost:3000/users/confirm/${verificationCode}> Click here</a>
          </div>`,
    }).catch(err => console.log(err));
};