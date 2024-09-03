// src/components/NavBar.tsx
import React from 'react';
import { useNavBar } from '../context/NavBarContext';
import Link from 'next/link';

const NavBar: React.FC = () => {
  const { isOpen, toggleNavBar } = useNavBar();

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto p-4 flex justify-between items-center">
        {/* Button to toggle the menu */}
        <button
          onClick={toggleNavBar}
          className="md:hidden text-lg font-semibold"
        >
          {isOpen ? 'Close' : 'Open'} Menu
        </button>
        
        {/* Navigation links */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:items-center w-full md:w-auto`}
        >
          <Link href="/" className="block md:inline-block p-2">Home</Link>
          <Link href="/about" className="block md:inline-block p-2">About</Link>
          <Link href="/contact" className="block md:inline-block p-2">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
