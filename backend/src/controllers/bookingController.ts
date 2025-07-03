
import { Request, Response } from 'express';
import { bookVehicleService } from '../services/bookingService';

export const bookVehicle = async (req: Request, res: Response) => {
  const { firstName, lastName, vehicleId, startDate, endDate } = req.body;

  try {
    const result = await bookVehicleService(firstName, lastName, vehicleId, startDate, endDate);
    res.json({ message: result });
  } catch (error) {
    res.status(500).json({ error: 'Booking failed' });
  }
};
