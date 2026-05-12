"use client";

import { useState, useEffect } from 'react';
import { Info, Navigation, Activity, Play, Square, Volume2 } from 'lucide-react';

// Sound Synthesizer to create a whistle effect without needing MP3 files
const playWhistle = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const AudioC = window.AudioContext || (window as any).webkitAudioContext;
  if (!AudioC) return;
  const ctx = new AudioC();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.type = 'sine';
  osc.frequency.setValueAtTime(2000, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(3000, ctx.currentTime + 0.1);
  osc.frequency.setValueAtTime(2000, ctx.currentTime + 0.2);
  osc.frequency.exponentialRampToValueAtTime(3000, ctx.currentTime + 0.3);
  const lfo = ctx.createOscillator();
  lfo.type = 'sine';
  lfo.frequency.value = 50;
  const lfoGain = ctx.createGain();
  lfoGain.gain.value = 200;
  lfo.connect(lfoGain);
  lfoGain.connect(osc.frequency);
  lfo.start();
  lfo.stop(ctx.currentTime + 0.5);
  gain.gain.setValueAtTime(0, ctx.currentTime);
  gain.gain.linearRampToValueAtTime(0.5, ctx.currentTime + 0.05);
  gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
  osc.start();
  osc.stop(ctx.currentTime + 0.5);
};

