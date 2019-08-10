const MessagingResponse = require('twilio').twiml.MessagingResponse;



async function reply(req, res, next) {


  try {
    const response = new MessagingResponse();
    const message = response.message();
    message.body('Hello World!');
    // response.redirect('https://demo.twilio.com/welcome/sms/');

    res.set('Content-Type', 'text/xml');
    res.send(response.toString())
  } catch (error) {

    next(error);
  }
}

exports.reply = reply;
