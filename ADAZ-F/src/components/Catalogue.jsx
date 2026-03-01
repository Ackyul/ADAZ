import React, { useState } from 'react';
import ItemCard from './ItemCard';
import ProductModal from './ProductModal';

const SNEAKERS_DATA = [
  {
    id: 1,
    name: 'ASHER-W',
    category: 'Skate Classic',
    description: 'El icónico diseño a cuadros. Estilo indiscutible y comodidad para todo el día.',
    image: '/assets/vans-asher.png',
    price: '150'
  },
  {
    id: 2,
    name: 'ASHER-M',
    category: 'Skate Classic',
    description: 'El icónico diseño a cuadros. Estilo indiscutible y comodidad para todo el día.',
    image: '/assets/asher-m.png',
    price: '150'
  }
];

const Catalogue = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section id="destacado" className="py-24 relative bg-brand-50 z-10 scroll-mt-24">
      {/* Background Decorators */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-50 via-white/40 to-brand-50 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-brand-200 pb-8 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-2 tracking-tight text-brand-900">Destacado</h2>
            <p className="text-brand-600 text-lg font-medium">Nuestra línea vanguardista. Diseñada para romper las reglas.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {SNEAKERS_DATA.slice(0, 2).map((sneaker) => (
            <ItemCard key={sneaker.id} data={sneaker} onClick={setSelectedProduct} />
          ))}
        </div>
      </div>

      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </section>
  );
};

export default Catalogue;
