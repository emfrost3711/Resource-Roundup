// Require mongoose
var mongoose = require("mongoose");

// Get a reference to the mongoose Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new ResourceSchema object
// This is similar to a Sequelize model

const ResourceSchema = new Schema({
    author: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    todo: {
      type: String,
      unique: false,
      required: [true, "text is required"]
    },
    // createdAt: {
    //   type: Date,
    //   default: Date.now()
    // }
  });


// This creates our model from the above schema, using mongoose's model method
var Resource = mongoose.model("Resource", ResourceSchema);

// Export the Example model
module.exports = Resource;