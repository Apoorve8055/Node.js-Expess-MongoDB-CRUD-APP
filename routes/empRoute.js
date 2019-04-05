const express = require('express');
var router = express.Router()
var ctrl = require('../Controller/empController');

router.get('/',ctrl.index);
router.post('/emp',ctrl.reg);
module.exports = router;