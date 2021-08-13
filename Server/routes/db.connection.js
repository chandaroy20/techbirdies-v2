var mongoose = require('mongoose');
// const url = "your url here";
const url = "mongodb://dev:chanda20@cluster0-shard-00-00.jchfn.mongodb.net:27017,cluster0-shard-00-01.jchfn.mongodb.net:27017,cluster0-shard-00-02.jchfn.mongodb.net:27017/mydb20?ssl=true&replicaSet=atlas-anafwn-shard-0&authSource=admin&retryWrites=true&w=majority";
const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
  };

  mongoose.connect(url,connectionParams)
  .then( () => {
      console.log('Connected to database ')
  })
  .catch( (err) => {
      console.error(`Error connecting to the database. \n${err}`);
  });

  module.exports = mongoose;