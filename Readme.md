
# Vehicle Booking Application

A full-stack vehicle booking application built with:

* **Frontend**: React + TypeScript + Tailwind CSS + React Router
* **Backend**: Node.js + Express + PostgreSQL + TypeScript
* **Database**: PostgreSQL (with stored procedures)
* **Styling**: Tailwind CSS v3
* **API Communication**: REST using Axios

---

## Features

* Step-by-step booking flow (Name → Wheels → Type → Model → Dates)
* Booking validation with SPs (checks overlaps)
* Vehicle types dynamically fetched from DB via API
* Tailwind CSS UI for fast and responsive styling

---

# Backend Setup

###  Install dependencies

```bash
cd backend
npm install
```

###  Environment Setup

Create a `.env` file:


```

###Run the server

```bash
npm start
```

---

## Database Setup

###  Create the DB

```sql
CREATE DATABASE vehicle_booking;
```

### Import seed 

```bash
psql -U postgres -d vehicle_booking -f seed.sql
```

### Backup & Restore

#### Create dump:

```bash
pg_dump -U postgres -d vehicle_booking -f vehicle_booking_dump.sql
```

#### Restore from dump:

```bash
psql -U postgres -d vehicle_booking -f vehicle_booking_dump.sql
```

---

## Stored Procedures Used

1. **`book_vehicle(p_first_name, p_last_name, p_vehicle_id, p_start_date, p_end_date)`**

   * Returns message like "Booking successful" or "Already booked"

2. **`get_vehicle_types_by_wheels(p_wheels)`**

   * Returns vehicle types like hatchback, sedan, etc. for 2/4 wheelers

3. **`get_vehicles_by_type(p_type_id)`**

   * Returns vehicle models associated with a given type

---

## Frontend Setup

### Install dependencies

```bash
cd frontend
npm install
```

### Environment File

Create `.env`:


### Run Dev Server

```bash
npm run dev
```


## 🌐 API Endpoints

| Method | Endpoint                      | Description                       |
| ------ | ----------------------------- | --------------------------------- |
| GET    | `/api/vehicle-types?wheels=2` | Get types for 2 or 4 wheeler      |
| GET    | `/api/vehicles?typeId=1`      | Get vehicles for type             |
| POST   | `/api/book`                   | Book vehicle with date validation |

---

## Booking Flow

1. Step 1: Enter first name and last name
2. Step 2: Choose number of wheels
3. Step 3: Select vehicle type
4. Step 4: Select vehicle model
5. Step 5: Pick start & end date and submit

---


## Validation

* Each step requires valid inputs before proceeding.
* Submit button is disabled until both dates are selected.
