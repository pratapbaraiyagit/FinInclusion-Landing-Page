import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, UserPlus } from 'lucide-react';
import Logo from './Logo';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#', active: true },
    { name: 'About Us', href: '#' },
    { name: 'Services', href: '#', hasDropdown: true },
    { name: 'Partners', href: '#' },
    { name: 'Resources', href: '#', hasDropdown: true },
    { name: 'Contact Us', href: '#' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm py-3' : 'bg-white py-5'}`}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} className={`text-sm font-semibold flex items-center gap-1 relative py-2 ${link.active ? 'text-finova-blue' : 'text-slate-700 hover:text-finova-blue'}`}>
              {link.name}
              {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
              {link.active && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-finova-green rounded-t-md"></div>
              )}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex">
          <a href="#" className="bg-finova-navy text-white px-6 py-2.5 rounded-md text-sm font-medium hover:bg-finova-blue transition-colors flex items-center gap-2">
            <UserPlus className="w-4 h-4" />
            Partner With Us
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-slate-700 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-lg px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} className="text-base font-medium text-slate-700 py-2 border-b border-slate-50 flex items-center justify-between">
              {link.name}
              {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
            </a>
          ))}
          <a href="#" className="bg-finova-navy text-white px-5 py-3 rounded-md text-center font-medium mt-2 flex items-center justify-center gap-2">
            <UserPlus className="w-4 h-4" />
            Partner With Us
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
