const AudioContextClass = (window.AudioContext || (window as any).webkitAudioContext);
let audioCtx: AudioContext | null = null;

const initAudio = () => {
  if (!audioCtx) {
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
};

export type SoundType = 
  | 'click'         // UI generic
  | 'pop'           // Card flip
  | 'tick_soft'     // Roulette ticking
  | 'tick_bomb'     // Bomb ticking (sharp)
  | 'explode'       // Bomb explosion (Deep)
  | 'siren'         // Bomb panic
  | 'drum_roll'     // Court countdown
  | 'gavel_hit'     // Court final
  | 'win'           // Success
  | 'lose';         // Fail/Drink

export const playSound = (type: SoundType, pitchMod: number = 1) => {
  const ctx = initAudio();
  if (!ctx) return;

  const t = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gainNode = ctx.createGain();

  osc.connect(gainNode);
  gainNode.connect(ctx.destination);

  switch (type) {
    case 'click':
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, t);
      osc.frequency.exponentialRampToValueAtTime(300, t + 0.05);
      gainNode.gain.setValueAtTime(0.2, t);
      gainNode.gain.exponentialRampToValueAtTime(0.01, t + 0.05);
      osc.start(t);
      osc.stop(t + 0.05);
      break;

    case 'pop':
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(300, t);
      osc.frequency.linearRampToValueAtTime(500, t + 0.05);
      gainNode.gain.setValueAtTime(0.2, t);
      gainNode.gain.linearRampToValueAtTime(0.01, t + 0.1);
      osc.start(t);
      osc.stop(t + 0.1);
      break;

    case 'tick_soft':
      osc.type = 'square';
      // Low pass filter to make it softer
      const filterS = ctx.createBiquadFilter();
      filterS.type = 'lowpass';
      filterS.frequency.value = 400;
      osc.disconnect();
      osc.connect(filterS);
      filterS.connect(gainNode);

      osc.frequency.setValueAtTime(200, t);
      gainNode.gain.setValueAtTime(0.1, t);
      gainNode.gain.exponentialRampToValueAtTime(0.01, t + 0.03);
      osc.start(t);
      osc.stop(t + 0.03);
      break;

    case 'tick_bomb':
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(800 * pitchMod, t); 
      gainNode.gain.setValueAtTime(0.15, t);
      gainNode.gain.exponentialRampToValueAtTime(0.01, t + 0.05);
      osc.start(t);
      osc.stop(t + 0.05);
      break;

    case 'siren':
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(600, t);
      osc.frequency.linearRampToValueAtTime(1200, t + 0.3);
      osc.frequency.linearRampToValueAtTime(600, t + 0.6);
      gainNode.gain.setValueAtTime(0.1, t);
      gainNode.gain.linearRampToValueAtTime(0.1, t + 0.6);
      gainNode.gain.exponentialRampToValueAtTime(0.01, t + 0.7);
      osc.start(t);
      osc.stop(t + 0.7);
      break;

    case 'drum_roll':
      // Synthesizing a snare/timpani hit
      const noiseBuffer = ctx.createBuffer(1, ctx.sampleRate * 0.1, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < noiseBuffer.length; i++) {
        output[i] = Math.random() * 2 - 1;
      }
      const noise = ctx.createBufferSource();
      noise.buffer = noiseBuffer;
      const noiseFilter = ctx.createBiquadFilter();
      noiseFilter.type = 'lowpass';
      noiseFilter.frequency.value = 400;
      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.3, t);
      noiseGain.gain.exponentialRampToValueAtTime(0.01, t + 0.1);
      
      noise.connect(noiseFilter);
      noiseFilter.connect(ctx.destination); // Direct connect for clarity or via gain
      noise.start(t);
      break;

    case 'gavel_hit':
      // Heavy impact
      osc.type = 'square';
      osc.frequency.setValueAtTime(150, t);
      osc.frequency.exponentialRampToValueAtTime(40, t + 0.3);
      gainNode.gain.setValueAtTime(0.8, t);
      gainNode.gain.exponentialRampToValueAtTime(0.01, t + 0.4);
      osc.start(t);
      osc.stop(t + 0.4);
      break;

    case 'explode':
      // Complex Explosion
      const bufferSize = ctx.sampleRate * 2.5; 
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      const expNoise = ctx.createBufferSource();
      expNoise.buffer = buffer;
      
      const expFilter = ctx.createBiquadFilter();
      expFilter.type = 'lowpass';
      expFilter.frequency.setValueAtTime(1200, t);
      expFilter.frequency.exponentialRampToValueAtTime(50, t + 1.5);

      const expGain = ctx.createGain();
      expGain.gain.setValueAtTime(1.5, t);
      expGain.gain.exponentialRampToValueAtTime(0.01, t + 2.0);

      expNoise.connect(expFilter);
      expFilter.connect(expGain);
      expGain.connect(ctx.destination);
      expNoise.start(t);

      // Sub-bass impact
      const subOsc = ctx.createOscillator();
      subOsc.type = 'sine';
      subOsc.frequency.setValueAtTime(80, t);
      subOsc.frequency.exponentialRampToValueAtTime(30, t + 1);
      const subGain = ctx.createGain();
      subGain.gain.setValueAtTime(0.8, t);
      subGain.gain.exponentialRampToValueAtTime(0.01, t + 1);
      subOsc.connect(subGain);
      subGain.connect(ctx.destination);
      subOsc.start(t);
      subOsc.stop(t + 1);
      break;

    case 'win':
      osc.type = 'triangle';
      // Arpeggio
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C Major
      const now = t;
      notes.forEach((freq, i) => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = 'triangle';
        o.frequency.value = freq;
        o.connect(g);
        g.connect(ctx.destination);
        g.gain.setValueAtTime(0.1, now + i*0.08);
        g.gain.exponentialRampToValueAtTime(0.001, now + i*0.08 + 0.3);
        o.start(now + i*0.08);
        o.stop(now + i*0.08 + 0.3);
      });
      break;

    case 'lose':
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(200, t);
      osc.frequency.linearRampToValueAtTime(100, t + 0.5);
      gainNode.gain.setValueAtTime(0.3, t);
      gainNode.gain.linearRampToValueAtTime(0.01, t + 0.5);
      osc.start(t);
      osc.stop(t + 0.5);
      break;
  }
};