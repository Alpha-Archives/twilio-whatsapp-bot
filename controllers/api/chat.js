const MessagingResponse = require('twilio').twiml.MessagingResponse;



async function reply(req, res, next) {
  const response = new MessagingResponse();
  const msg = response.message();
  res.writeHead(200, { 'Content-Type': 'text/xml' });
  try {

    if (req.body.Body == 'hello') {
      msg.body('Hi!');
    } else if (req.body.Body == 'bye') {
      msg.body('Goodbye');
    } else {
      msg.body('No Body param match,  in the request to your server.');
    }
    res.send(msg.toString())
  } catch (error) {

    msg.body('Error!');
    res.send(response.toString())
    // next(error);
  }
}



async function replyMedia(req, res, next) {
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
