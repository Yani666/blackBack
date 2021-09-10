const nodemailer = require("nodemailer")
const smtp = require ("nodemailer-smtp-transport")


exports.transporter = nodemailer.createTransport(smtp({
    service:"Gmail",
    auth:{
      user:process.env.EMAIL,
      pass:process.env.PASS
    }
  }))
  