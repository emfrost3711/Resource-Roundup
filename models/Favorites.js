// Require mongoose
const mongoose = require("mongoose");

// Get a reference to the mongoose Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new FavoritesSchema object
// This is similar to a Sequelize model

const FavoritesSchema = new Schema({
    user_id: {
        type: String,
        unique: true
    },
    favorites: [{
        type: Schema.Types.ObjectId,
        ref: 'Resource'
    }],
    private: {
        type: Boolean,
        required: false
    }
});


// this is where we would write some methods... right??



//make into a variable, then export this schema 
const Favorite = mongoose.model("Favorite", FavoritesSchema);

module.exports = Favorite;


//found this on stackoverflow (); may be useful? here is the original schema

// var ContactSchema = module.exports = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   phone: {
//     type: Number,
//     required: true,
//     index: {unique: true}
//   },
//   messages: [
//   {
//     title: {type: String, required: true},
//     msg: {type: String, required: true}
//   }]
// }, {
//     collection: 'contacts',
//     safe: true
// });

//and here is how they tried to update it

//Contact.findByIdAndUpdate(
//     info._id,
//     {$push: {"messages": {title: title, msg: msg}}},
//     {safe: true, upsert: true, new : true},
//     function(err, model) {
//         console.log(err);
//     }
// );