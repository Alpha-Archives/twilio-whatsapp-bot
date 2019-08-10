async function getAuthUser(req, res) {
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
      error: error,
      message: message
    });
  }
}

async function getUsers(req, res) {
  try {
    return res.status(200).json({
      id: '1234',
      email: 'user@example.com',
      password: 'password'
    });
  } catch (error) {
    const message = error.message;
    return res.status(500).json({
      error: error,
      message: message
    });
  }
}

async function findUser(req, res) {
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
      error: error,
      message: message
    });
  }
}

exports.getAuthUser = getAuthUser;
exports.getUsers = getUsers;
exports.findUser = findUser;
