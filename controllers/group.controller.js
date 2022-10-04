const GROUP = require("../models/group")
const SendMessage = require('../helpers/sendMessageUser');

exports.addGroup = async(req, res, next) => {
  try{
    const crm = req.crm;
    const {groupName} = req.body;
    const group = await GROUP.findOne({groupName});
    if(group){
      return SendMessage(res, 400, 'This group already exist')
    }

    const newGroup = await new GROUP({ crm_id: crm._id, groupName });
    await newGroup.save();
    SendMessage(res, 200, newGroup)
  } catch(e){
    SendMessage(res, 500, 'Interval Server Error')
  }
}

exports.getAllGroups = async (req, res, next) => {
  try{
    const crm = req.crm;
    const groups = await GROUP.find({crm_id: crm._id});
    if(!groups || groups.length === 0){
      return SendMessage(res, 404, 'There is no group yet')
    }

    SendMessage(res, 200, groups);
  } catch(e){
    SendMessage(res, 500, 'Interval Server Error')
  }
}

exports.updateGroup = async (req, res, next) => {
  try {
    const _id = req.params.id;
    const group = new GROUP.findByIdAndUpdate(_id, req.body);
    if (!group) {
      return SendMessage(res, 404, 'Group not found');
    }

    SendMessage(res, 200, 'Updated')

  } catch (e) {
    SendMessage(res, 500, 'Internal Server Error')
  }
}

exports.removeGroup = async (req, res, next) => {
  try {
    const _id = req.params.id;
    const group = await GROUP.findByIdAndRemove(_id);
    if (!group) {
      return SendMessage(res, 404, 'Group not found');
    }

    SendMessage(res, 200, 'Data deleted')
  } catch (e) {
    SendMessage(res, 500, 'Internal Server Error')
  }
}