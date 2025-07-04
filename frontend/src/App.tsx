import React, { useState } from 'react';
import Step1Name from './pages/Step1Name';
import Step2Wheels from './pages/Step2Wheels';
import Step3VehicleType from './pages/Step3VehicleType';
import Step4VehicleModel from './pages/Step4VehicleModel';
import Step5DateAndSubmit from './pages/Step5DateAndSubmit';

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<any>({});

  const next = (data: any) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  return (
    <div>
      {step === 1 && <Step1Name onNext={next} />}
      {step === 2 && <Step2Wheels onNext={next} />}
      {step === 3 && <Step3VehicleType wheels={formData.wheels} onNext={next} />}
      {step === 4 && <Step4VehicleModel typeId={formData.typeId} onNext={next} />}
      {step === 5 && <Step5DateAndSubmit formData={formData} onComplete={() => setStep(1)} />}
    </div>
  );
}

export default App;
