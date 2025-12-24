import React, { useState, useEffect } from 'react';
import { Gavel, Fingerprint, RefreshCcw } from 'lucide-react';
import { NeonButton } from '../NeonButton';
import { COURT_QUESTIONS } from '../../constants';
import { getAvailableItems, markItemAsSeen } from '../../utils/storage';
import { playSound } from '../../utils/audio';

export const TheCourt: React.FC = () => {
  const [currentQ, setCurrentQ] = useState(COURT_QUESTIONS[0]);
  const [countdown, setCountdown] = useState<number | null>(null);

  useEffect(() => {
      nextQuestion(); // Initial load
  }, []);

  const startCountdown = () => {
    playSound('click');
    setCountdown(3);
  };

  useEffect(() => {
    if (countdown === null || countdown < 0) return;

    if (countdown > 0) {
      playSound('drum_roll'); // Tension sound
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
        playSound('gavel_hit'); // Finish sound
        if (navigator.vibrate) navigator.vibrate(500);
    }
  }, [countdown]);

  const nextQuestion = () => {
    setCountdown(null);
    const available = getAvailableItems(COURT_QUESTIONS);
    const random = available[Math.floor(Math.random() * available.length)];
    markItemAsSeen(random.id);
    setCurrentQ(random);
    playSound('pop');
  };

  return (
    <div className="flex flex-col h-full justify-between py-6">
      <div className="flex items-center justify-center gap-3 text-neon-pink mb-4 border-b border-gray-800 pb-4">
        <Gavel size={28} />
        <h2 className="text-xl font-bold uppercase tracking-widest font-display">El Tribunal</h2>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center relative">
        {countdown === null ? (
          <div className="bg-gray-900/80 p-8 rounded-2xl border border-neon-pink w-full text-center min-h-[250px] flex items-center justify-center shadow-[0_0_25px_rgba(255,0,255,0.15)] animate-fade-in">
            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight font-sans">
              {currentQ.text}
            </h3>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full w-full">
            {countdown === 0 ? (
              <div className="animate-shake flex flex-col items-center">
                 <div className="bg-neon-green p-6 rounded-full mb-6 shadow-[0_0_40px_rgba(57,255,20,0.6)]">
                    <Fingerprint className="w-24 h-24 text-black" />
                 </div>
                 <h2 className="text-6xl font-black text-white uppercase tracking-tighter font-display">¡SEÑALEN!</h2>
                 <p className="text-gray-400 mt-4 animate-pulse font-display">El más señalado bebe</p>
              </div>
            ) : (
              <h2 className="text-[12rem] font-black text-neon-pink animate-ping duration-500 opacity-80 font-display">
                {countdown}
              </h2>
            )}
          </div>
        )}
      </div>

      <div className="mt-8 space-y-4">
        {countdown === null ? (
           <NeonButton fullWidth onClick={startCountdown} variant="pink" className="py-6 text-2xl font-display">
             3, 2, 1...
           </NeonButton>
        ) : (
           <NeonButton 
                fullWidth 
                onClick={nextQuestion} 
                variant="cyan" 
                disabled={countdown > 0}
                className={countdown > 0 ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}
            >
             <RefreshCcw className="inline mr-2" /> Siguiente Pregunta
           </NeonButton>
        )}
      </div>
    </div>
  );
};