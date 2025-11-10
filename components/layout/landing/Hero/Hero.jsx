import React from 'react';
import Button from '../../Button';
import Image from 'next/image';
import HeroImg from '@/public/hero.png';

export default function Hero() {
  const handleBtnClick = () => {
    alert('Hold on for update');
  };
  return (
    <section className="bg-sky-50 py-24 px-8 md:px-16">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl lg:text-6xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Seamless Healthcare Experience for <br />
            Everyone.
          </h1>

          <p className="text-gray-700 font-normal text-base md:text-lg mb-8 max-w-xl mx-auto md:mx-0">
            MedTech streamlines patient care, clinical efficiency, and
            operations through an integrated, user-friendly platform designed
            for every stakeholder in healthcare.
          </p>
          <Button
            action={handleBtnClick}
            text="Discover Features"
            color="bg-blue-500 text-white"
          />
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <Image
            src={HeroImg}
            alt="Healthcare Illustration"
            className="w-72 md:w-96"
          />
        </div>
      </div>
    </section>
  );
}
