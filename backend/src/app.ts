


import express from 'express';
import cors from "cors";
import dotenv from 'dotenv';
import bookingRoutes from './routes/bookingRoutes';

dotenv.config();

const app = express();

// Middleware
app.use(cors()); // ✅ Allow cross-origin requests
app.use(express.json()); // ✅ Parse JSON request bodies

// Routes
app.use('/api', bookingRoutes);

export default app;
