import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

const Step1Name = ({ onNext }: { onNext: (data: any) => void }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState(false);

  const handleNext = () => {
    if (!firstName || !lastName) return setError(true);
    onNext({ firstName, lastName });
  };

   return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-indigo-300 p-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-center mb-4">What is your name?</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium">First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {error && <p className="text-red-600 text-sm mb-2">{error}</p>}

        {/* <button
          onClick={handleNext}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Next
        </button> */}
        <button
  onClick={handleNext}
  disabled={!firstName || !lastName}
  className={`w-full py-2 rounded transition 
    ${!firstName || !lastName 
      ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
      : 'bg-blue-500 text-white hover:bg-blue-600'}`}
>
  Next
</button>

      </div>
    </div>
  );
  
};
export default Step1Name;

