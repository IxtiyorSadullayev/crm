const router = require('express').Router();
const Crm = require('./../controllers/crm.controller');
router.route('/crm').post(Crm.addCrm);
router.post('/crm/login', Crm.login);
module.exports = router;