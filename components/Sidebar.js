'use client';

import { Home, Calendar, Clock, Bell, User, HelpCircle, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FaFirstAid } from "react-icons/fa";


const sidebarItems = [
  { icon: <Home size={18} />, label: "Dashboard", active: true },
  { icon: <Calendar size={18} />, label: "Appointments" },
  { icon: <Clock size={18} />, label: "Quick Access" },
  { icon: <Bell size={18} />, label: "Notifications" },
  { icon: <User size={18} />, label: "Profile" },
  { icon: <HelpCircle size={18} />, label: "Help & Support" },
  { icon: <Settings size={18} />, label: "Settings" },
];

export function Sidebar({ items = sidebarItems }) {
  return (
    <aside className="hidden md:flex fixed left-0 top-0 flex-col h-screen w-[15%] bg-white border-r z-20 py-6">
      
      
      <div className="flex items-center space-x-2 px-6 mb-8">
        <FaFirstAid className="text-blue-600 text-xl sm:text-2xl" />
        <h1 className="text-base sm:text-lg font-bold text-gray-800 truncate">
          Medtech-Mavericks
        </h1>
      </div>

      
      <nav className="flex flex-col space-y-1 px-4 text-gray-700">
        {items.map((item, index) => (
          <SidebarItem
            key={index}
            icon={item.icon}
            label={item.label}
            active={item.active}
          />
        ))}
      </nav>
    </aside>
  );
}


function SidebarItem({ icon, label, active }) {
  return (
    <Button
      variant="ghost"
      className={cn(
        "w-full justify-start text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors cursor-pointer",
        active && "bg-blue-50 text-blue-600"
      )}
    >
      <span className="mr-3">{icon}</span>
      {label}
    </Button>
  );
}
