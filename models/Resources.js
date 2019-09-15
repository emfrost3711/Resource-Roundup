// Require mongoose
var mongoose = require("mongoose");

// Get a reference to the mongoose Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new ResourceSchema object
// This is similar to a Sequelize model

const resourceSchema = new Schema({
    title: {
      type: String,
      required: "title is required"
    },
    // approved: {
    //   type: Boolean,
    //   default: false
    // },
    // createdAt: {
    //   type: Date,
    //   default: Date.now()
    // }
  });


// This creates our model from the above schema, using mongoose's model method
var Resource = mongoose.model("Resource", resourceSchema);

// Export the Example model
module.exports = Resource;