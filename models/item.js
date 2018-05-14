module.exports = function(sequelize, DataTypes){
    let Item = sequelize.define('Item', {
        item_name: DataTypes.STRING,
        item_price: DataTypes.DOUBLE,
        item_requested: DataTypes.INTEGER,
        item_fulfilled:{
         type: DataTypes.INTEGER,
         defaultValue: 0
        },
        item_description: DataTypes.TEXT,
        item_imageUrl: DataTypes.STRING
    },{
      
      getterMethods:{
        totalRequested: function(){
          return this.item_price * this.item_requested;
        },
        totalFulfilled: function(){
          return this.item_price * this.item_fulfilled;
        }
      },
      
    },
      
    );

    Item.associate = function(models){
      Item.belongsTo(models.Category);
    }

    return Item;
}