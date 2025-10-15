import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from '../../Button';
import Link from '@/components/layout/landing/Links/Link';
import Image from 'next/image';
import medtech from "@/public/medtech-logo.png"

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: '/home', text: 'Home' },
    { path: '/features', text: 'Features' },
    { path: '/solution', text: 'Solutions' },
    { path: '/about-us', text: 'About Us' },
    { path: '/contact', text: 'Contact' },
  ];

  return (
    <header className="bg-white text-gray-700 shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Image
          src={medtech}
          alt="MedTech Logo"
          className="w-[55px] object-contain transition-all duration-300"
          priority
        />

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <Link key={index} path={link.path} text={link.text} />
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Button
            text="Request Demo"
            color="bg-blue-600 text-white hover:bg-blue-700"
          />
          <Button
            text="Login"
            color="border bg-white text-gray-500 border-gray-300 hover:bg-gray-100"
          />
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile view */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-gray-100 flex flex-col space-y-4 py-4 px-6 text-gray-700">
          {navLinks.map((link, index) => (
            <Link key={index} path={link.path} text={link.text} />
          ))}

          <div className="flex flex-col gap-3 mt-6">
            <Button
              text="Request Demo"
              color="bg-blue-600 text-white hover:bg-blue-700"
            />
            <Button
              text="Login"
              color="border border-gray-300 text-white hover:bg-gray-100"
            />
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
