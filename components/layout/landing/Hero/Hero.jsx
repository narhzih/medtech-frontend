import React from 'react';
import Image from 'next/image';
import Button from '../../Button';
import HeroImg from '@/public/hero.png';

export default function Hero() {
  const handleBtnClick = () => {
    alert('Hold on for update');
  };

  return (
    <section className="bg-sky-50 py-20 px-6 md:px-16 overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center md:text-left animate-fadeInUp">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Seamless Healthcare Experience for{' '}
            <span className="text-blue-600">Everyone.</span>
          </h1>

          <p className="text-gray-700 font-normal text-base md:text-lg mb-8 max-w-xl mx-auto md:mx-0">
            MedTech streamlines patient care, clinical efficiency, and
            operations through an integrated, user-friendly platform designed
            for every stakeholder in healthcare.
          </p>

          <Button
            action={handleBtnClick}
            text="Discover Features"
            color="bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300"
          />
        </div>

        <div className="flex-1 flex justify-center md:justify-end animate-fadeIn">
          <Image
            src={HeroImg}
            alt="Illustration showing seamless healthcare technology"
            className="w-64 sm:w-80 md:w-96 lg:w-[28rem] object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
