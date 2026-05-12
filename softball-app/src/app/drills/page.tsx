"use client";
import { useState } from 'react';
import { Search, X, Video } from 'lucide-react';

export default function DrillLibrary() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [activeVideo, setActiveVideo] = useState<any>(null);

  const drills = [
    { 
      name: 'The Star Drill',
      category: 'Fielding', 
      time: '7 mins', 
      description: 'Constant motion star pattern. Throwing on the run.',
      youtubeId: 'qj8Bpq2RIfM', // Just placeholder IDs
      startAt: 45,
      endAt: 120
    },
    { 
      name: 'Quick Catch Challenge', 
      category: 'Throwing', 
      time: '5 mins', 
      description: '60-second transfer rate challenge.',
      youtubeId: 'qj8Bpq2RIfM',
      startAt: 15,
      endAt: null
    },
    { 
      name: 'J-Bands Routine', 
      category: 'Warm-up', 
      time: '2 mins', 
      description: 'Modern arm care and shoulder health.',
      youtubeId: 'qj8Bpq2RIfM',
      startAt: 60,
      endAt: 150
    }
  ];

  return (
    <div className="p-4 bg-slate-50 min-h-screen pb-24 relative">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Drill Library</h1>
        <p className="text-slate-500 font-medium">Curated clips from the web</p>
      </div>

      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search size={18} className="text-slate-400" />
        </div>
        <input 
          type="text" 
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500 shadow-sm"
          placeholder="Search drills..." 
        />
      </div>

      <div className="space-y-3">
        {drills.map((drill, idx) => (
          <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4 active:bg-slate-50 transition-colors" onClick={() => setActiveVideo(drill)}>
            <div className="bg-rose-50 p-3 rounded-lg text-rose-600 shrink-0 cursor-pointer">
              <Video size={24} />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-slate-800">{drill.name}</h3>
                <span className="text-[10px] font-bold uppercase px-2 py-1 bg-slate-100 text-slate-600 rounded">
                  {drill.category}
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1">{drill.description}</p>
              <div className="mt-2 text-xs font-semibold text-rose-600">Tap to watch clip</div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-white rounded-2xl overflow-hidden shadow-2xl scale-100 transition-transform">
            <div className="p-3 flex justify-between items-center border-b">
              <h3 className="font-bold truncate pr-4">{activeVideo.name}</h3>
              <button onClick={() => setActiveVideo(null)} className="p-1 bg-slate-100 rounded-full active:bg-slate-200">
                <X size={20} />
              </button>
            </div>
            <div className="aspect-video w-full bg-black">
              <iframe 
                width="100%" 
                height="100%" 
                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?start=${activeVideo.startAt}${activeVideo.endAt ? '&end=' + activeVideo.endAt : ''}&autoplay=1`} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4 bg-slate-50 text-sm text-slate-600">
              <p><strong>Note:</strong> Video is dynamically clipped to only show the relevant portion of the tutorial.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}