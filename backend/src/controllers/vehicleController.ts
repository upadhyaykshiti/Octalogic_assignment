

import { Request, Response } from 'express';
import { getVehicleTypesService, getVehiclesByTypeService } from '../services/vehicleService';

export const getVehicleTypes = async (req: Request, res: Response) => {
  const wheels = parseInt(req.query.wheels as string);
  try {
    const vehicleTypes = await getVehicleTypesService(wheels);
    res.json(vehicleTypes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch vehicle types' });
  }
};

export const getVehiclesByType = async (req: Request, res: Response) => {
  const typeId = parseInt(req.query.typeId as string);
  try {
    const vehicles = await getVehiclesByTypeService(typeId);
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch vehicles' });
  }
};
