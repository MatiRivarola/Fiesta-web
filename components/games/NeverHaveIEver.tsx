import React, { useState } from 'react';
import { ChevronRight, Beer, Sparkles } from 'lucide-react';
import { NEVER_EVER_QUESTIONS } from '../../constants';
import { NeverEverCategory } from '../../types';
import { getAvailableItems, markItemAsSeen } from '../../utils/storage';
import { playSound } from '../../utils/audio';

const MODES: { id: NeverEverCategory; label: string; color: string }[] = [
    { id: 'PARTY', label: 'De Gira', color: 'text-neon-cyan' },
    { id: 'DIRTY', label: 'Zarpado', color: 'text-neon-pink' },
    { id: 'GROSS', label: 'Rancio', color: 'text-neon-green' },
    { id: 'COUPLES', label: 'Pollerudos', color: 'text-neon-purple' },
    { id: 'HARDCORE', label: 'Turbina', color: 'text-red-500' },
];

export const NeverHaveIEver: React.FC = () => {
  const [mode, setMode] = useState<NeverEverCategory | null>(null);
  const [currentQ, setCurrentQ] = useState<typeof NEVER_EVER_QUESTIONS[0] | null>(null);
  const [animate, setAnimate] = useState(false);

  const startGame = (selectedMode: NeverEverCategory) => {
      playSound('click');
      setMode(selectedMode);
      pickCard(selectedMode);
  };

  const pickCard = (selectedMode: NeverEverCategory) => {
    const pool = NEVER_EVER_QUESTIONS.filter(q => q.category === selectedMode);
    const available = getAvailableItems(pool);
    const random = available[Math.floor(Math.random() * available.length)];
    
    markItemAsSeen(random.id);
    setCurrentQ(random);
  };

  const nextCard = () => {
    if (!mode) return;
    playSound('pop');
    setAnimate(true);
    setTimeout(() => {
      pickCard(mode);
      setAnimate(false);
    }, 200);
  };

  if (!mode) {
      return (
          <div className="flex flex-col h-full justify-center items-center gap-6 animate-fade-in font-display">
              <h2 className="text-3xl font-black text-white uppercase tracking-widest text-center">
                  Elegí el Modo
              </h2>
              <div className="grid grid-cols-2 gap-4 w-full px-4">
                  {MODES.map(m => (
                      <button 
                        key={m.id}
                        onClick={() => startGame(m.id)}
                        className={`p-6 rounded-2xl border-2 border-gray-700 bg-gray-900 hover:border-neon-pink transition-all flex flex-col items-center gap-2 active:scale-95 ${m.id === 'HARDCORE' ? 'col-span-2 border-red-900 bg-red-950/20' : ''}`}
                      >
                          <span className={`text-xl font-bold ${m.color}`}>{m.label}</span>
                      </button>
                  ))}
              </div>
          </div>
      )
  }

  return (
    <div className="flex flex-col h-full justify-center items-center py-4 cursor-pointer" onClick={nextCard}>
      
      {/* Mode Indicator */}
      <div className="absolute top-20 right-4 opacity-50 text-xs font-bold border border-white px-2 py-1 rounded-full uppercase font-display">
          {MODES.find(m => m.id === mode)?.label}
      </div>

      <div className="w-full max-w-md relative aspect-[3/4]">
        {/* Card Stack Effect */}
        <div className="absolute inset-0 bg-gray-800 rounded-3xl transform translate-x-4 translate-y-4 opacity-50 border border-gray-700"></div>
        <div className="absolute inset-0 bg-gray-800 rounded-3xl transform translate-x-2 translate-y-2 opacity-75 border border-gray-700"></div>
        
        {/* Main Card */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-3xl border-2 border-neon-purple p-8 flex flex-col justify-between items-center text-center shadow-[0_0_30px_rgba(176,38,255,0.3)] transition-transform duration-200 ${animate ? 'translate-x-[150%] rotate-12 opacity-0' : 'translate-x-0 rotate-0 opacity-100'}`}
        >
          <div className="w-full flex justify-between items-start text-neon-purple/50">
            <span className="text-4xl font-black font-display">YO</span>
            <Beer />
          </div>

          <div className="flex-1 flex items-center justify-center">
             <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed font-sans drop-shadow-md">
                {currentQ?.text}
             </p>
          </div>

          <div className="w-full flex justify-between items-end text-neon-purple/50">
            <Sparkles size={20} />
            <span className="text-4xl font-black font-display">NUNCA</span>
          </div>
        </div>
      </div>
      
      <p className="mt-8 text-gray-400 animate-pulse flex items-center gap-2 font-display text-sm">
        Tocá para pasar <ChevronRight size={16} />
      </p>

      <button 
        className="mt-4 text-xs text-gray-600 uppercase underline font-display"
        onClick={(e) => { e.stopPropagation(); setMode(null); }}
      >
          Cambiar modo
      </button>
    </div>
  );
};