import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ShoppingBag } from 'lucide-react';

const SIZES_MN = [39, 40, 41, 42, 43, 44];
const SIZES_WM = [35, 36, 37, 38, 39, 40];

const ProductModal = ({ product, onClose }) => {
  const [selectedGender, setSelectedGender] = useState('MN');

  useEffect(() => {
    if (product) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [product]);

  if (!product) return null;

  const currentImage = selectedGender === 'MN' ? '/assets/asher-m.png' : '/assets/vans-asher.png';
  const currentName = selectedGender === 'MN' ? 'ASHER-M' : 'ASHER-W';

  const modalContent = (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-brand-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      
      {/* Modal Container */}
      <div className="relative bg-white rounded-[2rem] overflow-hidden w-full max-w-lg shadow-2xl flex flex-col transform transition-all max-h-[90vh]">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/80 backdrop-blur-md text-brand-900 rounded-full flex items-center justify-center hover:bg-brand-100 transition-colors shadow-sm"
        >
          <X size={20} />
        </button>

        {/* Content Scroll Wrapper */}
        <div className="overflow-y-auto">
          {/* Image Section */}
          <div className="w-full bg-brand-100/30 p-8 flex items-center justify-center relative min-h-[250px] md:min-h-[350px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-brand-200),transparent_70%)] opacity-60 z-0 mix-blend-multiply"></div>
            <img 
              src={currentImage} 
              alt={currentName} 
              className="relative z-10 w-full h-auto max-w-[280px] md:max-w-[400px] object-contain drop-shadow-[0_20px_25px_rgba(15,43,77,0.2)]" 
            />
          </div>

          {/* Details Section */}
          <div className="w-full p-8 flex flex-col">
            <p className="text-brand-600 text-sm font-bold tracking-[0.2em] uppercase mb-2">
              {product.category}
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-brand-900 mb-2 tracking-tight">
              {currentName}
            </h2>
            
            <div className="text-2xl md:text-4xl font-black text-brand-900 mb-4 flex items-start gap-1">
              <span className="text-base md:text-xl mt-1 font-bold">S/.</span> 
              <span>{product.price || '150'}</span>
            </div>

            <p className="text-brand-700/90 text-sm md:text-base mb-8 leading-relaxed font-medium">
              {product.description}
            </p>
            
            {/* Gender Selector */}
            <div className="mb-6">
              <h4 className="text-brand-900 font-bold mb-3 flex items-center justify-between text-sm md:text-base">
                <span>Género</span>
              </h4>
              <div className="inline-flex bg-brand-50 p-1.5 rounded-full border border-brand-200 shadow-inner w-full md:w-auto">
                <button
                  onClick={() => setSelectedGender('MN')}
                  className={`flex-1 md:flex-none px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                    selectedGender === 'MN' 
                      ? 'bg-white text-brand-900 shadow-sm border border-brand-200' 
                      : 'text-brand-600 hover:text-brand-900 transparent'
                  }`}
                >
                  MN
                </button>
                <button
                  onClick={() => setSelectedGender('WM')}
                  className={`flex-1 md:flex-none px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                    selectedGender === 'WM' 
                      ? 'bg-white text-brand-900 shadow-sm border border-brand-200' 
                      : 'text-brand-600 hover:text-brand-900 transparent'
                  }`}
                >
                  WM
                </button>
              </div>
            </div>
            
            {/* Size Selector */}
            <div className="mb-2">
              <h4 className="text-brand-900 font-bold mb-3 flex items-center justify-between text-sm md:text-base">
                <span>Selecciona tu talla (EU)</span>
              </h4>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {(selectedGender === 'MN' ? SIZES_MN : SIZES_WM).map((size) => (
                  <div
                    key={size}
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-xl border-2 flex items-center justify-center font-bold text-base md:text-lg ${
                      !(size === 40 && selectedGender === 'WM')
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
    </div>
  );

  // Use a portal to render the modal at the root level, above all other stacking contexts (headers, footers)
  return createPortal(modalContent, document.body);
};

export default ProductModal;
