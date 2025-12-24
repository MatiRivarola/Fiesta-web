import React, { useState } from 'react';
import { GameView } from './types';
import { Skull, Bomb, Beer, Gavel, ArrowLeft, Zap } from 'lucide-react';
import { Disclaimer } from './components/Disclaimer';
import { GameCard } from './components/GameCard';
import { InfoModal } from './components/InfoModal';
import { ToxicRoulette } from './components/games/ToxicRoulette';
import { TheBomb } from './components/games/TheBomb';
import { NeverHaveIEver } from './components/games/NeverHaveIEver';
import { TheCourt } from './components/games/TheCourt';
import { playSound } from './utils/audio';

const INSTRUCTIONS = {
  ROULETTE: [
    "Ingresa los nombres de todos los jugadores.",
    "Elige una categoría: Suave, Caliente, Tóxica o Absurda.",
    "Pulsa 'GIRAR' y reza. La app elegirá una víctima y un reto al azar.",
    "Si cumples el reto, pulsa 'Cumplido'.",
    "Si te niegas, pulsa 'Gallina' y bebe como castigo."
  ],
  BOMB: [
    "Formad un círculo.",
    "Dale a 'Encender'. Aparecerá una sílaba (ej: PRO) o un tema.",
    "Di una palabra válida y pulsa el botón 'PASAR' rápidamente.",
    "Pásale el móvil al de tu derecha.",
    "El tiempo es aleatorio. Si explota en tu mano... ¡BEBES!"
  ],
  NEVER_EVER: [
    "Elige el modo de juego (Fiesta, +18, Parejas, etc.).",
    "Lee la tarjeta en voz alta.",
    "Si tú has hecho lo que dice la tarjeta, debes beber.",
    "Toca la pantalla para pasar a la siguiente confesión.",
    "Prepárate para descubrir los secretos de tus amigos."
  ],
  COURT: [
    "Aparecerá una pregunta polémica (ej: ¿Quién iría preso?).",
    "Alguien pulsa 'Iniciar cuenta atrás'.",
    "Al terminar la cuenta (3, 2, 1...), todos debéis señalar a una persona a la vez.",
    "La persona más señalada es declarada CULPABLE y debe beber.",
    "Discutid por qué habéis elegido a esa persona."
  ]
};

interface ModalState {
  isOpen: boolean;
  title: string;
  instructions: string[];
  color: string;
  borderColor: string;
}

const App: React.FC = () => {
  const [view, setView] = useState<GameView>(GameView.MENU);
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(false);
  const [modal, setModal] = useState<ModalState>({ 
    isOpen: false, title: '', instructions: [], color: '', borderColor: '' 
  });

  if (!disclaimerAccepted) {
    return <Disclaimer onAccept={() => setDisclaimerAccepted(true)} />;
  }

  const goBack = () => {
      playSound('click');
      setView(GameView.MENU);
  }

  const openInfo = (title: string, instructions: string[], color: string, borderColor: string) => {
    setModal({ isOpen: true, title, instructions, color, borderColor });
  };

  const renderGame = () => {
    switch (view) {
      case GameView.ROULETTE: return <ToxicRoulette />;
      case GameView.BOMB: return <TheBomb />;
      case GameView.NEVER_EVER: return <NeverHaveIEver />;
      case GameView.COURT: return <TheCourt />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg text-white font-sans selection:bg-neon-pink selection:text-white pb-safe">
      <InfoModal 
        isOpen={modal.isOpen}
        onClose={() => setModal({ ...modal, isOpen: false })}
        title={modal.title}
        instructions={modal.instructions}
        colorClass={modal.color}
        borderColorClass={modal.borderColor}
      />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-10 bg-black/90 backdrop-blur-md border-b border-gray-800 p-4 h-16 flex items-center justify-between shadow-md">
        {view !== GameView.MENU ? (
          <button 
            onClick={goBack}
            className="p-2 -ml-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft />
          </button>
        ) : (
          <div className="w-8"></div> 
        )}
        
        <h1 className="text-xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-cyan flex items-center gap-2 font-display">
           <Zap className="text-neon-green w-5 h-5 fill-current animate-pulse" /> FIESTA HUB
        </h1>

        <div className="w-8"></div>
      </header>

      {/* Main Content */}
      <main className="pt-20 pb-8 px-4 min-h-screen max-w-lg mx-auto flex flex-col">
        {view === GameView.MENU ? (
          <div className="space-y-4 animate-fade-in pb-10">
            <GameCard 
              title="Ruleta Tóxica" 
              description="Verdades incómodas, retos y caos social."
              icon={Skull}
              accentColor="#ff00ff"
              colorName="pink"
              onClick={() => setView(GameView.ROULETTE)}
              onInfo={() => openInfo("Ruleta Tóxica", INSTRUCTIONS.ROULETTE, "text-neon-pink", "border-neon-pink")}
            />
            <GameCard 
              title="La Bomba +18" 
              description="Piensa rápido o bebe. Tic, tac... ¡BOOM!"
              icon={Bomb}
              accentColor="#39ff14"
              colorName="green"
              onClick={() => setView(GameView.BOMB)}
              onInfo={() => openInfo("La Bomba", INSTRUCTIONS.BOMB, "text-neon-green", "border-neon-green")}
            />
            <GameCard 
              title="Yo Nunca Picante" 
              description="Confesiones, salseo y modos +18."
              icon={Beer}
              accentColor="#b026ff"
              colorName="purple"
              onClick={() => setView(GameView.NEVER_EVER)}
              onInfo={() => openInfo("Yo Nunca", INSTRUCTIONS.NEVER_EVER, "text-neon-purple", "border-neon-purple")}
            />
            <GameCard 
              title="El Tribunal" 
              description="Juzga a tus amigos. Cuenta atrás y... ¡SEÑALEN!"
              icon={Gavel}
              accentColor="#00ffff"
              colorName="cyan"
              onClick={() => setView(GameView.COURT)}
              onInfo={() => openInfo("El Tribunal", INSTRUCTIONS.COURT, "text-neon-cyan", "border-neon-cyan")}
            />
            
            <div className="pt-8 text-center opacity-30 text-xs">
              <p>Fiesta Hub v2.1 • Mobile Party Experience</p>
            </div>
          </div>
        ) : (
          <div className="flex-1 h-full">
            {renderGame()}
          </div>
        )}
      </main>
    </div>
  );
};

export default App;