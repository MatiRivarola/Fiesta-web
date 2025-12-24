import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { NeonButton } from './NeonButton';
import { playSound } from '../utils/audio';

export const Disclaimer: React.FC<{ onAccept: () => void }> = ({ onAccept }) => {
  const handleAccept = () => {
      playSound('click');
      onAccept();
  }

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md w-full space-y-8 animate-fade-in">
        <div className="flex justify-center mb-6">
          <AlertTriangle className="w-20 h-20 text-neon-pink animate-pulse" />
        </div>
        
        <h1 className="text-4xl font-black text-white uppercase">Advertencia</h1>
        
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 shadow-2xl">
          <p className="text-lg text-gray-300 mb-4 leading-relaxed">
            Este juego contiene temas para adultos, humor negro y referencias al alcohol.
          </p>
          <p className="text-xl font-bold text-neon-cyan border-t border-gray-700 pt-4 mt-4">
            Bebe con responsabilidad. <br/>Solo +18 años.
          </p>
        </div>

        <NeonButton fullWidth onClick={handleAccept} variant="pink">
          ENTENDIDO, VAMOS
        </NeonButton>
      </div>
    </div>
  );
};