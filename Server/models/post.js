var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var postSchema = new mongoose.Schema({
        postedBy: {
          type: Schema.Types.ObjectId,
          ref: 'User'
        },
        updatedByEmail: String,
        updatedByName: String,
        content: String,
        postedOn: Date,
        updatedOn: String,
        category: String,
        shortDescription: String,
        postedByEmail: String,
        myFile: String,
        comments: [{
          commentedBy: {type: Schema.Types.ObjectId,ref: 'User'},
          commentedOn: String, commentText:String, likes: Number, 
          commentReplies: [{
            commentedBy: { type: Schema.Types.ObjectId, ref: 'User'} , 
            commentedOn: String, commentText:String, likes: Number
          }]
          }]
    });

postSchema.statics.updatePost = function(postId, postDetails, callback) {
    this.findOneAndUpdate({
      "_id": postId
    }, {
      $set: {
        updatedBy: postDetails.updatedBy,
        content: postDetails.content,
        updatedOn: Date.now(),
        category: postDetails.category,
        shortDescription: postDetails.shortDescription,
        myFile: postDetails.imageUrl
      }
    }, {
      upsert: true
    })
    .exec(function(err, doc) {
      if (err) {
        console.log(err);
        callback(err, null);
      } else {
        callback(null, doc);
      }
    });
  }

  module.exports = mongoose.model('Post', postSchema, 'Posts');

