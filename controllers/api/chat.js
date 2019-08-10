const MessagingResponse = require('twilio').twiml.MessagingResponse;



async function reply(req, res, next) {


  try {
    const response = new MessagingResponse();
    const message = response.message();
    message.body('Hello World! ' + req.body);
    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.send(response.toString())
  } catch (error) {

    next(error);
  }
}



async function reply(req, res, next) {


  try {
    const response = new MessagingResponse();
    const message = response.message();

    message.body('Hello World! ' + req.body.toString());
    // message.media('https://farm8.staticflickr.com/7090/6941316406_80b4d6d50e_z_d.jpg');

    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.send(response.toString())
  } catch (error) {

    next(error);
  }
}

exports.reply = reply;
