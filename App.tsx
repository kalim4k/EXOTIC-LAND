import React, { useState } from 'react';
import { Step, Country, AgeRange } from './types';
import { MODELS } from './constants';
import { StepCountry } from './components/StepCountry';
import { StepAge } from './components/StepAge';
import { StepSuccess } from './components/StepSuccess';
import { ModelDisplay } from './components/ModelDisplay';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [step, setStep] = useState<Step>(Step.Country);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState({
    country: null as Country | null,
    age: null as AgeRange | null,
  });

  const handleCountrySelect = (country: Country) => {
    setData(prev => ({ ...prev, country }));
    setStep(Step.Age);
  };

  const handleAgeSelect = (age: AgeRange) => {
    setData(prev => ({ ...prev, age }));
    setStep(Step.Success);
  };

  // Logic to determine which models to show
  const currentModels = step === Step.Country 
    ? [MODELS[0], MODELS[1]] 
    : [MODELS[2], MODELS[3]];

  // Calculate progress
  const progress = ((step) / 2) * 100;

  return (
    <div className="min-h-screen w-full bg-exotic-bg flex flex-col md:flex-row overflow-hidden relative">
      
      {/* Background Ambience - Plus subtil pour le thème clair */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-exotic-rose/5 rounded-full blur-[100px]" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/5 rounded-full blur-[100px]" />
      </div>

      {/* Left Panel: Models */}
      <AnimatePresence mode="wait">
        {step !== Step.Success && (
          <motion.div 
            key="models"
            className="w-full md:w-1/2 lg:w-3/5 p-4 md:p-8 flex flex-col justify-center items-center z-10 md:h-screen"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
             {/* Logo/Header Mobile */}
             <div className="md:hidden w-full mb-4 flex justify-between items-center">
                <h1 className="text-2xl font-black tracking-tighter text-exotic-text italic">EXOTIC</h1>
                <div className="text-xs font-mono text-exotic-muted">
                    STEP {step + 1}/2
                </div>
             </div>
             
             <ModelDisplay models={currentModels} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Right Panel: Content / Form */}
      <div className={`w-full ${step === Step.Success ? 'md:w-full max-w-2xl mx-auto' : 'md:w-1/2 lg:w-2/5'} bg-white/80 md:bg-white/60 backdrop-blur-xl border-l border-exotic-border p-6 md:p-12 flex flex-col justify-center relative z-20 min-h-[50vh] md:min-h-screen shadow-2xl shadow-gray-200/50`}>
        
        {/* Progress Bar */}
        {step !== Step.Success && (
          <div className="w-full h-1 bg-gray-200 rounded-full mb-8 md:mb-12 overflow-hidden">
            <motion.div 
              className="h-full bg-exotic-rose"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        )}

        {/* Header Desktop */}
        <div className="hidden md:flex justify-between items-center mb-12">
            <h1 className="text-3xl font-black tracking-tighter text-exotic-text italic">EXOTIC</h1>
            {step !== Step.Success && (
               <span className="text-sm font-mono text-exotic-muted border border-exotic-border px-3 py-1 rounded-full bg-white">
                  ÉTAPE {step + 1} SUR 2
               </span>
            )}
        </div>

        {/* Content Switcher */}
        <div className="flex-1 flex items-center">
          <AnimatePresence mode="wait">
            {step === Step.Country && (
              <motion.div
                key="step-country"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <StepCountry onSelect={handleCountrySelect} />
              </motion.div>
            )}

            {step === Step.Age && (
              <motion.div
                key="step-age"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <StepAge onSelect={handleAgeSelect} />
              </motion.div>
            )}

            {step === Step.Success && (
              <motion.div
                key="step-success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                <StepSuccess />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center md:text-left">
          <p className="text-xs text-exotic-muted">
            © 2024 EXOTIC. Tous droits réservés. <br/>
            En continuant, vous acceptez nos conditions d'utilisation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;