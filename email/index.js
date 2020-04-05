const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
// const cors = require("cors");
const creds = require("./config.js");

let transport = {
  host: "stmp.gmail.com",
  port: 587,
  auth: {
    user: creds.USER,
    pass: creds.PASS,
  },
};

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is reading to take messages");
  }
});

router.post("/send", (req, res, next) => {
  let name = req.body.name;
  let email = req.body.email;
  let message = req.body.message;
  let content = `name: ${name} \n email: ${email} \n message: ${message}`;

  let mail = {
    from: name,
    to: "colinbazzano@gmail.com",
    subject: "New Message from Contact Form",
    text: content,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });
    }
  });
});

module.exports = router;

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use("/", router);
// app.listen(3002)
