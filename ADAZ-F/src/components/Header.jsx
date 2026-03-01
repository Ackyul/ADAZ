import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 glass border-b border-white/20 transition-all duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center p-1 group">
          <img src="/assets/logo-text.png" alt="ADAZ" className="h-6 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-brand-600">
          <Link to="/" className="hover:text-brand-900 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-brand-900 hover:after:w-full after:transition-all">Home</Link>
          <a href="/#destacado" className="hover:text-brand-900 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-brand-900 hover:after:w-full after:transition-all">Destacado</a>
          <Link to="/catalogo" className="hover:text-brand-900 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-brand-900 hover:after:w-full after:transition-all">Catálogo</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-brand-900 p-2 hover:bg-white/50 rounded-full z-[60]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out flex flex-col items-center justify-center gap-8 ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        } md:hidden`}
      >
        <Link 
          to="/" 
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-2xl font-black text-brand-900 hover:text-brand-600 transition-colors"
        >
          Home
        </Link>
        <a 
          href="/#destacado" 
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-2xl font-black text-brand-900 hover:text-brand-600 transition-colors"
        >
          Destacado
        </a>
        <Link 
          to="/catalogo" 
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-2xl font-black text-brand-900 hover:text-brand-600 transition-colors"
        >
          Catálogo
        </Link>
      </div>
    </nav>
  );
};

export default Header;
