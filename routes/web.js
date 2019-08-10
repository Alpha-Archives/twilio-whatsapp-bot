const express = require("express");

const registerController = require("../controllers/register");
const loginController = require("../controllers/login");
const homeController = require("../controllers/home");

const router = express.Router();

// @route GET /
router.get('/', homeController.welcome);

// @router GET /home
router.get('/home', homeController.show);

// @route GET /welcome
router.get('/welcome', homeController.index);

// @route GET /login
router.get('/login', loginController.showLoginForm);

// @route GET /login
router.post('/login', loginController.login);

// @route GET /register
router.get('/register', registerController.showRegistrationForm);

// @route GET /register
router.post('/register', registerController.registerUser);


module.exports = router;
