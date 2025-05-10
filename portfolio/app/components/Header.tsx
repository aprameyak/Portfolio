'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-surface/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#9d4edd]/10 to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text text-center">Aprameya Kannan</h1>
          <nav className="mb-6">
            <ul className="flex flex-wrap justify-center gap-2 sm:gap-4 list-none p-0">
              {['About', 'Projects', 'Experience', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase()}`} 
                    className="text-[#e2d9f3] hover:text-white hover:bg-[#9d4edd] px-3 py-2 rounded-lg text-sm sm:text-base transition-all duration-300 font-medium"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] rounded-full overflow-hidden mx-auto my-5 border-[3px] border-[#9d4edd] shadow-[0_0_20px_rgba(157,78,221,0.4)] hover:shadow-[0_0_30px_rgba(157,78,221,0.6)] transition-all duration-300">
            <Image
              src="https://aprameyak-portfolio-assets.s3.us-east-1.amazonaws.com/profilepic.jpg"
              alt="Profile Picture"
              width={150}
              height={150}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              priority
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 