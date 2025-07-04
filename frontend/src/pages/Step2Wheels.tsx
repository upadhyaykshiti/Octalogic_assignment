

import React, { useState } from 'react';
import {
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button
} from '@mui/material';

const Step2Wheels = ({ onNext }: { onNext: (data: any) => void }) => {
  const [wheels, setWheels] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-[400px]">
        <Typography variant="h5" className="text-center mb-6 font-semibold">
          Number of Wheels
        </Typography>

        <div className="mb-4">
          <RadioGroup
            onChange={(e) => setWheels(parseInt(e.target.value))}
            className="space-y-2"
          >
            {[2, 4].map((w) => (
              <FormControlLabel
                key={w}
                value={w}
                control={<Radio />}
                label={`${w} Wheeler`}
              />
            ))}
          </RadioGroup>
        </div>

        <Button
          variant="contained"
          fullWidth
          onClick={() => wheels !== null && onNext({ wheels })}
          disabled={wheels === null}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Step2Wheels;
