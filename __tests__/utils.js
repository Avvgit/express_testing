import request from 'supertest';
import app from '../app.js';

async function getToken() {
  const payload = {
    'email': 'alejo_604@hotmail.com',
    'password': '1234567'
  }
  const { body } = await request(app).post('/auth/login').send(payload);
  return body.accessToken;
}

export default getToken;