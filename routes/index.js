var express = require('express');
var router = express.Router();
const controller = require("../controllers/index");

router.get('/login', controller.login);
module.exports = router;