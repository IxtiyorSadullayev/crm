const SCIENCE = require("../models/science");
const TEACHER = require('../models/teacher')
const STUDENT = require('../models/student')
const SendMessage = require('../helpers/sendMessageUser');


exports.addScience = async (req, res, next) => {
  try {
    const { scienceName } = req.body;
    const crm = req.crm;
    const science = await SCIENCE.findOne({ scienceName });
    if (science) {
      return SendMessage(res, 400, 'This scince already exist')
    }

    const newScience = await new SCIENCE({ crm_id: crm._id, scienceName });
    await newScience.save();
    SendMessage(res, 200, newScience)

  } catch (e) {
    SendMessage(res, 500, 'Internal Server Error')
  }
}

exports.getAllSciences = async (req, res, next) => {
  try {
    const crm = req.crm;
    const sciences = await SCIENCE.find({ crm_id: crm._id });
    const teachers = await TEACHER.find({crm_id: crm._id});
    let science = sciences.map(data =>{
      return {
        _id: data._id,
        scienceName: data.scienceName,
        teachers: teachers.filter(x => {
          return x.science==data._id.toString()
        }).length,
      }
    })
    if (!sciences || sciences.length === 0) {
      return SendMessage(res, 404, "There is no science yet")
    }

    SendMessage(res, 200, science)
  } catch(e){
    SendMessage(res, 500, 'Internal Server Error')
  }
}

exports.updateScince = async (req, res, next) => {
  try {
    const _id = req.params.id;
    const science = new SCIENCE.findByIdAndUpdate(_id, req.body);
    if (!science) {
      return SendMessage(res, 404, 'Science not found');
    }

    SendMessage(res, 200, 'Updated')

  } catch (e) {
    SendMessage(res, 500, 'Internal Server Error')
  }
}

exports.removeScience = async (req, res, next) => {
  try {
    const _id = req.params.id;
    const science = await SCIENCE.findByIdAndRemove(_id);
    if (!science) {
      return SendMessage(res, 404, 'Science not found');
    }

    SendMessage(res, 200, 'Data deleted')
  } catch (e) {
    SendMessage(res, 500, 'Internal Server Error')
  }
}