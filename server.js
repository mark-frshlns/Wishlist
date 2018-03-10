const app = require('./app');
const db = require('./models');
const port = process.env.PORT || 3001;


db.sequelize.sync({}).then(function(){

  app.listen(port, function(){
    if(port === 3001){
      console.log("listening on Port: " + port);
    }
    else{
      console.log("server up!!");
    }
  })
})
