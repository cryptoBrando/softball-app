import type { Metadata } from 'next';
import './globals.css';
import Navigation from './components/Navigation';

export const metadata: Metadata = {
  title: 'Softball Manager 12U',
  description: 'Team management, drill library, and practice planner.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-100 min-h-screen">
        <main className="max-w-md mx-auto min-h-screen bg-white shadow-xl relative pb-16">
            <header className="bg-blue-600 text-white p-4 sticky top-0 z-10 shadow-md">
                <h1 className="text-xl font-bold tracking-wide">TRICO 12U SOFTBALL 🥎</h1>
            </header>
            {children}
            <Navigation />
        </main>
      </body>
    </html>
  );
}
