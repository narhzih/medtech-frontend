'use client';

import { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function DashboardLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex">
      <Sidebar open={open} setOpen={setOpen} />
      <div className="flex-1">
        <Topbar setOpen={setOpen} />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
