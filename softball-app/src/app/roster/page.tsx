"use client";

import { Shield, X } from 'lucide-react';
import { useState } from 'react';

export default function Roster() {
  const [players, setPlayers] = useState([
    { number: 4, name: 'Mia Johnson', pos: 'P / 1B', notes: 'Great drop ball.' },
    { number: 7, name: 'Sarah Davis', pos: 'SS / 2B', notes: 'Leadoff hitter. Fast.' },
    { number: 12, name: 'Emma Wilson', pos: 'C / 3B', notes: 'Cannon for an arm.' },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newPlayer, setNewPlayer] = useState({ number: '', name: '', pos: '', notes: '' });

  const handleAdd = () => {
    if (newPlayer.name && newPlayer.number) {
      setPlayers([...players, { 
          ...newPlayer, 
          number: parseInt(newPlayer.number) || 0 
      }]);
      setShowModal(false);
      setNewPlayer({ number: '', name: '', pos: '', notes: '' });
    }
  };

  return (
    <div className="p-4 bg-slate-50 min-h-screen pb-24 relative">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Team Roster</h1>
        <p className="text-slate-500 font-medium">{players.length} Active Players</p>
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
      
      <button 
        onClick={() => setShowModal(true)}
        className="mt-6 w-full py-3 bg-white border-2 border-dashed border-slate-300 rounded-xl text-slate-500 font-bold active:bg-slate-50"
      >
        + Add Player
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-slate-900/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-sm p-4 overflow-hidden shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-slate-800">Add Player</h2>
              <button onClick={() => setShowModal(false)} className="p-2 bg-slate-100 rounded-full text-slate-600">
                 <X size={20} />
              </button>
            </div>
            <div className="space-y-3">
                <div className="flex gap-2">
                    <input 
                       type="text" 
                       placeholder="Jersey #" 
                       className="w-1/3 p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-rose-500"
                       value={newPlayer.number}
                       onChange={(e) => setNewPlayer({...newPlayer, number: e.target.value})}
                    />
                    <input 
                       type="text" 
                       placeholder="Player Name" 
                       className="w-2/3 p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-rose-500"
                       value={newPlayer.name}
                       onChange={(e) => setNewPlayer({...newPlayer, name: e.target.value})}
                    />
                </div>
                <input 
                   type="text" 
                   placeholder="Positions (e.g. P / 1B)" 
                   className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-rose-500"
                   value={newPlayer.pos}
                   onChange={(e) => setNewPlayer({...newPlayer, pos: e.target.value})}
                />
                <input 
                   type="text" 
                   placeholder="Quick Notes" 
                   className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-rose-500"
                   value={newPlayer.notes}
                   onChange={(e) => setNewPlayer({...newPlayer, notes: e.target.value})}
                />
                <button 
                    onClick={handleAdd}
                    className="w-full py-3 mt-2 bg-rose-600 text-white font-bold rounded-xl active:bg-rose-700"
                >
                    Save Player
                </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}