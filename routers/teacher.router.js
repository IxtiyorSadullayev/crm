const router = require('express').Router();
const Teacher = require('./../controllers/teacher.controller')
const CrmMiddleware = require('./../helpers/crm.middleware')
//     /teacher/
router.route('/').post(CrmMiddleware,  Teacher.addTeacher).get(CrmMiddleware,Teacher.getAllTeachers);
router.route('/:id').patch(Teacher.updateTeacher).delete(Teacher.removeTeacher);


module.exports = router; 