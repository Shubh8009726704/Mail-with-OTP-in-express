express = require('express')
otpgen = require('otp-generator')

app = express()

generateOTP = ()=>{
    otp = otpgen.generate(6,{digits:true,lowerCaseAlphabets:false});
    // console.log(otp)
    return otp
}

generateOTP()

// app.get('/', (req, res) => {
//     res.send(`<h1>Your OTP is : ${generateOTP()} </h1>`)
// })  

app.listen(3000, () => console.log('App listening on port 3000!'))

// module.exports = generateOTP()