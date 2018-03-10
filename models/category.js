module.exports = function(sequelize, DataTypes) {

  let Category = sequelize.define('Category', {

      category_name: DataTypes.STRING
  });

  Category.associate = function(models){
    Category.hasMany(models.Item)
  }
  return Category;
}

