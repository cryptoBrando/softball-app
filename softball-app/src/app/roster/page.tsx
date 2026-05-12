import { Shield } from 'lucide-react';

export default function Roster() {
  const players = [
    { number: 4, name: 'Mia Johnson', pos: 'P / 1B', notes: 'Great drop ball.' },
    { number: 7, name: 'Sarah Davis', pos: 'SS / 2B', notes: 'Leadoff hitter. Fast.' },
    { number: 12, name: 'Emma Wilson', pos: 'C / 3B', notes: 'Cannon for an arm.' },
  ];

  return (
    <div className="p-4 bg-slate-50 min-h-screen pb-24">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Team Roster</h1>
        <p className="text-slate-500 font-medium">12 Active Players</p>
      </div>

      <div className="grid gap-3">
        {players.map((player, idx) => (
          <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 font-black text-lg shrink-0">
              {player.number}
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-slate-800 text-lg">{player.name}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs font-bold rounded flex items-center gap-1">
                  <Shield size={12} /> {player.pos}
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-2">{player.notes}</p>
            </div>
          </div>
        ))}
      </div>
      
      <button className="mt-6 w-full py-3 bg-white border-2 border-dashed border-slate-300 rounded-xl text-slate-500 font-bold active:bg-slate-50">
        + Add Player
      </button>
    </div>
  );
}
