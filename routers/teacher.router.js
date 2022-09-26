const router = require('express').Router();
const Teacher = require('./../controllers/teacher.controller')
const CrmMiddleware = require('./../helpers/crm.middleware')
//     /teacher/
router.route('/').post().get(CrmMiddleware,Teacher.getTeachers);
router.route('/:id').patch().delete();


module.exports = router; 