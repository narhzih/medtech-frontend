'use client';

import {
  Home,
  Calendar,
  Clock,
  Bell,
  User,
  HelpCircle,
  Settings,
  X,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import medtech from '@/public/medtech-logo.png';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const sidebarItems = [
  { icon: <Home size={18} />, label: 'Dashboard', href: '/dashboard' },
  {
    icon: <Calendar size={18} />,
    label: 'Appointments',
    href: '/dashboard/appointment',
  },
  { icon: <Clock size={18} />, label: 'View Schedule', href: '/dashboard/schedule' },
  {
    icon: <Clock size={18} />,
    label: 'Queue Status',
    href: '/dashboard/queue',
  },
  {
    icon: <Bell size={18} />,
    label: 'Notifications',
    href: '/dashboard/notifications',
  },

{
  icon : <Bell size={18} />,
  label: "messages",
  href: '/dashboard/messages'
},

  { icon: <User size={18} />, label: 'Profile', href: '/dashboard/profile' },
  {
    icon: <Settings size={18} />,
    label: 'Settings',
    href: '/dashboard/settings',
  },
  {
    icon: <HelpCircle size={18} />,
    label: 'Help & Support',
    href: '/dashboard/help',
  },
];

export default function Sidebar({ open, setOpen, items = sidebarItems }) {
  return (
    <aside
      className={cn(
        'fixed md:static top-0 left-0 h-screen bg-white border-r z-40 py-6 w-[70%] sm:w-[50%] md:w-[15%] transition-transform duration-300 ease-in-out',
        open ? 'translate-x-0' : '-translate-x-full md:translate-x-0',
      )}
    >
      <div className="flex items-center justify-between px-6 mb-8">
        <div className="flex items-center space-x-2">
          <Image
            src={medtech}
            alt="MedTech Logo"
            className="w-[55px] object-contain"
            priority
          />
          <h1 className="text-base sm:text-lg font-bold text-gray-800 truncate">
            Medtech
          </h1>
        </div>
        <button onClick={() => setOpen(false)} className="md:hidden">
          <X size={20} />
        </button>
      </div>

      <nav className="flex flex-col space-y-1 px-4 text-gray-700 overflow-hidden">
        {items.map((item, index) => (
          <SidebarItem
            key={index}
            icon={item.icon}
            label={item.label}
            href={item.href}
            setOpen={setOpen}
          />
        ))}
      </nav>
    </aside>
  );
}

function SidebarItem({ icon, label, href, setOpen }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Button
      asChild
      variant="ghost"
      className={cn(
        'w-full justify-start text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors cursor-pointer',
        isActive && 'bg-blue-50 text-blue-600',
      )}
      onClick={() => setOpen(false)}
    >
      <Link href={href}>
        <span className="mr-3">{icon}</span>
        {label}
      </Link>
    </Button>
  );
}
