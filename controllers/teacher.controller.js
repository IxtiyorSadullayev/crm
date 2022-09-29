const GeneretePassword = require("../helpers/generatePassword");
const GenerateToken = require("../helpers/generateToken");
const sendMessageEmail = require("../helpers/sendEmail");
const SendMessage = require("../helpers/sendMessageUser");
const TEACHER = require("./../models/teacher");

exports.addTeacher = async (req, res, next) => {
  try {
    const crm = req.crm;

    const { firstName, lastName, email, username, password, phone, science } =
      req.body;

    const condidate = await TEACHER.findOne({
      $or: [
        { firstName: firstName },
        { lastName: lastName },
        { email: email },
        { username: username },
        { password: password },
        { phone: phone },
      ],
    });
    if (condidate) {
      return SendMessage(res, 400, `Ooops, 🙈 This Teacher already exist`);
//     try {
//         const crm = req.crm;
//         const { firstName, lastName, email, username, password, phone, science, } = req.body;
//         const condidate = await TEACHER.findOne({
//             $or:
//                 [
//                     { firstName: firstName }, { lastName: lastName },
//                     { email: email }, { username: username },
//                     { password: password }, { phone: phone },
//                 ]
//         });
//         console.log(condidate)
//         if (condidate) {
//             return SendMessage(res, 400, `Ooops , This Teacher already exist`)
//         }
//         const saltpass = await GeneretePassword.GeneretePassword(password);
//         const newTeacher = await TEACHER({
//             crm_id: crm._id,
//             firstName: firstName, lastName: lastName,
//             email: email, username: username, phone: phone,
//             password: saltpass,  science: science
//         });
//         await newTeacher.save();
//         SendMessage(res, 200, newTeacher)
//     } catch (e) {
//         SendMessage(res, 500, 'Internal Server Error.')
// >>>>>>> origin
    }
    const saltpass = await GeneretePassword.GeneretePassword(password);
    const newTeacher = await TEACHER({
      crm_id: crm._id,
      firstName: firstName,
      lastName: lastName,
      email: email,
      username: username,
      phone: phone,
      password: saltpass,
      science: science,
    });
    await newTeacher.save();
    SendMessage(res, 200, newTeacher);
  } catch (e) {
    SendMessage(res, 500, "Internal Server Error.");
  }
};

exports.getAllTeachers = async (req, res, next) => {
  try {
    const crm = req.crm;
    const teachers = await TEACHER.find({ crm_id: crm._id });
    SendMessage(res, 200, teachers);
  } catch (e) {
    SendMessage(res, 500, "Internal Server Error.");
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
};