export default function PregameItinerary() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [activeSectionIdx, setActiveSectionIdx] = useState<number | null>(null);

  const sections = [
    {
      time: '5:00 - 5:15 PM',
      title: 'Show Up & Settle In',
      durationMins: 15,
      color: 'bg-slate-100',
      activeColor: 'border-rose-500 bg-slate-100',
      icon: <Info size={18} className="text-slate-600" />,
      items: [
        'Players drop bags, switch to cleats.',
        'Transition from "school brain" to "softball brain".',
        'Coach check-in for injuries and vibes.'
      ]
    },
    {
      time: '5:15 - 5:22 PM',
      title: 'Dynamic Warm-Up & Arm Care',
      durationMins: 7,
      color: 'bg-emerald-50',
      activeColor: 'border-rose-500 bg-emerald-100',
      icon: <Activity size={18} className="text-emerald-600" />,
      items: [
        'Dynamic Lines (5m): High knees, butt kicks, frankensteins, side shuffles, 75% sprints.',
        'Arm Care (2m): J-Bands on the fence (modern standard for shoulder health).'
      ]
    },
    {
      time: '5:22 - 5:30 PM',
      title: 'Intentional Throwing',
      durationMins: 8,
      color: 'bg-blue-50',
      activeColor: 'border-rose-500 bg-blue-100',
      icon: <Navigation size={18} className="text-blue-600" />,
      items: [
        'Progression (5m): One-knee to long toss.',
        'Quick Catch Challenge (3m): Pair up 30ft apart. Clean catches in 60s. Fast transfers.'
      ]
    },
    {
      time: '5:30 - 5:40 PM',
      title: 'High-Energy Defensive Drills',
      durationMins: 10,
      color: 'bg-amber-50',
      activeColor: 'border-rose-500 bg-amber-100',
      icon: <Activity size={18} className="text-amber-600" />,
      items: [
        'Short Hops (3m): 10ft apart tough bounces. Forehand, backhand, center.',
        'Star Drill (7m): Form pentagon. Constant motion, loud communication ("Ball!").'
      ]
    },
    {
      time: '5:40 - 5:52 PM',
      title: 'Pre-Game Hitting & Battery',
      durationMins: 12,
      color: 'bg-purple-50',
      activeColor: 'border-rose-500 bg-purple-100',
      icon: <Activity size={18} className="text-purple-600" />,
      items: [
        'Pitchers/Catchers to bullpen. Throw fastballs, spin pitches.',
        'Station A: Tees with Heavy Balls (drive through core).',
        'Station B: Rapid Front-Toss w/ Wiffles (timing and aggression).'
      ]
    },
    {
      time: '5:52 - 6:00 PM',
      title: 'Hydration & Hype',
      durationMins: 8,
      color: 'bg-rose-50',
      activeColor: 'border-rose-500 bg-rose-100',
      icon: <Info size={18} className="text-rose-600" />,
      items: [
        'Water and final bathroom runs.',
        'Coach message (focus on aggressive baserunning).',
        'Team Chant & Sprint to positions!'
      ]
    }
  ];

  const totalDurationMins = sections.reduce((acc, curr) => acc + curr.durationMins, 0);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isRunning) {
      interval = setInterval(() => {
        setElapsed(prev => {
          const nextVal = prev + 1;
          let runningMinutes = 0;
          let currentSection = -1;
          const currentMinutes = nextVal / 60;
          
          for (let i = 0; i < sections.length; i++) {
            runningMinutes += sections[i].durationMins;
            if (currentMinutes < runningMinutes) {
              currentSection = i;
              break;
            }
          }
          
          if (currentSection !== -1 && activeSectionIdx !== currentSection) {
             if (nextVal > 1 && typeof activeSectionIdx === 'number') {
                playWhistle();
             }
             setActiveSectionIdx(currentSection);
          }
          
          if (currentMinutes >= totalDurationMins) {
             setIsRunning(false);
             playWhistle();
             return totalDurationMins * 60;
          }
          
          return nextVal;
        });
      }, 1000);
    }
    return () => {
        if (interval) clearInterval(interval);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRunning, activeSectionIdx, totalDurationMins]);

  const toggleTimer = () => {
    if (!isRunning && elapsed === 0) {
      setActiveSectionIdx(0);
      playWhistle();
    }
    setIsRunning(!isRunning);
  };

  const formatTime = (totalSeconds: number) => {
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="p-4 bg-slate-50 min-h-screen pb-24">
      <div className="mb-6 flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">vs. Sparta</h1>
          <p className="text-slate-500 font-medium">May 12 • 6:00 PM First Pitch</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 mb-6 sticky top-[60px] z-10">
        <div className="flex justify-between items-center">
            <div>
              <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Live Coach Timer</p>
              <div className="text-3xl font-black font-mono text-slate-800 tracking-tight">
                {formatTime(elapsed)} <span className="text-lg text-slate-400 font-medium">/ 60:00</span>
              </div>
            </div>
            
            <button 
                onClick={toggleTimer}
                className={`w-14 h-14 rounded-full flex items-center justify-center shadow-md transition-colors ${isRunning ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
            >
               {isRunning ? <Square fill="currentColor" size={20} /> : <Play fill="currentColor" size={24} className="ml-1" />}
            </button>
        </div>
        
        {isRunning && (
            <div className="mt-4 flex items-center gap-2 text-xs font-bold text-blue-600 bg-blue-50 px-3 py-2 rounded-lg">
                <Volume2 size={16} className="animate-pulse" />
                Keep app open & sound up for whistle alerts!
            </div>
        )}
      </div>

      <div className="space-y-4">
        {sections.map((sec, i) => {
          const isActive = activeSectionIdx === i;
          return (
            <div 
                key={i} 
                className={`border-2 rounded-xl overflow-hidden shadow-sm transition-all duration-300 ${isActive ? sec.activeColor : `border-slate-200 ${sec.color}`} ${isActive ? 'scale-[1.02] shadow-md z-0 opacity-100' : 'opacity-70'}`}
            >
              <div className={`p-3 flex justify-between items-center ${isActive ? 'bg-white/50 border-b border-rose-500/20' : 'border-b border-white/50'}`}>
                <div className="flex items-center gap-2">
                  {sec.icon}
                  <span className={`font-semibold ${isActive ? 'text-rose-600' : 'text-slate-800'}`}>{sec.time}</span>
                </div>
                <span className={`text-xs font-bold px-2 py-1 rounded-full ${isActive ? 'bg-rose-500 text-white' : 'bg-white/60 text-slate-600'}`}>
                  {sec.durationMins} mins
                </span>
              </div>
              <div className="p-4 pt-3 bg-white">
                <h3 className="font-bold text-lg mb-2 text-slate-800">{sec.title}</h3>
                <ul className="space-y-2">
                  {sec.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                      <div className={`mt-1 min-w-1.5 h-1.5 rounded-full ${isActive ? 'bg-rose-500 animate-pulse' : 'bg-slate-400'}`}></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}