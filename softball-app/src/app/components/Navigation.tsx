"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Calendar, LayoutList, Users } from "lucide-react";

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Schedule", href: "/schedule", icon: Calendar },
    { name: "Drills", href: "/drills", icon: LayoutList },
    { name: "Roster", href: "/roster", icon: Users },
  ];

  return (
    <nav className="bg-white border-t border-slate-200 fixed bottom-0 w-full max-w-md mx-auto z-20 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/');
          
          return (
            <Link 
              key={item.href} 
              href={item.href}
              className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${
                isActive ? "text-rose-600" : "text-slate-400 hover:text-slate-600"
              }`}
            >
              <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-medium">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}