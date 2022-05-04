const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trip extends Model {}

Trip.init({
    trip_budget: {
         type: DataTypes.FLOAT,
    },
    traveller_amount: {
        type: DataTypes.INTEGER,
        allowNull:false,
        defaultValue: 1,
   },
},{
    sequelize
});

module.exports=Trip