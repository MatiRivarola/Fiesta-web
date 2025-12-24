import React, { useEffect, useState } from 'react';
import { Download, X } from 'lucide-react';
import { NeonButton } from './NeonButton';
import { playSound } from '../utils/audio';

export const InstallPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e);
      // Update UI notify the user they can install the PWA
      setIsVisible(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstall = async () => {
    playSound('click');
    if (!deferredPrompt) return;

    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);

    // We've used the prompt, and can't use it again, throw it away
    setDeferredPrompt(null);
    setIsVisible(false);
  };

  const handleClose = () => {
    playSound('click');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 animate-float">
      <div className="bg-black/95 backdrop-blur-md border-2 border-neon-cyan rounded-2xl p-4 shadow-[0_0_20px_rgba(0,255,255,0.4)] flex items-center justify-between gap-4">
        <button 
            onClick={handleClose} 
            className="absolute -top-2 -right-2 bg-gray-800 rounded-full p-1 text-white border border-gray-600 hover:bg-gray-700"
        >
            <X size={16} />
        </button>
        
        <div className="flex-1">
            <h3 className="text-neon-cyan font-black uppercase font-display text-sm mb-1">
                ¿Te cabe la App?
            </h3>
            <p className="text-gray-300 text-xs font-sans">
                Instalala para que no se te corte la previa si te quedás sin datos, culiau.
            </p>
        </div>

        <NeonButton 
            onClick={handleInstall} 
            variant="cyan" 
            className="!py-2 !px-3 !text-xs flex flex-col items-center gap-1 min-w-[80px]"
        >
            <Download size={18} />
            INSTALAR
        </NeonButton>
      </div>
    </div>
  );
};