import Passenger from "../models/passenger.js";

/* HTTP Verb / CRUD 
POST / Create
GET / Read
PUT / Update-Modify
DELETE / Delete
*/

//get que me traiga todos los pasajeros
export const getPassenger = async ( req, res ) => {
  try{
    const passenger = await Passenger.findAll();
    res.send(passenger);
  }catch (err) {
    console.log(err);
  } 
}

//get passengers Id:
export const getPassengerById = async (req, res) => {
  try {
      const passenger = await Passenger.findByPk(req.params.id);
      if (!passenger) { //Si no hay id para pasajero
          res.status(404).send({
              message: `No se encontro pasajero con id ${req.params.id}`
          });
      }
      res.send(passenger);
  } catch (err) {
      console.log(err);
  }
}

//crear un nuevo pasajero
export const createPassenger = async (req, res) => {
  try {
      await Passenger.create(req.body);
      res.json({
          "message": "Pasajero Creado",
      });
  } catch (err) {
      console.log(err);
  }
}

//modificar o actualizar un pasajero por id
export const updatePassenger = async (req, res) => {
  try {
      const passenger = await Passenger.findByPk(req.params.id); //donde le llega por parametro 
      if (!passenger) {
          res.status(404).send({
              message: `No se encontro pasajero con id ${req.params.id}`
          });
          return;
      }
      await Passenger.update(req.body, {
          where: {
              id: req.params.id
          }
      });
      res.json({
          "message": "Pasajero Modificado"
      });
  } catch (err) {
      console.log(err);
  }
}

//borrar pasajero por id:
export const deletePassenger = async (req, res) => {
  try {
      const passenger = await Passenger.findByPk(req.params.id);
      if (!passenger) {
          res.status(404).send({
              message: `No se encontro pasajero con id ${req.params.id}`
          });
          return;
      }
      await Passenger.destroy({
          where: {
              id: req.params.id
          }
      });
      res.json({
          "message": "Pasajero Deleted"
      });
  } catch (err) {
      console.log(err);
  }
}
