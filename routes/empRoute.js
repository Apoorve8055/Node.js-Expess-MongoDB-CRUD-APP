const express = require('express');
var router = express.Router()
var ctrl = require('../Controller/empController');

router.get('/',ctrl.index);

module.exports = router;