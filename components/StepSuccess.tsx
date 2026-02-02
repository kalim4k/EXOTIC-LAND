import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';
import { Copy, Check, Star, Link as LinkIcon } from 'lucide-react';
import { EXTERNAL_LINK } from '../constants';

export const StepSuccess: React.FC = () => {
  const [copied, setCopied] = useState(false);
  
  useEffect(() => {
    // Reduced confetti
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#e11d48', '#d4af37', '#ffffff']
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EXTERNAL_LINK);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="w-full text-center py-8">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="mx-auto w-20 h-20 bg-gradient-to-tr from-exotic-rose to-purple-500 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-exotic-rose/20"
      >
        <Star className="w-10 h-10 text-white fill-current" />
      </motion.div>

      <h2 className="text-3xl md:text-4xl font-extrabold text-exotic-text mb-4">
        Bienvenue sur EXOTIC
      </h2>
      <p className="text-exotic-muted mb-8 max-w-md mx-auto">
        Votre profil a été validé. Pour finaliser votre inscription, veuillez utiliser le lien sécurisé ci-dessous.
      </p>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-md mx-auto bg-white border border-exotic-border rounded-xl p-4 mb-6 shadow-lg shadow-gray-100"
      >
        <div className="flex items-center gap-2 mb-2">
          <LinkIcon className="w-4 h-4 text-exotic-gold" />
          <span className="text-xs text-exotic-muted uppercase tracking-wider font-semibold">Lien d'accès personnel</span>
        </div>
        
        <div className="flex items-center gap-2 bg-slate-50 rounded-lg p-2 border border-exotic-border">
          <code className="flex-1 text-sm text-exotic-rose font-mono truncate text-left px-2 select-all">
            {EXTERNAL_LINK}
          </code>
          <button
            onClick={handleCopy}
            className={`p-2 rounded-md transition-all duration-200 ${
              copied 
                ? 'bg-green-100 text-green-600' 
                : 'bg-white text-exotic-text border border-gray-200 hover:bg-gray-50'
            }`}
            title="Copier le lien"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-sm text-exotic-muted max-w-sm mx-auto bg-blue-50 border border-blue-100 rounded-lg p-4"
      >
        <p className="font-medium text-blue-800 mb-1">⚠️ Instruction importante</p>
        <p className="text-blue-600">
          Copiez le lien ci-dessus et <strong>collez-le dans la barre d'adresse de votre navigateur</strong> pour accéder à la page d'inscription.
        </p>
      </motion.div>
    </div>
  );
};