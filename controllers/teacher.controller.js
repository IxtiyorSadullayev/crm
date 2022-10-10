const GeneretePassword = require("../helpers/generatePassword");
const SendMessage = require("../helpers/sendMessageUser");
const TEACHER = require("./../models/teacher");

exports.addTeacher = async (req, res, next) => {
    try {
        const crm = req.crm;
        const { firstName, lastName, email, username, password, phone, science, } = req.body;
        const condidate = await TEACHER.findOne({
            $or:
                [
                    { email: email }, { username: username },
                    { phone: phone },
                ]
        });
        if (condidate) {
          return SendMessage(res, 400, `Ooops , This Teacher already exist`)
        }
    const saltpass = await GeneretePassword.GeneretePassword(password);
    const newTeacher = await TEACHER.create({crm_id:crm._id, firstName: firstName, lastName:lastName, email: email, username:username, password:saltpass, phone:phone, science:science})
    SendMessage(res, 201, newTeacher);
  } catch (e) {
    SendMessage(res, 500, "Internal Server Error.");
  }
}

exports.getAllTeachers = async (req, res, next) => {
  try {
    const crm = req.crm;
    const teachers = await TEACHER.find({ crm_id: crm._id }).populate('science');
    if(!teachers || teachers.length===0){
      return SendMessage(res, 404, 'Teacher not found')
    }
    SendMessage(res, 200, teachers);
  } catch (e) {
    SendMessage(res, 500, "Internal Server Error. "+e.message);
  }
};

exports.removeTeacher = async (req, res, next) => {
  try {
    const _id = req.params.id;
    const user = await TEACHER.findByIdAndRemove(_id);
    if (!user) {
      return SendMessage(res, 404, "Teacher is not defined");
    }
    SendMessage(res, 200, "Teacher is removed");
  } catch (e) {
    SendMessage(res, 500, "Internal Server Error.");
  }
};

exports.getTeacherById = async (req, res, next) => {
  try {
    const _id = req.params.id;
    const teacher = await TEACHER.findById(_id);
    SendMessage(res, 200, teacher);
  } catch (e) {
    SendMessage(res, 500, `Internal Server Error`);
  }
};

exports.updateTeacher = async (req, res, next) => {
  try {
    const _id = req.params.id;
    const teacher = await TEACHER.findByIdAndUpdate(_id, req.body);
    if (!teacher) {
      return SendMessage(res, 404, `Teacher not found`);
    }
    SendMessage(res, 200, "Teacher is updated");
  } catch (e) {
    SendMessage(res, 500, `Internal Server Error`);
  }
}
