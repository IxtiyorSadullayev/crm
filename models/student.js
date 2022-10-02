const {model, Schema } = require("mongoose");

const studentSchema = new Schema({
  
  teacher_id: {
    type: [Schema.Types.ObjectId],
    ref: "TEACHER",
  },
  userName: {
    type: String,
    required: true,
    unique: true,
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
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
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

module.exports = model("STUDENT", studentSchema)