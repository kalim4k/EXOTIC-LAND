import React from 'react';
import { AgeRange } from '../types';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

interface StepAgeProps {
  onSelect: (age: AgeRange) => void;
}

const RANGES: AgeRange[] = ['18-24', '25-34', '35+'];

export const StepAge: React.FC<StepAgeProps> = ({ onSelect }) => {
  return (
    <div className="w-full">
      <div className="mb-8 text-center md:text-left">
        <h2 className="text-3xl font-bold text-exotic-text mb-2">Votre Profil</h2>
        <p className="text-exotic-muted">Confirmez votre tranche d'âge pour accéder au contenu exclusif.</p>
      </div>

      <div className="space-y-4">
        {RANGES.map((range, idx) => (
          <motion.button
            key={range}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => onSelect(range)}
            className="w-full flex items-center justify-between p-5 bg-white border border-exotic-border rounded-xl hover:border-exotic-rose hover:bg-slate-50 shadow-sm transition-all duration-300 group"
          >
            <span className="text-xl font-semibold text-exotic-text">{range} ans</span>
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-exotic-rose transition-colors">
                <Calendar className="w-5 h-5 text-gray-400 group-hover:text-white" />
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};