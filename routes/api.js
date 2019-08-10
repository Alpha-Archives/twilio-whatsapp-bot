const express = require("express");

const authController = require("../controllers/api/auth");
const userController = require("../controllers/api/user");

const router = express.Router();

router.get('/', function (req, res) {
  const message = {
    name: 'Express Starter',
    license: 'Apache License',
    keywords: ['express', 'boilerplate', 'scaffold'],
    engines: {
      "node": "~6.10.2",
      'npm': ">=8.6.0"
    }
  };
  return res.status(200).json(message);
});

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/user', userController.getAuthUser);

module.exports = router;
