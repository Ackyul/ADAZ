import React from 'react';
import ItemCard from './ItemCard';

const SNEAKERS_DATA = [
  {
    id: 1,
    name: 'AeroGlide Pro',
    category: 'Vanguard Runner',
    description: 'Ingeniería aerodinámica para una velocidad sin precedentes.',
    image: 'C:\\Users\\USER\\.gemini\\antigravity\\brain\\a8524ce3-66ef-4ee0-a4bc-359e692f8d27\\futuristic_sneaker_1772377155563.png',
  },
  {
    id: 2,
    name: 'Urban Stealth',
    category: 'Streetwear High-Top',
    description: 'Silueta imponente que domina el paisaje urbano moderno.',
    image: 'C:\\Users\\USER\\.gemini\\antigravity\\brain\\a8524ce3-66ef-4ee0-a4bc-359e692f8d27\\urban_street_sneaker_1772377277153.png',
  },
  {
    id: 3,
    name: 'Quantum Velocity',
    category: 'Hyper Athletic',
    description: 'Materiales reactivos que desafían las leyes de la física.',
    image: 'C:\\Users\\USER\\.gemini\\antigravity\\brain\\a8524ce3-66ef-4ee0-a4bc-359e692f8d27\\modern_running_shoe_1772377511654.png',
  }
];

const Catalogue = () => {
  return (
    <section id="catalogue" className="py-24 relative bg-brand-50 z-10">
      {/* Background Decorators */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-50 via-white/40 to-brand-50 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-brand-200 pb-8 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-2 tracking-tight text-brand-900">El Catálogo</h2>
            <p className="text-brand-600 text-lg font-medium">Nuestra línea vanguardista. Diseñada para romper las reglas.</p>
          </div>
          
          {/* Controls */}
          <div className="flex gap-4">
             <button className="px-6 py-2 rounded-full border border-brand-300 bg-white/60 text-brand-900 text-sm font-semibold hover:bg-white hover:shadow-sm transition-all">
               Todos
             </button>
             <button className="px-6 py-2 rounded-full border border-transparent text-brand-600 text-sm font-semibold hover:text-brand-900 hover:bg-white/40 transition-all">
               Nuevos
             </button>
             <button className="px-6 py-2 rounded-full border border-transparent text-brand-600 text-sm font-semibold hover:text-brand-900 hover:bg-white/40 transition-all">
               Limitados
             </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {SNEAKERS_DATA.map((sneaker) => (
            <ItemCard key={sneaker.id} data={sneaker} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalogue;
