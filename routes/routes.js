import express from 'express';
import { 
  getPassenger, 
  getPassengerById, 
  createPassenger, 
  updatePassenger, 
  deletePassenger 
} from "../controllers/passengers.js";
import { isUserAuthenticated } from "../middlewares/auth.js";

 const router = express.Router();

router.get('/passengers', isUserAuthenticated, getPassenger);
router.get('/passengers/:id', isUserAuthenticated, getPassengerById);
router.post('/passengers', isUserAuthenticated, createPassenger);
router.put('/passengers/:id', isUserAuthenticated, updatePassenger);
router.delete('/passengers/:id', isUserAuthenticated, deletePassenger);

export default router; 