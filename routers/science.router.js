const router = require('express').Router();
const Science = require('./../controllers/science.controller')
const CrmMiddleware = require('./../helpers/crm.middleware')
//     /Science/
router.route('/').post(CrmMiddleware, Science.addScience).get(CrmMiddleware, Science.getSciences);
router.route('/:id').patch(Science.updateScince).delete(Science.removeScience);


module.exports = router;