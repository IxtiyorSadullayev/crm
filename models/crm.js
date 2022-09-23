const {Schema, model} = require("mongoose");

const crmSchema = new Schema({
  nameCenter: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },

}, {
  timestamps: true,
})

module.exports = model("CRM", crmSchema)