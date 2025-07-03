import db from '../config/db';

// SP: get_vehicle_types_by_wheels(wheels INT)
export const getVehicleTypesService = async (wheels: number) => {
  const result = await db.query(
    'SELECT * FROM get_vehicle_types_by_wheels($1)',
    [wheels]
  );
  return result.rows;
};

// SP: get_vehicles_by_type_id(type_id INT)
export const getVehiclesByTypeService = async (typeId: number) => {
  const result = await db.query(
    'SELECT * FROM get_vehicles_by_type_id($1)',
    [typeId]
  );
  return result.rows;
};
