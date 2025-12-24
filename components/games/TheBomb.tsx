import React, { useState, useEffect, useRef } from 'react';
import { Bomb, Play, RotateCcw } from 'lucide-react';
import { NeonButton } from '../NeonButton';
import { BOMB_DATA } from '../../constants';
import { getAvailableItems, markItemAsSeen } from '../../utils/storage';
import { playSound } from '../../utils/audio';

export const TheBomb: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [isExploded, setIsExploded] = useState(false);
  const [currentPrompt, setCurrentPrompt] = useState(BOMB_DATA[0]);
  
  const timeoutRef = useRef<number | null>(null);
  const tickIntervalRef = useRef<number | null>(null);

  const startGame = () => {
    playSound('click');
    setIsActive(true);
    setIsExploded(false);
    nextPrompt();

    // Random duration between 20s and 50s
    const duration = Math.floor(Math.random() * (50000 - 20000 + 1) + 20000);

    // Ticking sound loop
    let tickSpeed = 1200;
    let elapsed = 0;
    let panicMode = false;
    
    // Clear previous intervals
    if (tickIntervalRef.current) clearInterval(tickIntervalRef.current);

    const startTicking = () => {
         // Pitch shifting based on speed
         const pitch = Math.max(1, 2 - (tickSpeed / 1200)); 
         playSound('tick_bomb', pitch);

         // Speed up logic
         if (elapsed > duration * 0.85) {
             if (!panicMode) { panicMode = true; playSound('siren'); }
             tickSpeed = 100;
         }
         else if (elapsed > duration * 0.6) tickSpeed = 400;
         else if (elapsed > duration * 0.3) tickSpeed = 800;
         
         if (isActive || elapsed < duration) {
             tickIntervalRef.current = window.setTimeout(() => {
                 elapsed += tickSpeed;
                 startTicking();
             }, tickSpeed);
         }
    };
    startTicking();

    timeoutRef.current = window.setTimeout(() => {
      explode();
    }, duration);
  };

  const nextPrompt = () => {
    playSound('pop');
    const available = getAvailableItems(BOMB_DATA);
    const random = available[Math.floor(Math.random() * available.length)];
    markItemAsSeen(random.id);
    setCurrentPrompt(random);
  };

  const explode = () => {
    setIsActive(false);
    setIsExploded(true);
    playSound('explode');
    if (tickIntervalRef.current) clearTimeout(tickIntervalRef.current);
    
    if (navigator.vibrate) {
      navigator.vibrate([1000, 500, 1000]);
    }
  };

  // Cleanup
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (tickIntervalRef.current) clearTimeout(tickIntervalRef.current);
    };
  }, []);

  if (isExploded) {
    return (
      <div className="flex flex-col items-center justify-center h-full bg-red-950/80 animate-shake">
        <Bomb className="w-48 h-48 text-red-500 mb-6 drop-shadow-[0_0_50px_rgba(255,0,0,1)]" />
        <h1 className="text-7xl font-black text-red-500 mb-4 tracking-tighter font-display">¡BOOM!</h1>
        <p className="text-4xl text-white font-bold mb-12 uppercase animate-pulse font-display">¡BEBE!</p>
        <NeonButton variant="cyan" onClick={startGame} className="flex gap-2">
          <RotateCcw /> Jugar de nuevo
        </NeonButton>
      </div>
    );
  }

  if (!isActive) {
    return (
      <div className="flex flex-col items-center justify-center h-full space-y-8 animate-fade-in">
        <div className="w-56 h-56 bg-gray-800 rounded-full flex items-center justify-center border-4 border-neon-pink shadow-[0_0_60px_rgba(255,0,255,0.4)] animate-float">
          <Bomb className="w-28 h-28 text-white" />
        </div>
        <div className="text-center max-w-xs space-y-4">
          <h2 className="text-4xl font-black text-white mb-2 italic font-display">La Bomba</h2>
          <p className="text-gray-300 leading-relaxed font-sans">
            Di una palabra relacionada, pulsa 
            <span className="text-neon-green font-bold"> PASAR </span> 
            y entrégalo antes de que explote.
          </p>
        </div>
        <NeonButton fullWidth variant="green" onClick={startGame} className="mt-8 py-6 text-2xl font-display">
          <Play className="inline mr-2 fill-current" /> ENCENDER
        </NeonButton>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full justify-between py-6 animate-pulse-fast">
      <div className="text-center mt-8">
        <p className="text-sm font-bold text-neon-pink uppercase tracking-widest mb-4 font-display">
            {currentPrompt.type === 'syllable' ? 'Palabra que contenga:' : 'Tema:'}
        </p>
        <div className="bg-gray-900 p-10 rounded-3xl border-2 border-neon-cyan shadow-[0_0_40px_rgba(0,255,255,0.3)] transform rotate-1">
          <h2 className="text-5xl font-black text-white break-words drop-shadow-lg font-display">{currentPrompt.content}</h2>
        </div>
      </div>

      <div className="w-full mt-auto pb-4">
        <button 
          onClick={nextPrompt}
          className="w-full py-12 bg-gradient-to-b from-gray-800 to-black border-4 border-neon-green text-neon-green font-black text-6xl uppercase tracking-widest active:bg-neon-green active:text-black transition-colors rounded-3xl shadow-[0_0_30px_rgba(57,255,20,0.3)] font-display"
        >
          PASAR
        </button>
      </div>
    </div>
  );
};