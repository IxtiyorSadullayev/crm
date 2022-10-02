const { Schema, model } = require("mongoose");

const scienceSchema = new Schema({
  crm_id: {
    type: Schema.Types.ObjectId,
    ref: "CRM",
    required: true,
  },
  scienceName: {
    type: String,
    require: true,
  }
})

module.exports = model("SCIENCE", scienceSchema);
