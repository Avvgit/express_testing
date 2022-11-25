import { Sequelize } from 'sequelize';
import db from '../config/database.js'; 
import Country from './country.js';

const { DataTypes } = Sequelize;

const Passenger = db.define('passenger', {
  id: {
    type: DataTypes.INTEGER, 
    autoIncrement: true,
    primaryKey: true,
  },

  name: {
    type: DataTypes.STRING
  },

  lastname: {
    type: DataTypes.STRING
  },

  mlastname: {
    type: DataTypes.STRING
  },

  email: {
    type: DataTypes.STRING
  },

  age: {
    type: DataTypes.INTEGER
  },
  
  id_country: { 
    type: DataTypes.INTEGER,
    field: 'id_country',
    references: {
      model: Country,
      key: 'id'
    }
  }
  
},{
  tableName: 'passenger'
  });

export default Passenger;