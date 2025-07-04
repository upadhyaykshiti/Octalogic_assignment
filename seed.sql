-- Drop existing tables if needed
DROP TABLE IF EXISTS bookings;
DROP TABLE IF EXISTS vehicles;
DROP TABLE IF EXISTS vehicle_types;

-- 1. Vehicle Types
CREATE TABLE vehicle_types (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    wheels INT NOT NULL CHECK (wheels IN (2, 4))
);

-- 2. Vehicles
CREATE TABLE vehicles (
    id SERIAL PRIMARY KEY,
    model VARCHAR(100) NOT NULL,
    type_id INT REFERENCES vehicle_types(id)
);

-- 3. Bookings
CREATE TABLE bookings (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    vehicle_id INT REFERENCES vehicles(id),
    start_date DATE NOT NULL,
    end_date DATE NOT NULL
);

-- Seed vehicle types
INSERT INTO vehicle_types (name, wheels) VALUES 
('Hatchback', 4),
('SUV', 4),
('Sedan', 4),
('Cruiser', 2);

-- Seed vehicles
INSERT INTO vehicles (model, type_id) VALUES
('Honda Jazz', 1),
('Hyundai Creta', 2),
('Honda City', 3),
('Royal Enfield Classic 350', 4)
('Swift', 1),
('i20', 1),
('XUV500', 2),
('Verna', 3),
('Avenger Street', 4);