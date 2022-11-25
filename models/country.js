import { Sequelize } from 'sequelize';
import db from '../config/database.js'; 

const { DataTypes } = Sequelize;

const Country = db.define('country', {
  
  id: {
    type: DataTypes.INTEGER, 
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING
  } 
},{
  tableName: 'country' 
});

export default Country;