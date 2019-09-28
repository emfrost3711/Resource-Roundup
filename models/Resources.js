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
    description: {
      type: String
    },
    image: {
      type: String,
    },
    source_s3: {
      type: String
    },
    video_url: {
      type: String
    },
    other_url: {
      type: String
    },
    likes: {
      type: Number
    },
    dislikes: {
      type: Number
    },
    language: {
      type: String,
      required: "main language is required"
    },
    tech_tags: {
      type: [String]
    },
    status: {
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
      ref:"Comment"
    }]
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