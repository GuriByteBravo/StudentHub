const sendGrid = require('@sendgrid/mail')
let sendGridApiKey = process.env.SENDGRID_API_KEY
sendGrid.setApiKey(sendGridApiKey)
module.exports = {
    async sendMail (msg){
        try{
         const status=    await sendGrid.send(msg)
            console.log("msg send successfully---",status)
        }catch(err){
            // console.log(err.response.body.errors)
            console.log(err)
        }
    }
}