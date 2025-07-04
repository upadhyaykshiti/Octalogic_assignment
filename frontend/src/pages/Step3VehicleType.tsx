

import React, { useEffect, useState } from 'react';
import {
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button
} from '@mui/material';
import axios from 'axios';

console.log('API_URL from env:', import.meta.env.VITE_API_URL);

const Step3VehicleType = ({
  wheels,
  onNext,
}: {
  wheels: number;
  onNext: (data: any) => void;
}) => {
  const [types, setTypes] = useState<{ id: number; name: string }[]>([]);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/vehicle-types?wheels=${wheels}`)
      .then((res) => setTypes(res.data))
      .catch(console.error);
  }, [wheels]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-[400px]">
        <Typography variant="h5" className="text-center mb-6 font-semibold">
          Select Vehicle Type
        </Typography>

        <div className="mb-4">
          <RadioGroup
            onChange={(e) => setSelected(parseInt(e.target.value))}
            className="space-y-2"
          >
            {types.map((t) => (
              <FormControlLabel
                key={t.id}
                value={t.id}
                control={<Radio />}
                label={t.name}
              />
            ))}
          </RadioGroup>
        </div>

        <Button
          variant="contained"
          fullWidth
          onClick={() => selected && onNext({ typeId: selected })}
          disabled={!selected}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Step3VehicleType;
