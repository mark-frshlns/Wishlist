module.exports = function(sequelize, DataTypes){
    let Item = sequelize.define('Item', {

        item_name: DataTypes.STRING,
        item_price: DataTypes.INTEGER,
        item_requested: DataTypes.INTEGER,
        item_contributed: DataTypes.INTEGER,
        item_imageUrl: DataTypes.STRING
    }, {
      getterMethods:{
        totalContributions: function(){
          return this.item_price * this.item_contributed;
        },
        totalRequested: function(){
          return this.item_price * this.item_requested;
        }
      }
    });

    Item.associate = function(models){
      Item.belongsTo(models.Category);
    }

    return Item;
}