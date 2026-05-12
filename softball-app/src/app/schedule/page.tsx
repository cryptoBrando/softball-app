import Link from 'next/link';
import { Calendar, MapPin, Clock } from 'lucide-react';

export default function Schedule() {
  const events = [
    { type: 'Game', date: 'May 12, 2026', time: '6:00 PM', opponent: 'Thunder', location: 'Field 4', isNext: true },
    { type: 'Practice', date: 'May 14, 2026', time: '5:30 PM', opponent: 'Infield Focus', location: 'Field 2', isNext: false },
    { type: 'Game', date: 'May 16, 2026', time: '9:00 AM', opponent: 'Lightning', location: 'Field 1', isNext: false },
  ];

  return (
    <div className="p-4 bg-slate-50 min-h-screen pb-24">
      <div className="mb-6 flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Schedule</h1>
          <p className="text-slate-500 font-medium">May 2026</p>
        </div>
        <button className="bg-rose-100 text-rose-600 px-3 py-1.5 rounded-lg text-sm font-bold active:bg-rose-200">
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
    </div>
  );
}