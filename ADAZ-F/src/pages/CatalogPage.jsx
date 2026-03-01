// src/pages/CatalogPage.jsx
import React, { useEffect, useState } from 'react';
import ItemCard from '../components/ItemCard';
import ProductModal from '../components/ProductModal';

const SNEAKERS_DATA = [
  {
    id: 1,
    name: 'Vans Asher',
    category: 'Skate Classic',
    description: 'El icónico diseño a cuadros. Estilo indiscutible y comodidad para todo el día.',
    image: '/assets/vans-asher.png',
    price: '150'
  }
];

const CatalogPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

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
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-8">
          {SNEAKERS_DATA.map((sneaker) => (
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
    </div>
  );
};

export default CatalogPage;
