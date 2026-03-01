// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Catalogue from '../components/Catalogue';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex items-center min-h-[95vh] overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] bg-[radial-gradient(circle_at_center,var(--color-brand-300),transparent_60%)] opacity-30 blur-[80px] pointer-events-none rounded-full"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,var(--color-brand-200),transparent_60%)] opacity-40 blur-[100px] pointer-events-none rounded-full"></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-16">
              
              {/* Text Content */}
              <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start z-20">
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-brand-200 bg-white/50 backdrop-blur-sm mb-8 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                    <p className="text-brand-700 text-sm font-semibold tracking-widest uppercase">Únete a la vanguardia</p>
                  </div>

                  <h1 className="text-5xl md:text-7xl lg:text-7xl xl:text-[5.5rem] font-black tracking-tighter leading-[1.1] mb-8 drop-shadow-sm text-brand-900 uppercase">
                      Versatilidad y vanguardismo, <br/>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-900 via-brand-600 to-brand-800">sin reglas</span>
                  </h1>
                  
                  <p className="text-brand-600 text-lg md:text-xl max-w-xl mb-12 leading-relaxed font-medium">
                      ADAZ representa personalidad. Explora nuestra selección en el catálogo.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-5">
                      <a href="#destacado" className="bg-brand-900 text-white px-10 py-5 rounded-full font-bold hover:bg-brand-700 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-[0_15px_30px_rgba(15,43,77,0.2)] focus:ring-4 focus:ring-brand-500/50 flex justify-center items-center gap-2">
                          Ver Destacado
                      </a>
                      <Link to="/catalogo" className="glass px-10 py-5 rounded-full font-bold text-brand-900 hover:bg-white/80 transition-all duration-300 flex justify-center items-center">
                          Ver Catálogo
                      </Link>
                  </div>
              </div>

              {/* Hero Graphic */}
              <div className="flex-1 relative w-full max-w-2xl hidden lg:flex justify-center items-center">
                <div className="absolute inset-0 bg-brand-300/40 blur-[120px] rounded-full animate-pulse"></div>
                {/* Floating Sneaker */}
                <div className="relative z-10 w-full aspect-square flex items-center justify-center animate-[float_6s_ease-in-out_infinite]">
                  <img 
                    src="/assets/vans-asher.png" 
                    alt="Vans Asher" 
                    className="w-[120%] max-w-none h-auto object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.15)] transform -rotate-12 hover:rotate-0 transition-transform duration-1000 ease-out"
                  />
                </div>
              </div>
          </div>
      </header>

      <Catalogue />
    </>
  );
};

export default Home;
