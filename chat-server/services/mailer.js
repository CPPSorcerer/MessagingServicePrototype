const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({

  service: 'gmail',
  auth:{
    user: 'kaleanshu@iitgn.ac.in',
    pass: 'jqwi fdhi klxs lcco',
  },
  port:587,
  secure: false,
  debug: true,
})

const sendEMail = async ({
  to,
  subject,
  html,
  attachments,
  text,
}) => {
  try {
    const mailOptions = {
      to: to, // Change to your recipient
      from: 'kaleanshu@iitgn.ac.in', // Change to your verified sender
      subject: subject,
      html: html,
      // text: text,
      attachments,

    };
    
    return transporter.sendMail(mailOptions);
  } catch (error) {
    console.log(error);
  }
};

exports.sendEmail = async (args) => {
  if (!process.env.NODE_ENV === "development") {
    return Promise.resolve();
  } else {
    return sendEMail(args);
  }
};