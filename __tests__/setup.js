import request from 'supertest';
import app from '../app.js';

before(async () => {  
  // create user
  const payload = {
    'name': 'Alejo',
    'email': 'alejo_605@hotmail.com',
    'password': '1234567'
  }
  await request(app).post('/auth/register').send(payload);
})