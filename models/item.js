module.exports = function(sequelize, DataTypes){
    let Item = sequelize.define('Item', {
        item_name: {type:DataTypes.STRING} ,
        item_price: DataTypes.DOUBLE,
        item_requested: DataTypes.INTEGER,
        totalRequested:{
          type:DataTypes.DOUBLE,
          defaultValue:0
        },
        totalFulfilled: {
          type:DataTypes.DOUBLE,
          defaultValue:0
        },
        payment_Percentage:{
          type:DataTypes.DOUBLE,
          defaultValue:0
        },
        item_description: DataTypes.TEXT,
        // item_Url:DataTypes.TEXT,
        item_imageUrl: DataTypes.STRING
    },{
      
      getterMethods:{
        totalRequested: function(){
          return this.item_price * this.item_requested;
        },
        payment_Percentage: function(){
          return (this.totalFulfilled / this.totalRequested);
        }
      },
      setterMethods:{
        totalRequested: function(){
          this.totalRequested = this.item_price * this.item_requested;
        }
      }
      
    },
      
    );

    Item.associate = function(models){
      Item.belongsTo(models.Category);
    }

    return Item;
}