const {model, Schema } = require("mongoose");

const studentScheme = new Schema({
  crm_id: {
    type: Schema.Types.ObjectId,
    ref: "CRM",
    required: true,
  },
  teacher_id: {
    type: [Schema.Types.ObjectId],
    ref: "TEACHER",
  },
  firstName: {
    type: String,
    required: true,
    unique: true,
  },
  lastName: {
    type: String,
    required: true,
    unique: true,
  },
  dateBorn: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },

},
  { timestamps: true }
);

module.exports = model("STUDENT", crmScheme)