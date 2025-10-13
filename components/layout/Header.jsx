import { useState } from 'react';
import Button from './Button';
import { Roboto } from 'next/font/google';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleBtnClick = () => {
    alert('Hold on for update');
  };
  return (
    <header className="text-gray-600 shadow-sm bg-white  w-full ">
      <div className="max-w-9/10 mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/home"
          className="text-2xl font-bold text-blue-600 flex items-center"
        >
          <span className={`ml-2 text-xl ${roboto.className}`}>MedTech</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-6 text-gray-700">
            <Link href="/" className="hover:text-blue-900">
              Home
            </Link>
            <Link href="/feqatures" className="hover:text-blue-900">
              Features
            </Link>
            <Link href="/solution" className="hover:text-blue-900">
              Solutions
            </Link>
            <Link href="/about-us" className="hover:text-blue-900">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-blue-900">
              Contact
            </Link>
          </nav>
        </div>
        <div className=" hidden md:flex gap-4">
          <Link href="" onClick={handleBtnClick}>
            <Button text="Request Demo" color="bg-blue-500 text-white" />
          </Link>
          <Link href="" onClick={handleBtnClick}>
            <Button
              text="Login"
              color="shadow-md text-black hover:shadow-none"
            />
          </Link>
        </div>

        <button
          onClick={handleClick}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile view */}
      {isOpen && (
        <nav className="md:hidden bg-white flex flex-col space-y-4 py-4 px-6 text-gray-700">
          <Link href="/home" className="hover:text-blue-900">
            Home
          </Link>
          <Link href="/features" className="hover:text-blue-900">
            Features
          </Link>
          <Link href="/solutions" className="hover:text-blue-900">
            Solutions
          </Link>
          <Link href="/about-us" className="hover:text-blue-900">
            About Us
          </Link>
          <Link href="/contant" className="hover:text-blue-900">
            Contact
          </Link>

          <div className="flex flex-col gap-3 mt-4">
            <Link href="/demo">
              <Button text="Request Demo" color="bg-blue-500 text-white" />
            </Link>
            <Link href="/login">
              <Button
                text="Login"
                color="shadow-md text-black hover:shadow-none"
              />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
