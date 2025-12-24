import React, { useState, useEffect, useRef } from 'react';
import { Bomb, Play, RotateCcw, Users, Plus, Minus } from 'lucide-react';
import { NeonButton } from '../NeonButton';
import { BOMB_DATA } from '../../constants';
import { getAvailableItems, markItemAsSeen } from '../../utils/storage';
import { playSound } from '../../utils/audio';

export const TheBomb: React.FC = () => {
  const [gameState, setGameState] = useState<'SETUP' | 'ACTIVE' | 'EXPLODED'>('SETUP');
  const [playerCount, setPlayerCount] = useState(4);
  const [currentPrompt, setCurrentPrompt] = useState(BOMB_DATA[0]);
  
  const timeoutRef = useRef<number | null>(null);
  const tickIntervalRef = useRef<number | null>(null);

  const adjustPlayers = (delta: number) => {
      playSound('click');
      setPlayerCount(prev => Math.max(2, Math.min(20, prev + delta)));
  }

  const startGame = () => {
    playSound('click');
    setGameState('ACTIVE');
    nextPrompt();

    // Logic: Ensure there is enough time for players.
    // Min time: 4 seconds per player (fast round)
    // Max time: 10 seconds per player (slow round)
    // Example: 5 players -> Min 20s, Max 50s.
    const minTime = Math.max(15000, playerCount * 4000); // Minimum 15s absolute
    const maxTime = Math.max(30000, playerCount * 10000); // Minimum 30s absolute
    
    const duration = Math.floor(Math.random() * (maxTime - minTime + 1) + minTime);

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
         
         if (elapsed < duration) {
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
    setGameState('EXPLODED');
    playSound('explode');
    if (tickIntervalRef.current) clearTimeout(tickIntervalRef.current);
    
    if (navigator.vibrate) {
      navigator.vibrate([1000, 500, 1000]);
    }
  };

  const resetGame = () => {
      playSound('click');
      setGameState('SETUP');
  }

  // Cleanup
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (tickIntervalRef.current) clearTimeout(tickIntervalRef.current);
    };
  }, []);

  if (gameState === 'EXPLODED') {
    return (
      <div className="flex flex-col items-center justify-center h-full bg-red-950/80 animate-shake">
        <Bomb className="w-48 h-48 text-red-500 mb-6 drop-shadow-[0_0_50px_rgba(255,0,0,1)]" />
        <h1 className="text-7xl font-black text-red-500 mb-4 tracking-tighter font-display">¡BOOM!</h1>
        <p className="text-4xl text-white font-bold mb-12 uppercase animate-pulse font-display">¡CHUPÁ!</p>
        <NeonButton variant="cyan" onClick={resetGame} className="flex gap-2">
          <RotateCcw /> Otra ronda
        </NeonButton>
      </div>
    );
  }

  if (gameState === 'SETUP') {
    return (
      <div className="flex flex-col items-center justify-center h-full space-y-8 animate-fade-in font-display">
        <div className="w-40 h-40 bg-gray-800 rounded-full flex items-center justify-center border-4 border-neon-green shadow-[0_0_60px_rgba(57,255,20,0.3)] animate-float">
          <Bomb className="w-20 h-20 text-white" />
        </div>
        
        <div className="text-center">
            <h2 className="text-3xl font-black text-white mb-2">LA BOMBA</h2>
            <p className="text-gray-400 font-sans text-sm px-4">Calculamos el tiempo según cuántos giles jueguen.</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 w-full max-w-xs text-center">
            <label className="text-neon-green font-bold text-sm tracking-widest mb-4 block">CANTIDAD DE JUGADORES</label>
            <div className="flex items-center justify-between gap-4">
                <button 
                    onClick={() => adjustPlayers(-1)}
                    className="w-12 h-12 rounded-full border-2 border-gray-600 flex items-center justify-center text-white hover:border-white active:scale-95 transition-all"
                >
                    <Minus />
                </button>
                <span className="text-5xl font-black text-white">{playerCount}</span>
                <button 
                    onClick={() => adjustPlayers(1)}
                    className="w-12 h-12 rounded-full border-2 border-white bg-white text-black flex items-center justify-center hover:bg-gray-200 active:scale-95 transition-all"
                >
                    <Plus />
                </button>
            </div>
        </div>

        <NeonButton fullWidth variant="green" onClick={startGame} className="mt-4 py-6 text-2xl">
          <Play className="inline mr-2 fill-current" /> PRENDÉ LA MECHA
        </NeonButton>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full justify-between py-6 animate-pulse-fast">
      <div className="text-center mt-8">
        <p className="text-sm font-bold text-neon-pink uppercase tracking-widest mb-4 font-display">
            {currentPrompt.type === 'syllable' ? 'Palabra que tenga:' : 'Tema:'}
        </p>
        <div className="bg-gray-900 p-10 rounded-3xl border-2 border-neon-cyan shadow-[0_0_40px_rgba(0,255,255,0.3)] transform rotate-1">
          <h2 className="text-5xl font-black text-white break-words drop-shadow-lg font-display">{currentPrompt.content}</h2>
        </div>
      </div>

      <div className="w-full mt-auto pb-4">
        <button 
          onClick={nextPrompt}
          className="w-full py-12 bg-gradient-to-b from-gray-800 to-black border-4 border-neon-green text-neon-green font-black text-5xl md:text-6xl uppercase tracking-widest active:bg-neon-green active:text-black transition-colors rounded-3xl shadow-[0_0_30px_rgba(57,255,20,0.3)] font-display"
        >
          PASÁ CULIAU
        </button>
      </div>
    </div>
  );
};