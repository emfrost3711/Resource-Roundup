const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Category_ListSchema = new Schema({

//   author: {
//     type: Schema.Types.ObjectId,
//     ref: "User"
//   },
  category: {
    type: String,
  },
//   createdAt: {
//     type: Date,
//     default: Date.now()
//   }
});

const Category_List = mongoose.model("Category_List", Category_ListSchema);

module.exports = Category_List;