const express = require('express');
var router = express.Router()
var ctrl = require('../Controller/empController');

router.get('/',ctrl.index);
router.post('/emp',ctrl.reg);
router.get('/view',ctrl.viewdata);
router.get('/delete/:id',ctrl.delete);
router.post('/update/:id',ctrl.update);
router.post('/search',ctrl.search);
module.exports = router;