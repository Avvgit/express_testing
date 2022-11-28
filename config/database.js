import { Sequelize } from "sequelize";
import * as dotenv from 'dotenv';
dotenv.config();

// const env = process.env.ENV;
// const config = _config [env];

const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER, 
  process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false,
    port: 5432,
    define: 
    {
    timestamps: false
    }
   });

export default db;