const nodemailer = require("nodemailer");
const email_model = require('../Models/Mail_model');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    user: process.env.REACT_MAIL_USER,  // Use environment variables for better security
    pass: process.env.REACT_MAIL_PASS   // Use environment variables for better security
  },
});



const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

exports.transporter_email = async (req, res) => {
  try {
    const recipientEmail = req.body.email;
    if (!recipientEmail) {
      return res.status(400).json("Recipient email is required");
    }

    if (!validateEmail(recipientEmail)) {
      return res.status(400).json("Invalid email format");
    }

    const recipient = new email_model({ email: recipientEmail });
    const save_mail = await recipient.save();

    
    
    const mailOptions = {
      from: process.env.REACT_MAIL_USER,
      to: recipientEmail,
      subject: "We Saw You Looking",
      text: "Your vegan journey matters to us, and we are here to make it easy and enjoyable for you. Each product on our website has been thoughtfully chosen to support your compassionate living while nourishing your body and soul.",
    };

    console.log("Sending email to:", mailOptions); 

    transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        res.status(400).json(`Failed to send email: ${err.message}`);
        console.log("Error:", err);
      } else {
        res.status(200).json(`Email sent: ${JSON.stringify(data)}`);
        console.log("Email sent:", data);
      }
    });
  } catch (err) {
    console.log("Something went wrong:", err);
    res.status(500).json("Something went wrong");
  }
}
