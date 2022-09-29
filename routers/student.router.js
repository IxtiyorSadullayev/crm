const router = require('express').Router();
const Student = require('./../controllers/student.controller')
const CrmMiddleware = require('./../helpers/crm.middleware')
//     /teacher/
router.route('/').post(Student.addStudent).get(Student.getAllStudents);
router.route('/:id').patch(Student.updateStudent).delete(Student.removeStudent);


module.exports = router; 