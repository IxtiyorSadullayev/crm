const router = require('express').Router();
const Crm = require('./../controllers/crm.controller');
router.route('/crm').post(Crm.addCrm);
router.post('/crm/login', Crm.login);
router.post('/crm/forgotpass', Crm.forgotPassword);
router.patch('/crm/forgotpass/:id', Crm.updatePassword);
// super user apis
router.get('/crm/superuser', Crm.getAllCRM);
router.delete('/crm/superuser/:id', Crm.removeCRM);
router.patch('/crm/superuser/:id', Crm.updateCRM);
module.exports = router;
