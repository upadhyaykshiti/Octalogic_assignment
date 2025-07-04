

import React, { useEffect, useState } from 'react';
import {
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button
} from '@mui/material';
import axios from 'axios';

const Step4VehicleModel = ({
  typeId,
  onNext,
}: {
  typeId: number;
  onNext: (data: any) => void;
}) => {
  const [vehicles, setVehicles] = useState<{ id: number; model: string }[]>([]);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/vehicles?typeId=${typeId}`)
      .then((res) => setVehicles(res.data))
      .catch(console.error);
  }, [typeId]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-[400px]">
        <Typography variant="h5" className="text-center mb-6 font-semibold">
          Select Vehicle Model
        </Typography>

        <div className="mb-4">
          <RadioGroup
            onChange={(e) => setSelected(parseInt(e.target.value))}
            className="space-y-2"
          >
            {vehicles.map((v) => (
              <FormControlLabel
                key={v.id}
                value={v.id}
                control={<Radio />}
                label={v.model}
              />
            ))}
          </RadioGroup>
        </div>

        <Button
          variant="contained"
          fullWidth
          onClick={() => selected && onNext({ vehicleId: selected })}
          disabled={!selected}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Step4VehicleModel;
