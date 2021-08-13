

var mongoose = require('mongoose'),
userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  createdDate: Date,
  updatedDate: Date,
  company: String,
  aboutMe: String,
  password: String,
  email: String,
  initials: String,
  photo: String,
  status:String,

  facebook: {
    id: String,
    token: String,
    email: String,
    name: String
  },
  google: {
    id: String,
    token: String,
    email: String,
    name: String
  }
});

userSchema.statics.addUser = function(userDetails, callback) {
  this.create({
    firstName: userDetails.firstName,
    lastName: userDetails.lastName,
    createdDate: (userDetails.createdDate) ? (userDetails.createdDate) : Date.now(),
    updatedDate: Date.now(),
    password: userDetails.password,
    email: userDetails.email,
    initials: userDetails.firstName.charAt(0) + userDetails.lastName.charAt(0),
    imageUrl: userDetails.imageUrl
  }, function(err, data) {
    if (err) callback(err)
    else callback(data);
  });
}

userSchema.statics.findAll=function(memberList,callback)
{
  this.find(
    {
      "_id":{$in:memberList}
    },{
      "github":1
    }).exec(function(err,data)
    {
      if(!err)
      callback(null,data);
    })
  }

  userSchema.statics.updateUser = function(userId, newUserDetails, callback) {
    this.findOneAndUpdate({
      "_id": userId
    }, {
      $set: {
        firstName: newUserDetails.firstName,
        lastName: newUserDetails.lastName,
        email: newUserDetails.email
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


  userSchema.statics.getPassword = function(email, callback) {
    return this.find({
      'email': email
    }).exec(function(err, data) {
      if (err) callback(err)
      else callback(data);
    });
  }

  userSchema.statics.getUserId = function(email, callback) {
    return this.find({
      'email': email
    }).exec(function(err, data) {
      if (err) callback(err, null);
      else callback(null, data);
    });
  }

  userSchema.statics.getUserEmail = function(email, callback) {
    return this.find({
      'email': RegExp(email)
    }).exec(function(err, data) {
      if (err) callback(err, null);
      else callback(null, data);
    });
  }


      userSchema.statics.getUserMember = function(UserId, callback) {
        return  this.findById(UserId).exec(function(err, data) {
          if (err) callback(err,null)
          else callback(null,data);
        });
      }

  
      userSchema.statics.setStatus=function(data,callback){
        this.findOneAndUpdate(
          {
            "_id":data.user
          },
          {
            $set:
            {
              "status":data.status
            }
          },{
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

        module.exports = mongoose.model('User', userSchema, 'Users');
