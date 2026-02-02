import React from 'react';
import { Country } from '../types';
import { COUNTRIES } from '../constants';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

interface StepCountryProps {
  onSelect: (country: Country) => void;
}

export const StepCountry: React.FC<StepCountryProps> = ({ onSelect }) => {
  return (
    <div className="w-full">
      <div className="mb-6 text-center md:text-left">
        <h2 className="text-3xl font-bold text-white mb-2">Votre Localisation</h2>
        <p className="text-gray-400">Sélectionnez votre pays pour découvrir les profils disponibles près de chez vous.</p>
      </div>

      <div className="grid grid-cols-2 gap-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
        {COUNTRIES.map((country, idx) => (
          <motion.button
            key={country}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            onClick={() => onSelect(country)}
            className="flex items-center justify-center gap-2 p-4 bg-exotic-card border border-white/5 rounded-xl hover:border-exotic-rose/50 hover:bg-white/5 transition-all duration-300 group text-sm md:text-base"
          >
            <MapPin className="w-4 h-4 text-exotic-rose group-hover:text-white transition-colors" />
            <span className="font-medium text-gray-200 group-hover:text-white">{country}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};