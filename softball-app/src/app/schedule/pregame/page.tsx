import { Info, Navigation, Activity } from 'lucide-react';

export default function PregameItinerary() {
  const sections = [
    {
      time: '5:00 - 5:15 PM',
      title: 'Show Up & Settle In',
      duration: '15 mins',
      color: 'bg-slate-100',
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
      duration: '7 mins',
      color: 'bg-emerald-50',
      icon: <Activity size={18} className="text-emerald-600" />,
      items: [
        'Dynamic Lines (5m): High knees, butt kicks, frankensteins, side shuffles, 75% sprints.',
        'Arm Care (2m): J-Bands on the fence (modern standard for shoulder health).'
      ]
    },
    {
      time: '5:22 - 5:30 PM',
      title: 'Intentional Throwing',
      duration: '8 mins',
      color: 'bg-blue-50',
      icon: <Navigation size={18} className="text-blue-600" />,
      items: [
        'Progression (5m): One-knee to long toss.',
        'Quick Catch Challenge (3m): Pair up 30ft apart. Clean catches in 60s. Fast transfers.'
      ]
    },
    {
      time: '5:30 - 5:40 PM',
      title: 'High-Energy Defensive Drills',
      duration: '10 mins',
      color: 'bg-amber-50',
      icon: <Activity size={18} className="text-amber-600" />,
      items: [
        'Short Hops (3m): 10ft apart tough bounces. Forehand, backhand, center.',
        'Star Drill (7m): Form pentagon. Constant motion, loud communication ("Ball!").'
      ]
    },
    {
      time: '5:40 - 5:52 PM',
      title: 'Pre-Game Hitting & Battery',
      duration: '12 mins',
      color: 'bg-purple-50',
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
      duration: '8 mins',
      color: 'bg-rose-50',
      icon: <Info size={18} className="text-rose-600" />,
      items: [
        'Water and final bathroom runs.',
        'Coach message (focus on aggressive baserunning).',
        'Team Chant & Sprint to positions!'
      ]
    }
  ];

  return (
    <div className="p-4 bg-slate-50 min-h-screen pb-24">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Game vs. Thunder</h1>
        <p className="text-slate-500 font-medium">May 12 • 6:00 PM First Pitch</p>
      </div>

      <div className="space-y-4">
        {sections.map((sec, i) => (
          <div key={i} className={`border border-slate-200 rounded-xl overflow-hidden ${sec.color} shadow-sm`}>
            <div className="p-3 border-b border-white/50 flex justify-between items-center">
              <div className="flex items-center gap-2">
                {sec.icon}
                <span className="font-semibold text-slate-800">{sec.time}</span>
              </div>
              <span className="text-xs font-bold px-2 py-1 bg-white/60 rounded-full text-slate-600">
                {sec.duration}
              </span>
            </div>
            <div className="p-4 pt-3 bg-white">
              <h3 className="font-bold text-lg mb-2 text-slate-800">{sec.title}</h3>
              <ul className="space-y-2">
                {sec.items.map((item, idx) => (
                  <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                    <div className="mt-1 min-w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}