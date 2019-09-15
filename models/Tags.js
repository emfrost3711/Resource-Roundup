const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Tag_ListSchema = new Schema({

//   author: {
//     type: Schema.Types.ObjectId,
//     ref: "User"
//   },
  tag: {
    type: String,
    unique: false,
    required: "tag needs a tag name"
  },
//   createdAt: {
//     type: Date,
//     default: Date.now()
//   }
});

const Tag_List = mongoose.model("Tag_List", Tag_ListSchema);

module.exports = Tag_List;