import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ItemCard = ({ data, onClick }) => {
  return (
    <article 
      onClick={() => onClick && onClick(data)}
      className="group relative bg-white hover:bg-white/80 rounded-3xl overflow-hidden cursor-pointer border border-brand-200 hover:border-brand-400 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(15,43,77,0.15)] hover:-translate-y-1 flex flex-col h-full shadow-sm p-8">
      
      {/* Image Container */}
      <div className="relative aspect-[4/3] bg-brand-100/30 flex items-center justify-center p-8 overflow-hidden rounded-t-3xl">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-brand-200),transparent_70%)] opacity-0 group-hover:opacity-60 transition-opacity duration-700 z-0 mix-blend-multiply"></div>
        
        <img 
          src={data.image} 
          alt={data.name} 
          className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_15px_20px_rgba(0,0,0,0.1)] group-hover:drop-shadow-[0_25px_30px_rgba(15,43,77,0.2)] transition-all duration-700 ease-out group-hover:scale-110 group-hover:-rotate-3" 
        />
        
        {/* Inner gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent opacity-100 group-hover:opacity-70 transition-opacity duration-500 z-20 pointer-events-none"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-30 flex-1 flex flex-col p-8 bg-white/95 md:bg-gradient-to-b md:from-transparent md:to-white/90 -mt-12 pt-16 rounded-b-3xl">
        <p className="text-brand-600 text-xs font-bold tracking-[0.2em] uppercase mb-2 group-hover:text-brand-800 transition-colors">
          {data.category}
        </p>
        <h3 className="text-2xl font-black text-brand-900 mb-3 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-900 group-hover:to-brand-600 transition-all">
          {data.name}
        </h3>
        
        <p className="text-brand-700 text-sm mb-6 flex-1 lg:opacity-0 lg:translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 transform font-medium">
          {data.description}
        </p>
        
        
        <p className="text-brand-500 font-bold text-xs uppercase tracking-widest mb-4">
          Unisex (MN - WM)
        </p>

        <div className="mt-auto pt-4 flex items-center justify-between border-t border-brand-200/60">
          <span className="text-brand-700 text-sm font-bold tracking-wide group-hover:text-brand-900 transition-colors">
            Ver Detalles
          </span>
          <div className="w-10 h-10 rounded-full bg-white border border-brand-200 flex items-center justify-center group-hover:bg-brand-900 text-brand-900 group-hover:text-white transition-all shadow-sm transform group-hover:-rotate-12 group-hover:border-transparent">
            <ArrowUpRight size={20} strokeWidth={2.5} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default ItemCard;
