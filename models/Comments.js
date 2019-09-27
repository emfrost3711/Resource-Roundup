const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const commentsSchema = new Schema({
  // resource: {
  //   type: Schema.Types.ObjectId,
  //   ref: "Resource"
  // },
  // user: {
  //   type: Schema.Types.ObjectId,
  //   ref: "User"
  // },
  comment: {
    type: String,
    unique: false,
    // required: [true, "text is required"]
  },
});
const Comments = mongoose.model("Comments", commentsSchema);
module.exports = Comments;