


import React, { useState } from 'react';
import { Typography, Button, TextField } from '@mui/material';
import axios from 'axios';

const Step5DateAndSubmit = ({
  formData,
  onComplete,
}: {
  formData: any;
  onComplete: () => void;
}) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    if (!startDate || !endDate) return;
    const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/book`, {
      ...formData,
      startDate,
      endDate,
    });
    setMessage(res.data.message);
    setTimeout(onComplete, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-[400px]">
        <Typography variant="h5" className="text-center mb-6 font-semibold">
          Select Booking Dates
        </Typography>

        <TextField
          type="date"
          label="Start Date"
          fullWidth
          InputLabelProps={{ shrink: true }}
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />

        <TextField
          type="date"
          label="End Date"
          fullWidth
          sx={{ mt: 2 }}
          InputLabelProps={{ shrink: true }}
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />

        {/* <Button
          variant="contained"
          fullWidth
          sx={{ mt: 3 }}
          onClick={handleSubmit}
        >
          Submit Booking
        </Button> */}
        <Button
  variant="contained"
  fullWidth
  sx={{ mt: 3 }}
  onClick={handleSubmit}
  disabled={!startDate || !endDate}
>
  Submit Booking
</Button>


        {message && (
          <Typography mt={2} className="text-center text-sm text-gray-700">
            {message}
          </Typography>
        )}
      </div>
    </div>
  );
};

export default Step5DateAndSubmit;
