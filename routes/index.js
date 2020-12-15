const router = require('express').Router();
const apiRouterUser = require('./api/users.js');

router.use('/usuario', apiRouterUser); //.com/api/user

module.exports = router;