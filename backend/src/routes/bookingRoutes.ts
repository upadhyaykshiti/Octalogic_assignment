import express from 'express';
import { bookVehicle } from '../controllers/bookingController';
import { getVehicleTypes, getVehiclesByType } from '../controllers/vehicleController';

const router = express.Router();

router.get('/vehicle-types', getVehicleTypes);
router.get('/vehicles', getVehiclesByType);
router.post('/book', bookVehicle);

export default router;
