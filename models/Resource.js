// Require mongoose
var mongoose = require("mongoose");

// Get a reference to the mongoose Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new ResourceSchema object
// This is similar to a Sequelize model
var ResourceSchema = new Schema({
    // `string` must be of type String. We "trim" it to remove any trailing white space
    // `string` is a required field, and a custom error message is thrown if it is not supplied
    title: {
        type: String,
        trim: true,
    },

    // `boolean` must be of type Boolean
    approved: {
        type: Boolean,
        default: false
    }
    // `array` must be an Array

})
// This creates our model from the above schema, using mongoose's model method
var Resource = mongoose.model("Resource", ResourceSchema);

// Export the Example model
module.exports = Resource;