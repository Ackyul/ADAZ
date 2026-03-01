import React from 'react';
import { ShoppingBag, Search, Menu } from 'lucide-react';

const Header = () => {
  return (
    <nav className="fixed w-full z-50 glass border-b border-white/20 transition-all duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#" className="text-2xl font-black tracking-tighter flex items-center gap-3 group">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 blur opacity-30 group-hover:opacity-60 transition-opacity"></span>
            <span className="relative w-full h-full rounded-full bg-gradient-to-br from-brand-500 to-brand-800 border border-brand-400 block shadow-inner"></span>
          </div>
          <span className="text-brand-900 group-hover:text-brand-700 transition-colors">ADAZ</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-brand-600">
          <a href="#catalogue" className="hover:text-brand-900 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-brand-900 hover:after:w-full after:transition-all">Catálogo</a>
          <a href="#collections" className="hover:text-brand-900 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-brand-900 hover:after:w-full after:transition-all">Colecciones</a>
          <a href="#about" className="hover:text-brand-900 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-brand-900 hover:after:w-full after:transition-all">El Concepto</a>
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="p-2 text-brand-700 hover:text-brand-900 hover:bg-white/50 rounded-full transition-all">
            <Search size={20} />
          </button>
          <button className="p-2 text-brand-700 hover:text-brand-900 hover:bg-white/50 rounded-full transition-all relative">
            <ShoppingBag size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-brand-500 rounded-full"></span>
          </button>
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
