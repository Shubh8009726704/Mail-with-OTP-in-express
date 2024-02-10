// const { generate } = require('otp-generator');

nodeMailer = require('nodemailer');
otp = require('./index.js');

sendEmail = async(mail)=>{
    
//service provider , credentials,handshaking
    transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port : 465,
        secure:true,
        auth: {
            user: 'shbh8055@gmail.com',
            pass: 'tson rzpp aozt jwtv'
        }
    })

//mail object
mail = {
    from: 'shbh8055@gmail',
    to: 'pay262407@gmail.com',
    subject: 'OTP',
    text: `Your OTP is ${generateOTP()}`
}

//send mail 

transporter.sendMail(mail, (err, data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})

}
sendEmail()
