async function register(req, res) {
  try {
    const user = {
      id: '1234',
      email: 'user@example.com',
      password: 'password'
    };
    return res.status(200).json(user);
  } catch (error) {
    const message = error.message;
    return res.status(500).json({
      message: message,
      error: error
    });
  }
}

async function login(req, res) {
  try {
    const user = {
      id: '1234',
      email: 'user@example.com',
      password: 'password'
    };
    return res.status(200).json(user);
  } catch (error) {
    const message = error.message;
    return res.status(500).json({
      message: message,
      error: error
    });
  }
}

exports.register = register;
exports.login = login;
