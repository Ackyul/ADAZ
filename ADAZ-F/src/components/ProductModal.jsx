import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ShoppingBag } from 'lucide-react';

const SIZES = [38, 39, 40, 41, 42, 43, 44];

const ProductModal = ({ product, onClose }) => {

  useEffect(() => {
    if (product) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [product]);

  if (!product) return null;

  const modalContent = (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-brand-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      
      {/* Modal Container */}
      <div className="relative bg-white rounded-[2rem] overflow-hidden w-full max-w-[95%] md:max-w-5xl lg:max-w-6xl shadow-2xl flex flex-col md:flex-row transform transition-all max-h-[90vh]">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/80 backdrop-blur-md text-brand-900 rounded-full flex items-center justify-center hover:bg-brand-100 transition-colors shadow-sm"
        >
          <X size={20} />
        </button>

        {/* Image Section */}
        <div className="w-full md:w-1/2 bg-brand-100/30 p-6 md:p-8 flex items-center justify-center relative min-h-[220px] md:min-h-[300px] flex-shrink-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-brand-200),transparent_70%)] opacity-60 z-0 mix-blend-multiply"></div>
          <img 
            src={product.image} 
            alt={product.name} 
            className="relative z-10 w-full h-auto max-h-[180px] md:max-h-full object-contain drop-shadow-[0_20px_25px_rgba(15,43,77,0.2)]" 
          />
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center overflow-y-auto">
          <p className="text-brand-600 text-sm font-bold tracking-[0.2em] uppercase mb-3">
            {product.category}
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-brand-900 mb-2 tracking-tight">
            {product.name}
          </h2>
          
          <div className="text-3xl md:text-4xl font-black text-brand-900 mb-4 flex items-start gap-1">
            <span className="text-lg md:text-xl mt-1 font-bold">S/.</span> 
            <span>{product.price || '150'}</span>
          </div>

          <p className="text-brand-700/90 text-sm md:text-lg mb-6 leading-relaxed font-medium">
            {product.description}
          </p>
          
          {/* Size Selector */}
          <div className="mb-4">
            <h4 className="text-brand-900 font-bold mb-3 flex items-center justify-between text-sm md:text-base">
              <span>Selecciona tu talla (EU)</span>
            </h4>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {SIZES.map((size) => (
                <div
                  key={size}
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-xl border-2 flex items-center justify-center font-bold text-base md:text-lg ${
                    size !== 40 
                      ? 'border-brand-200 bg-brand-50 text-brand-300 opacity-50 relative overflow-hidden before:absolute before:inset-0 before:border-b-2 before:border-brand-200 before:rotate-45 before:-translate-y-1'
                      : 'border-brand-900 bg-brand-900 text-white shadow-md'
                  }`}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );

  // Use a portal to render the modal at the root level, above all other stacking contexts (headers, footers)
  return createPortal(modalContent, document.body);
};

export default ProductModal;
