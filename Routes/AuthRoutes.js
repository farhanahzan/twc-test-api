const { register, login } = require('../Controllers/AuthControllers');
const {
 
} = require('../Controllers/ContactControllers');
const { checkUser } = require('../Middlewares/AuthMiddleware');



const router = require('express').Router();

router.post('/', checkUser);
router.post('/Register', register, checkUser);
router.post('/Login', login, checkUser);


module.exports = router;
