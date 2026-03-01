import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ItemCard = ({ data }) => {
  return (
    <article className="group relative bg-white hover:bg-white/80 rounded-3xl overflow-hidden cursor-pointer border border-brand-200 hover:border-brand-400 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(15,43,77,0.15)] hover:-translate-y-1 flex flex-col h-full shadow-sm p-8">
      {/* Content Container */}
      <div className="relative z-30 flex-1 flex flex-col">
        <p className="text-brand-600 text-xs font-bold tracking-[0.2em] uppercase mb-4 group-hover:text-brand-800 transition-colors">
          {data.category}
        </p>
        <h3 className="text-3xl font-black text-brand-900 mb-4 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-900 group-hover:to-brand-600 transition-all">
          {data.name}
        </h3>
        
        <p className="text-brand-700/80 text-sm mb-8 flex-1 font-medium leading-relaxed">
          {data.description}
        </p>
        
        <div className="mt-auto pt-6 flex items-center justify-between border-t border-brand-100 group-hover:border-brand-200 transition-colors">
          <span className="text-brand-700 text-sm font-bold tracking-wide group-hover:text-brand-900 transition-colors">
            Ver Detalles
          </span>
          <div className="w-10 h-10 rounded-full bg-brand-50 border border-brand-200 flex items-center justify-center group-hover:bg-brand-900 text-brand-900 group-hover:text-white transition-all shadow-sm transform group-hover:scale-110 group-hover:border-transparent">
            <ArrowUpRight size={20} strokeWidth={2.5} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default ItemCard;
