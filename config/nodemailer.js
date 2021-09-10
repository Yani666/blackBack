const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.SGUSER,
        pass: process.env.SGPASS
    }
})

exports.sendEmail = (email, name) =>{
    return transport.sendEmail({
        from: '"Yani" <renis111@hotmail.com>',
        to: [email],
        subject: 'Gracias por la compra',
        html: `
        <h1>Gracias por tu compra</h1>
        
        `
    })
}