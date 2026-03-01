// src/pages/CatalogPage.jsx
import React, { useEffect } from 'react';
import ItemCard from '../components/ItemCard';

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
  },
  {
    id: 4,
    name: 'Neo Gravity',
    category: 'Concept Sneaker',
    description: 'Amortiguación que te eleva con cada paso, desafiando la gravedad.',
    image: 'C:\\Users\\USER\\.gemini\\antigravity\\brain\\a8524ce3-66ef-4ee0-a4bc-359e692f8d27\\futuristic_sneaker_1772377155563.png',
  }
];

const CatalogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll position when jumping to a new page
  }, []);

  return (
    <div className="pt-32 pb-24 relative bg-brand-50 z-10 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-brand-200 pb-8 gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-black mb-2 tracking-tight text-brand-900">El Catálogo Completo</h1>
            <p className="text-brand-600 text-lg font-medium">Explora todas nuestras colecciones sin reglas.</p>
          </div>
          <div className="flex gap-4">
             <button className="px-6 py-2 rounded-full border border-brand-300 bg-white/60 text-brand-900 text-sm font-semibold hover:bg-white hover:shadow-sm transition-all">
               Todos
             </button>
             <button className="px-6 py-2 rounded-full border border-transparent text-brand-600 text-sm font-semibold hover:text-brand-900 hover:bg-white/40 transition-all">
               Nuevos
             </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {SNEAKERS_DATA.map((sneaker) => (
            <ItemCard key={sneaker.id} data={sneaker} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
