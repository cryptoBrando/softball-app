"use client";

import Link from 'next/link';
import { Calendar, MapPin, Clock, X } from 'lucide-react';
import { useState } from 'react';
import { teamConfig } from '../teamConfig';

export default function Schedule() {
  const [events, setEvents] = useState([
    { type: teamConfig.nextEvent.type, date: teamConfig.nextEvent.date, time: teamConfig.nextEvent.time, opponent: teamConfig.nextEvent.opponent, location: teamConfig.nextEvent.location, isNext: true },
    { type: 'Practice', date: 'May 14, 2026', time: '5:30 PM', opponent: 'Infield Focus', location: 'Field 2', isNext: false },
    { type: 'Game', date: 'May 16, 2026', time: '9:00 AM', opponent: 'Lightning', location: 'Field 1', isNext: false },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [newEvent, setNewEvent] = useState({ type: 'Practice', date: '', time: '', opponent: '', location: '' });

  const handleAdd = () => {
    if (newEvent.date && newEvent.opponent) {
      setEvents([...events, { ...newEvent, isNext: false }]);
      setShowModal(false);
      setNewEvent({ type: 'Practice', date: '', time: '', opponent: '', location: '' });
    }
  };

  return (
    <div className="p-4 bg-slate-50 min-h-screen pb-24 relative">
      <div className="mb-6 flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Schedule</h1>
          <p className="text-slate-500 font-medium">May 2026</p>
        </div>
        <button 
            onClick={() => setShowModal(true)}
            className="bg-rose-100 text-rose-600 px-3 py-1.5 rounded-lg text-sm font-bold active:bg-rose-200">
          + Add Event
        </button>
      </div>

      <div className="space-y-4">
        {events.map((event, idx) => (
          <div key={idx} className={`bg-white p-4 rounded-xl shadow-sm border ${event.isNext ? 'border-rose-300 ring-1 ring-rose-300' : 'border-slate-200'}`}>
            {event.isNext && (
              <div className="text-[10px] font-bold uppercase tracking-wider text-rose-600 bg-rose-50 inline-block px-2 py-0.5 rounded-full mb-2">
                Next Event
              </div>
            )}
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg text-slate-800">
                  {event.type} {event.opponent !== 'Infield Focus' && `vs. ${event.opponent}`}
                  {event.opponent === 'Infield Focus' && `- ${event.opponent}`}
                </h3>
                <div className="flex items-center gap-4 mt-2 text-sm text-slate-500">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} /> {event.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} /> {event.time}
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-1 text-sm text-slate-500">
                  <MapPin size={14} /> {event.location}
                </div>
              </div>
            </div>
            {event.isNext && (
              <Link href="/schedule/pregame" className="mt-4 block w-full py-2 bg-rose-600 text-white text-center font-semibold rounded-lg active:bg-rose-700">
                View Pregame Itinerary
              </Link>
            )}
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-slate-900/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-sm p-4 overflow-hidden shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-slate-800">Add Event</h2>
              <button onClick={() => setShowModal(false)} className="p-2 bg-slate-100 rounded-full text-slate-600">
                 <X size={20} />
              </button>
            </div>
            <div className="space-y-3">
                <select 
                   className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-rose-500" 
                   value={newEvent.type} 
                   onChange={(e) => setNewEvent({...newEvent, type: e.target.value})}
                >
                    <option>Practice</option>
                    <option>Game</option>
                    <option>Tournament</option>
                </select>
                <input 
                   type="text" 
                   placeholder="Opponent or Focus (e.g. Thunder)" 
                   className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-rose-500"
                   value={newEvent.opponent}
                   onChange={(e) => setNewEvent({...newEvent, opponent: e.target.value})}
                />
                <div className="flex gap-2">
                    <input 
                       type="text" 
                       placeholder="Date (e.g. May 18)" 
                       className="w-1/2 p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-rose-500"
                       value={newEvent.date}
                       onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
                    />
                    <input 
                       type="text" 
                       placeholder="Time (e.g. 6:00 PM)" 
                       className="w-1/2 p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-rose-500"
                       value={newEvent.time}
                       onChange={(e) => setNewEvent({...newEvent, time: e.target.value})}
                    />
                </div>
                <input 
                   type="text" 
                   placeholder="Location (e.g. Field 3)" 
                   className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-rose-500"
                   value={newEvent.location}
                   onChange={(e) => setNewEvent({...newEvent, location: e.target.value})}
                />
                <button 
                    onClick={handleAdd}
                    className="w-full py-3 mt-2 bg-rose-600 text-white font-bold rounded-xl active:bg-rose-700"
                >
                    Save Event
                </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}