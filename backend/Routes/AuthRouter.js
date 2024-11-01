const { signup, login } = require('../Controllers/AuthController');
const { signupValidation, loginValidations } = require('../Middleware/AuthValidation');

const router = require('express').Router();

router.post('/login', loginValidations, login);
router.post('/signup', signupValidation, signup);

module.exports = router;