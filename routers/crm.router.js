const router = require('express').Router();
const Crm = require('./../controllers/crm.controller');
router.route('/crm').post(Crm.addCrm);
router.post('/crm/login', Crm.login);
router.post('/crm/forgotpass', Crm.forgotPassword);
router.patch('/crm/forgotpass/:id', Crm.updatePassword);
module.exports = router;