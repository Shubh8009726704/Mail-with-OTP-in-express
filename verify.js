const { generate } = require('otp-generator');

express = require('express')
otp = require('./index.js');
mailer = require('./mailer.js')
app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/verify', (req, res) => {
    res.sendFile('index.html')
})

app.post('/send', async(req, res) => {
    mail = 'shbh8055@mail.com';
    OTP = generateOTP()
    await sendEmail(mail,OTP)
    res.send("Email Sent Successfully")
})


app.post('/verify', async(req, res) => {
    userOTP = req.body.otp
    if(userOTP == OTP){
        res.send("OTP Verified")
    }else{
        res.send("Invalid OTP")
    }
})