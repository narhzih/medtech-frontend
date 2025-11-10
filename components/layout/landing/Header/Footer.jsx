'use client';
import Link from 'next/link';
import { Sparkle, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import FooterLink from './FooterLink';
import medtech from '@/public/medtech-logo.png';
import Image from 'next/image';
export default function Footer() {
  return (
    <footer className="bg-[#F8FAFC] text-gray-700">
      <div className="bg-[#E6F2FA] text-center py-16 px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
          Ready to Transform Your Healthcare Operations?
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-600 leading-relaxed">
          Join the future of healthcare management with MediCareConnect. Explore
          our comprehensive features designed for efficiency, patient
          satisfaction, and strategic insight.
        </p>
        <Link
          href="/get-started"
          className="inline-block mt-6 bg-[#007BFF] hover:bg-[#0069d9] text-white text-sm font-medium px-6 py-2 rounded transition"
        >
          Get Started Today
        </Link>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto px-6 py-6 border-t border-gray-200">
        <div className="flex items-center space-x-2">
           <Image
                    src={medtech}
                    alt="MedTech Logo"
                    className="w-[55px] object-contain transition-all duration-300"
                    priority
                  />
        </div>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <FooterLink href="/product">Product</FooterLink>
          <FooterLink href="/company">Company</FooterLink>
          <FooterLink href="/support">Support</FooterLink>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0 text-gray-500">
          <Link href="/" className="hover:text-blue-500 transition">
            <Facebook className="h-5 w-5" />
          </Link>
          <Link href="/" className="hover:text-blue-500 transition">
            <Twitter className="h-5 w-5" />
          </Link>
          <Link href="/" className="hover:text-blue-500 transition">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href="/" className="hover:text-blue-500 transition">
            <Instagram className="h-5 w-5" />
          </Link>
        </div>
      </div>
=
      <div className="text-center text-xs text-gray-500 pb-6">
        © 2025 MedTech. All rights reserved.
      </div>
    </footer>
  );
}
