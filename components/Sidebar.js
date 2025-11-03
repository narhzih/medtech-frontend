'use client'

import { Home, Calendar, Clock, Bell, User, HelpCircle, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FaFirstAid } from "react-icons/fa";
import { useState } from "react";

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
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className={cn(
        "fixed left-0 top-0 h-screen bg-white border-r z-20 flex flex-col transition-all duration-300",
        "w-[60px] md:w-[15%]",
        isExpanded && "w-[160px] md:w-[15%]" 
      )}
    >
      
      <div className="flex justify-center items-center py-6">
   <FaFirstAid className="text-blue-600 text-xl" />
 </div>

      
      <nav className="flex flex-col space-y-1 px-2 text-gray-700 ">
        {items.map((item, index) => (
          <SidebarItem
            key={index}
            icon={item.icon}
            label={item.label}
            active={item.active}
            showLabel={isExpanded}
          />
        ))}
      </nav>
    </aside>
  );
}

function SidebarItem({ icon, label, active, showLabel }) {
  return (
    <Button
      variant="ghost"
      className={cn(
        "w-full justify-start text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors cursor-pointer ",
        active && "bg-blue-50 text-blue-600"
      )}
    >
      <span className="mr-3">{icon}</span>
      <span
        className={cn(
          "transition-all duration-300 whitespace-nowrap pr-2", 
          "text-[0.75rem] md:text-sm", 
          !showLabel && "opacity-0 md:opacity-100"
        )}
      >
        {label}
      </span>
    </Button>
  );
}
