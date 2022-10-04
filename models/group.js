const {model, Schema} = require("mongoose");


const groupSchema = new Schema({
  crm_id: {
    type: Schema.Types.ObjectId,
    required: [true, 'Please add group name'],
  },
  groupName: {
    type: String,
    required: true
  }
},{
  timestamps: true
});

module.exports = model("GROUP", groupSchema)