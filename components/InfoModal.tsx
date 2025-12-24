import React from 'react';
import { X } from 'lucide-react';
import { NeonButton } from './NeonButton';
import { playSound } from '../utils/audio';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  instructions: string[];
  colorClass: string; // e.g. 'text-neon-pink'
  borderColorClass: string; // e.g. 'border-neon-pink'
}

export const InfoModal: React.FC<InfoModalProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  instructions, 
  colorClass,
  borderColorClass 
}) => {
  if (!isOpen) return null;

  const handleClose = () => {
    playSound('click');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm animate-fade-in"
        onClick={handleClose}
      />
      
      {/* Modal Content */}
      <div className={`relative w-full max-w-md bg-dark-card border-2 ${borderColorClass} rounded-2xl p-6 shadow-[0_0_30px_rgba(0,0,0,0.5)] animate-float transform transition-all scale-100`}>
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <h2 className={`text-2xl font-black uppercase tracking-wider mb-6 font-display ${colorClass} border-b border-gray-800 pb-2`}>
          {title}
        </h2>

        <div className="space-y-4 mb-8">
          <h3 className="text-white font-bold text-lg font-display">Cómo jugar:</h3>
          <ul className="space-y-3">
            {instructions.map((step, index) => (
              <li key={index} className="flex gap-3 text-gray-300 font-sans leading-relaxed text-sm md:text-base">
                <span className={`font-bold ${colorClass}`}>{index + 1}.</span>
                {step}
              </li>
            ))}
          </ul>
        </div>

        <NeonButton fullWidth onClick={handleClose} variant="pink" className="text-sm">
          ENTENDIDO
        </NeonButton>
      </div>
    </div>
  );
};