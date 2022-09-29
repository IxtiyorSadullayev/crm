const GeneretePassword = require('../helpers/generatePassword');
const GenerateToken = require('../helpers/generateToken');
const sendMessageEmail = require('../helpers/sendEmail');

const SendMessage = require('../helpers/sendMessageUser');
const STUDENT = require('./../models/student');

exports.addStudent = async (req, res, next) => {
  try {
    const crm = req.crm;
    const { firstName, lastName, email,
      password, dateBorn, phone, userName } = req.body;

    const condidate = await STUDENT.findOne({
      $or: [
        { userName: userName }, { firstName: firstName },
        { lastName: lastName }, { email: email },
        { password: password }, { phone: phone },
        { dateBorn: dateBorn },
      ]
    });
    // console.log(condidate);
    if (condidate) {
      return SendMessage(res, 400, 'This user already exist')
    }

    const saltpass = await GeneretePassword.GeneretePassword(password);
    const newStudent = await STUDENT({
      crm_id: crm._id,
      userName: userName,
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      password: saltpass,
      dateBorn: dateBorn,
    });
    await newStudent.save();
    SendMessage(res, 200, newStudent)
  } catch (e) {
    SendMessage(res, 500, `Internal server error`)
  }
}

exports.getAllStudents = async (req, res, next) => {
  try {
    const crm = req.crm;
    const students = await STUDENT.find({ crm_id: crm._id });
    if (!students) {
      return SendMessage(res, 404, 'No students have joined yet')
    }
    SendMessage(res, 200, students)
  } catch (e) {
    SendMessage(res, 500, 'Internal server error')
  }
}

exports.removeStudent = async (req, res, next) => {
  try {
    const _id = req.params.id;
    const student = await STUDENT.findByIdAndRemove({ _id });
    if (!student) {
      return SendMessage(res, 404, 'Student is not found');
    }

    SendMessage(res, 200, 'Student is removed')
  } catch (e) {
    SendMessage(res, 500, `Internal Server Error`)
  }
}

exports.getStudentById = async (req, res, next) => {
  try {
    const _id = req.params.id;
    const student = await STUDENT.findById({ _id });
    if (!student) {
      return SendMessage(res, 404, 'Studen not found')
    }
    SendMessage(res, 200, student)
  } catch (e) {
    SendMessage(res, 500, 'Internal Server Error')
  }
}

exports.updateStudent = async (req, res, next) => {
  try {
    const _id = req.params.id;
    const student = await STUDENT.findByIdAndUpdate(_id, req.body);

    if (!student) {
      return SendMessage(res, 404, 'Student not found')
    }
    SendMessage(res, 200, student)

  } catch (e) {
    SendMessage(res, 500, 'Internal Server Error');
  }
}

