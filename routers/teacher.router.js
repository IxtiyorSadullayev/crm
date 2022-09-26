const router = require('express').Router();
const Teacher = require('./../controllers/teacher.controller')
const CrmMiddleware = require('./../helpers/crm.middleware')
//     /teacher/
router.route('/').post( Teacher.addTeacher).get(CrmMiddleware,Teacher.getAllTeachers);
router.route('/:id').patch().delete();


module.exports = router; 