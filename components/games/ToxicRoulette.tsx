import React, { useState } from 'react';
import { Users, Skull, CheckCircle, XCircle, Settings, Play } from 'lucide-react';
import { NeonButton } from '../NeonButton';
import { Player, RouletteCategory } from '../../types';
import { ROULETTE_TASKS } from '../../constants';
import { playSound } from '../../utils/audio';
import { getAvailableItems, markItemAsSeen } from '../../utils/storage';

const CATEGORIES: { id: RouletteCategory; label: string; color: string }[] = [
  { id: 'ICEBREAKER', label: 'Tranca', color: 'text-neon-cyan' },
  { id: 'HOT', label: 'Picante', color: 'text-neon-pink' },
  { id: 'TOXIC', label: 'Tóxico', color: 'text-neon-green' },
  { id: 'ABSURD', label: 'Bizarro', color: 'text-neon-yellow' },
];

export const ToxicRoulette: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<RouletteCategory>('ICEBREAKER');
  const [gameState, setGameState] = useState<'SETUP' | 'SPINNING' | 'RESULT'>('SETUP');
  const [currentResult, setCurrentResult] = useState<{player: Player, task: typeof ROULETTE_TASKS[0]} | null>(null);

  const addPlayer = () => {
    if (inputValue.trim()) {
      playSound('pop');
      setPlayers([...players, { id: Date.now().toString(), name: inputValue.trim() }]);
      setInputValue('');
    }
  };

  const removePlayer = (id: string) => {
      playSound('click');
      setPlayers(players.filter(pl => pl.id !== id));
  }

  const spin = () => {
    if (players.length < 2) return;
    playSound('click');
    setGameState('SPINNING');
    
    // Filter tasks by category and history
    const pool = ROULETTE_TASKS.filter(t => t.category === selectedCategory);
    const available = getAvailableItems(pool);
    
    // Fake spinning logic
    let spins = 0;
    const interval = setInterval(() => {
        playSound('tick_soft');
        spins++;
        if (spins > 15) {
            clearInterval(interval);
            const randomPlayer = players[Math.floor(Math.random() * players.length)];
            const randomTask = available[Math.floor(Math.random() * available.length)];
            
            markItemAsSeen(randomTask.id);
            setCurrentResult({ player: randomPlayer, task: randomTask });
            playSound('win');
            setGameState('RESULT');
        }
    }, 100);
  };

  const handleAction = (type: 'done' | 'fail') => {
      if (type === 'done') playSound('win');
      else playSound('lose'); 
      spin();
  }

  if (gameState === 'SETUP') {
    return (
      <div className="flex flex-col h-full space-y-4 animate-fade-in font-sans">
        <div className="text-center">
          <h2 className="text-3xl font-black text-neon-pink uppercase tracking-widest flex justify-center items-center gap-2 font-display">
            <Users /> Los Pibes
          </h2>
          <p className="text-gray-400 text-xs mt-1">Sumá a la gilada (Mínimo 2)</p>
        </div>

        {/* Category Selector */}
        <div className="grid grid-cols-4 gap-1 mb-2">
          {CATEGORIES.map(cat => (
             <button
               key={cat.id}
               onClick={() => { playSound('click'); setSelectedCategory(cat.id); }}
               className={`py-2 rounded-lg text-[10px] md:text-xs font-bold border transition-all ${selectedCategory === cat.id ? 'bg-gray-800 border-white text-white scale-105 shadow-lg' : 'border-gray-800 text-gray-500 hover:border-gray-600'}`}
             >
                {cat.label}
             </button>
          ))}
        </div>
        <div className={`text-center text-sm font-bold animate-pulse ${CATEGORIES.find(c => c.id === selectedCategory)?.color}`}>
             MODO: {CATEGORIES.find(c => c.id === selectedCategory)?.label}
        </div>

        <div className="flex gap-2">
          <input 
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addPlayer()}
            placeholder="Nombre del culiau..."
            className="flex-1 bg-dark-card border border-gray-700 text-white p-4 rounded-xl focus:border-neon-pink focus:outline-none transition-colors"
          />
          <NeonButton onClick={addPlayer} variant="cyan" className="!px-4">+</NeonButton>
        </div>

        <div className="flex-1 overflow-y-auto space-y-2 p-2 max-h-[35vh]">
          {players.map((p) => (
            <div key={p.id} className="bg-gray-900 p-3 rounded-lg border border-gray-800 flex justify-between items-center animate-fade-in">
              <span className="font-bold text-lg text-white">{p.name}</span>
              <button 
                onClick={() => removePlayer(p.id)}
                className="text-red-500 p-2"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-2">
          <NeonButton 
            fullWidth 
            onClick={spin} 
            disabled={players.length < 2}
            variant={players.length < 2 ? 'cyan' : 'pink'}
          >
            {players.length < 2 ? 'Faltan jugadores che' : '¡DALE MECHA!'}
          </NeonButton>
        </div>
      </div>
    );
  }

  if (gameState === 'SPINNING') {
    return (
      <div className="flex flex-col items-center justify-center h-full space-y-8">
        <div className="w-40 h-40 border-8 border-t-neon-pink border-r-neon-purple border-b-neon-cyan border-l-neon-green rounded-full animate-spin shadow-[0_0_50px_rgba(255,0,255,0.5)]" />
        <h2 className="text-3xl font-bold animate-pulse text-white font-display">Buscando víctima...</h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full items-center justify-between py-6 animate-fade-in">
      <div className="text-center space-y-6 w-full relative">
        <button 
            onClick={() => setGameState('SETUP')}
            className="absolute -top-10 right-0 text-gray-500 hover:text-white"
        >
            <Settings size={24} />
        </button>

        <div className="bg-gradient-to-r from-purple-900 to-pink-900 p-1 rounded-2xl w-full transform transition-all hover:scale-105 shadow-2xl">
          <div className="bg-black p-8 rounded-xl border border-neon-pink/30">
            <p className="text-sm text-gray-400 uppercase tracking-widest mb-2 font-display">Le tocó a</p>
            <h1 className="text-5xl md:text-6xl font-black text-white truncate drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] font-display">
                {currentResult?.player.name}
            </h1>
          </div>
        </div>

        <div className="py-8 px-2">
          <Skull className="w-20 h-20 mx-auto text-red-500 mb-6 animate-bounce" />
          <p className="text-2xl md:text-3xl font-bold text-neon-cyan leading-relaxed font-sans drop-shadow-md">
            "{currentResult?.task.text}"
          </p>
        </div>
      </div>

      <div className="flex flex-col w-full gap-4 mt-auto">
        <NeonButton 
          fullWidth 
          variant="green"
          onClick={() => handleAction('done')}
          className="flex items-center justify-center gap-2"
        >
          <CheckCircle className="w-6 h-6" /> De una, hecho
        </NeonButton>
        <NeonButton 
          fullWidth 
          variant="red"
          onClick={() => handleAction('fail')}
          className="flex items-center justify-center gap-2 opacity-90"
        >
          <XCircle className="w-6 h-6" /> Arrugué (CHUPÁ)
        </NeonButton>
      </div>
    </div>
  );
};