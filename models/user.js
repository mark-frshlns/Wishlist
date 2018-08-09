const bcrypt = require('bcryptjs');
module.exports = function(sequelize, DataTypes){
  let User = sequelize.define('User', {
    username:{type:DataTypes.STRING, unique:true, validate:{notNull:true}},
    password:{type:DataTypes.STRING,  validate:{notNull:true}},
    createdAt:{type:DataTypes.DATE,defaultValue:new Date().toISOString().split('.')[0]},
    updatedAt:{type:DataTypes.DATE,defaultValue:new Date().toISOString().split('.')[0]}
  });
  User.prototype.validPassword = function(password){
    return bcrypt.compareSync(password,this.password);
  }
  return User;
}