import React from 'react';
import { LucideIcon, Info } from 'lucide-react';
import { playSound } from '../utils/audio';

interface GameCardProps {
  title: string;
  icon: LucideIcon;
  colorName: 'pink' | 'green' | 'purple' | 'cyan';
  description: string;
  onClick: () => void;
  onInfo: () => void;
  accentColor: string;
}

const colorMap = {
  pink: { border: 'border-neon-pink', text: 'text-neon-pink', bg: 'bg-neon-pink/10' },
  green: { border: 'border-neon-green', text: 'text-neon-green', bg: 'bg-neon-green/10' },
  purple: { border: 'border-neon-purple', text: 'text-neon-purple', bg: 'bg-neon-purple/10' },
  cyan: { border: 'border-neon-cyan', text: 'text-neon-cyan', bg: 'bg-neon-cyan/10' },
};

export const GameCard: React.FC<GameCardProps> = ({ title, icon: Icon, colorName, description, onClick, onInfo, accentColor }) => {
  const styles = colorMap[colorName];

  const handleClick = () => {
    playSound('click');
    onClick();
  }

  const handleInfo = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent opening the game
    playSound('click');
    onInfo();
  }

  return (
    <button 
      onClick={handleClick}
      className="group relative w-full bg-gray-900 border border-gray-800 rounded-2xl p-5 text-left transition-all duration-300 hover:scale-[1.02] hover:border-gray-600 active:scale-95 overflow-hidden"
      style={{ boxShadow: `0 0 10px ${accentColor}10` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-xl bg-black/50 border ${styles.border} ${styles.text}`}>
            <Icon size={28} style={{ color: accentColor }} />
          </div>
          <h3 className="text-xl font-bold text-white uppercase tracking-wide font-display">{title}</h3>
        </div>

        {/* Info Button */}
        <div 
          onClick={handleInfo}
          className={`p-2 rounded-full ${styles.bg} ${styles.text} hover:bg-white hover:text-black transition-colors z-10`}
        >
          <Info size={20} />
        </div>
      </div>
      
      <p className="text-gray-400 text-sm leading-relaxed pl-1 font-sans pr-8">
        {description}
      </p>
    </button>
  );
};