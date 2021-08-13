var app = require('../../app')
var io = require('socket.io')();

var User = require('../models/user.js');






io.on('connection', function(socket) {

  var channelData;
  //joining all chatRooms
  socket.on('join:chatRoom',function(data){
    socket.join(data.chatRoom);
  })


  socket.on('join:room', function(data) {
    //To make sure socket connects to one room only
    if (socket.lastRoom) {
      socket.leave(socket.lastRoom);
      socket.lastRoom = null;
    }
    socket.join(data.room);
    socket.lastRoom = data.room;

    // activity room
    if (data.activityRoom) {
      if (socket.activityRoom) {
        socket.leave(socket.activityRoom);
      }


      socket.join(data.activityRoom);
      socket.activityRoom = data.activityRoom;
    }
    if(data.BacklogRoom){
      if(socket.BacklogRoom){
        socket.leave(socket.BacklogRoom)
      }
      socket.join(data.BacklogRoom);
      socket.BacklogRoom=data.BacklogRoom;
    }
  });

  socket.on('disconnect',function(){
    var message={'status':'inactive','user':message1.user}
    io.sockets.emit('status',message);
    User.setStatus(message,function(err,data){})
  })

  //require('../githubIntegration/databaseCall.js');


});


module.exports = io;
