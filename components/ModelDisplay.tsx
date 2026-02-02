import React from 'react';
import { Model } from '../types';
import { motion } from 'framer-motion';

interface ModelDisplayProps {
  models: Model[];
}

export const ModelDisplay: React.FC<ModelDisplayProps> = ({ models }) => {
  return (
    <div className="grid grid-cols-2 gap-4 w-full h-full">
      {models.map((model, index) => (
        <motion.div 
          key={model.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="relative h-64 md:h-full rounded-2xl overflow-hidden group shadow-2xl shadow-rose-900/10"
        >
          <img 
            src={model.image} 
            alt={model.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
          <div className="absolute bottom-0 left-0 p-4 w-full">
            <h3 className="text-xl font-bold text-white tracking-wide">{model.name}</h3>
            <p className="text-exotic-rose font-medium">{model.age} ans</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};