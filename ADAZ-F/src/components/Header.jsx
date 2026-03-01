import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Header = () => {
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

        {/* Mobile Menu */}
        <button className="md:hidden text-brand-900 p-2 hover:bg-white/50 rounded-full">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
};

export default Header;
