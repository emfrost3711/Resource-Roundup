const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Category_ListSchema = new Schema({


  category: {
    type: String,
    unique: true
  },
  resources: [{
    type: Schema.Types.ObjectId, ref: "Resource", required: true
  }]


});

const Category_List = mongoose.model("Category_List", Category_ListSchema);

module.exports = Category_List;