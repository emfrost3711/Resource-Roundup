// Require mongoose
var mongoose = require("mongoose");

// Get a reference to the mongoose Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new ResourceSchema object
// This is similar to a Sequelize model

const resourceSchema = new Schema({
    fileType: {
      type: String,
    },
    title: {
      type: String,
      required: "title is required"
    },
    link: {
      type: String,
    },
    image: {
      type: String,
    },
    contributor: {
      type: String
    },
    author: {
      type: String
    },
    source_s3: {
      type: String
    },
    likes: {
      type: Number
    },
    dislikes: {
      type: Number
    },
    categories: {
      type: [String]
    },
    tags: {
      type: [String]
    },

  //   comments:[{
  //     body:String,
  //     date:{
  //         type:Date,
  //         default: Date.now
  //     },
  //     author_id:{
  //         type:Schema.ObjectId,
  //         ref:'User'
  //     },
  //     //public vs. private chats
  //     chat_type: String
  // }],
  // commenting out having comments as part of a separate model to test the idea of just including them directly here  
    comments: [{
      type: Schema.Types.ObjectId,
      ref:"Comments"
    }],
    approved: {
      type: Boolean,
      default: false
    },

  });


// This creates our model from the above schema, using mongoose's model method
var Resource = mongoose.model("Resource", resourceSchema);

// Export the Example model
module.exports = Resource;