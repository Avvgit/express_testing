import request from 'supertest';
import chai from 'chai';
import app from '../app.js';
import getToken from './utils.js';
import Passenger from '../models/passenger';
import { before } from 'mocha';

const { expect } = chai;


describe('Test the passengers endpoints', () => {
  let token;
  let passenger1;
  let passenger2;

  before( async () => {
    token = await getToken();
    passenger1 = await Passenger.create({
      name: 'Cristiano',
      lastName: 'Vera',
      mlastname: 'Valdes',
      email: 'cr7@gmail.com',
      age: 32,
    })
    passenger2 = await Passenger.create({
      name: 'Sofia',
      lastName: 'Hernandez',
      mlastname: 'Aveiro',
      email: 'testmail@larnu.com',
      phone: 40,
    })
  })

  it('should retrieve all the passengers', async () => {
    const { body, status } = await request(app)
      .get('/passengers') // peticion a passengers 
      .set('Authorization', `Bearer ${token}`); // sin esto no corre el test pq estan todas auth
    expect(status).to.equal(200); 
    expect(body).to.be.a('array');
    expect(body.length).to.equal(2); //igual a 2 pq son dos name
  });

  it('get /passengers should retrieve unauthorized for unloged users', async () => {
    const { status } = await request(app)
      .get('/passengers')
    expect(status).to.equal(403); 
  }); //Si nos saltamos el AUTH nos tira el 403 porque no tiene token

  it('should retrieve a passenger by id', async () => {
    const { body, status } = await request(app)
      .get(`/passengers/${passenger2.id}`)
      .set('Authorization', `Bearer ${token}`);
    expect(status).to.equal(200);
    expect(body).to.be.a('object');
    expect(body.id).to.equal(passenger2.id);
    expect(body.name).to.equal(passenger2.name);
  });

  it('get /passengers/id should retrieve unauthorized for unloged users', async () => {
    const { status } = await request(app)
      .get(`/passengers/${passenger1.id}`);
    expect(status).to.equal(403);
  });

  it('put /passenger/id should allow to update the object', async () => {
    const payload = { 
      name: 'Messi',
    }
    const { body, status } = await request(app)
      .put(`/passengers/${passenger1.id}`)
      .set('Authorization', `Bearer ${token}`)
      .send(payload);
    expect(status).to.equal(200);
    expect(body).to.be.a('object');
    
    // retrieve the object from the database
    const passenger = await Passenger.findByPk(passenger1.id);
    expect(passenger.name).to.equal(payload.name);
  });

  it('delete /passengers/id should allow to delete an object', async () => {
    const passengerToDelete = await Passenger.create({
      name: 'name to delete',
    });
    const { body, status } = await request(app)
      .delete(`/passengers/${passengerToDelete.id}`)
      .set('Authorization', `Bearer ${token}`)
    expect(status).to.equal(200);
    expect(body).to.be.a('object');
    
    // retrieve the object from the database
    const passenger = await Passenger.findByPk(passengerToDelete.id);
    expect(passenger).to.equal(null);
  });
});