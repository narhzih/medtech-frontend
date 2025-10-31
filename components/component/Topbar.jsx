'use client';

import { Menu } from 'lucide-react';
import Image from 'next/image';
import profilePic from '@/public/medtech-logo.png';

export default function Topbar({ setOpen }) {
  return (
    <div className="flex items-center justify-between bg-white border-b p-4">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="md:hidden p-2 rounded-md hover:bg-gray-100"
      >
        <Menu size={22} />
      </button>

      <h1 className="text-lg font-semibold">Dashboard</h1>

      <div className="flex items-center space-x-3">
        <Image
          src={profilePic}
          alt="Profile"
          className="w-9 h-9 rounded-full object-cover cursor-pointer"
          priority
        />
      </div>
    </div>
  );
}
