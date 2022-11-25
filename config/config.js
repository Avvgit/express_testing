import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

const config = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    logging: true,
    dialect: 'postgres',
  },

  test: {
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 123456,
    database: process.env.DB_NAME || 'alePruebas',
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || 5432,
    logging: false,
    dialect: 'postgres',
  },
  
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DB_NAME,
    host: process.env.DB_HOST,
    logging: false,
    dialect: 'postgres',
  },
};

export default config;