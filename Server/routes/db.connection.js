var mongoose = require('mongoose');
const url = "your url here";
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
