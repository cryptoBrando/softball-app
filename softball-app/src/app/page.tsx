import Link from 'next/link';
import { Calendar, LayoutList, Trophy, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="p-6 bg-slate-50 min-h-[calc(100vh-4rem)]">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-black text-slate-800">Welcome Coach!</h2>
        <p className="text-slate-500 text-sm mt-1">Next Event: Game vs. Thunder (5/12)</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Link href="/schedule/pregame" className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-3 active:scale-95 transition-transform">
          <div className="bg-rose-100 p-3 rounded-full text-rose-600">
            <Trophy size={28} />
          </div>
          <span className="font-semibold text-slate-700">Next Pregame</span>
        </Link>
        
        <Link href="/schedule" className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-3 active:scale-95 transition-transform">
          <div className="bg-blue-100 p-3 rounded-full text-blue-600">
            <Calendar size={28} />
          </div>
          <span className="font-semibold text-slate-700">Schedule</span>
        </Link>

        <Link href="/drills" className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-3 active:scale-95 transition-transform">
          <div className="bg-emerald-100 p-3 rounded-full text-emerald-600">
            <LayoutList size={28} />
          </div>
          <span className="font-semibold text-slate-700">Drill Library</span>
        </Link>

        <Link href="/roster" className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-3 active:scale-95 transition-transform">
          <div className="bg-purple-100 p-3 rounded-full text-purple-600">
            <Users size={28} />
          </div>
          <span className="font-semibold text-slate-700">Roster</span>
        </Link>
      </div>

      <div className="mt-10">
        <h3 className="text-lg font-bold text-slate-800 mb-3">Quick Notes</h3>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <p className="text-sm text-amber-800">
            <strong>Update for tonight:</strong> Emma is bringing snacks. Remind the infielders about covering bunts. Let&apos;s get loud early today!
          </p>
        </div>
      </div>
    </div>
  );
}
