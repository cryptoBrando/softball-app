import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from './components/Navigation';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={`$inter.className} bg-slate-100 min-h-screen`}>
        <main className="max-w-md mx-auto min-h-screen bg-white shadow-xl relative pb-16">
            <header className="bg-rose-600 text-white p-4 sticky top-0 z-10 shadow-md">
                <h1 className="text-xl font-bold tracking-wide">12U SOFTBALL 🥎</h1>
            </header>
            {children}
            <Navigation />
        </main>
      </body>
    </html>
  );
}
