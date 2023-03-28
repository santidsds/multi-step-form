import { useState } from 'react';

function useStep() {
    const [step, setStep] = useState(1);
  
    const nextStep = () => {
        if (step < 4) {
            setStep(step + 1);
        } else {
            setStep(4);
        }
    };
  
    const previousStep = () => {
        if (step > 1) {
            setStep(step - 1);
        } 
    };
  
    return { step, nextStep, previousStep };
}

export { useStep };

