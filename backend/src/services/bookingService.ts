import db from '../config/db';

// SP: book_vehicle(first_name TEXT, last_name TEXT, vehicle_id INT, start_date DATE, end_date DATE)
export const bookVehicleService = async (
  firstName: string,
  lastName: string,
  vehicleId: number,
  startDate: string,
  endDate: string
) => {
  const result = await db.query(
    'SELECT book_vehicle($1, $2, $3, $4, $5) AS message',
    [firstName, lastName, vehicleId, startDate, endDate]
  );
  return result.rows[0].message;
};
