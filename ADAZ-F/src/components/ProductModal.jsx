import React from 'react';
import { X, ShoppingBag } from 'lucide-react';

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-brand-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      
      {/* Modal Container */}
      <div className="relative bg-white rounded-[2rem] overflow-hidden w-full max-w-4xl shadow-2xl flex flex-col md:flex-row transform transition-all max-h-[90vh]">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/80 backdrop-blur-md text-brand-900 rounded-full flex items-center justify-center hover:bg-brand-100 transition-colors shadow-sm"
        >
          <X size={20} />
        </button>

        {/* Image Section */}
        <div className="w-full md:w-1/2 bg-brand-100/30 p-8 flex items-center justify-center relative min-h-[300px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-brand-200),transparent_70%)] opacity-60 z-0 mix-blend-multiply"></div>
          <img 
            src={product.image} 
            alt={product.name} 
            className="relative z-10 w-full h-auto max-h-full object-contain drop-shadow-[0_20px_25px_rgba(15,43,77,0.2)]" 
          />
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center overflow-y-auto">
          <p className="text-brand-600 text-sm font-bold tracking-[0.2em] uppercase mb-3">
            {product.category}
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-brand-900 mb-2 tracking-tight">
            {product.name}
          </h2>
          
          <div className="text-4xl font-black text-brand-900 mb-6 flex items-start gap-1">
            <span className="text-xl mt-1 font-bold">S/.</span> 
            <span>{product.price || '150'}</span>
          </div>

          <p className="text-brand-700/90 text-base md:text-lg mb-8 leading-relaxed font-medium">
            {product.description}
          </p>
          
          <div className="mb-8 p-5 bg-brand-50 border border-brand-200 rounded-2xl flex items-center gap-4 text-brand-800 font-medium">
             <span className="text-xl">📏</span> 
             <span>Aquí próximamente seleccionarán las tallas.</span>
          </div>

          <button className="w-full bg-brand-900 text-white flex items-center justify-center gap-3 py-5 rounded-full font-bold text-lg hover:bg-brand-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            <ShoppingBag size={20} />
            Añadir a la Bolsa
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductModal;
