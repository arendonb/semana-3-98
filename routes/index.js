const router = require('express').Router();
const apiRouterUser = require('./api/users.js');

router.use('/auth', apiRouterUser); //.com/api/user



// .com/api/user/listar
// .com/api/user/registrar
// .com/api/user/login

// .com/api/film
// .com/api/film/listar
// .com/api/film/registrar
// .com/api/film/login

module.exports = router;