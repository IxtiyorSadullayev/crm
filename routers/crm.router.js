const router = require('express').Router();
const Crm = require('./../controllers/crm.controller');
router.route('/crm').get(Crm.addCrm)

module.exports = router;