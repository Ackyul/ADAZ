import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import CatalogPage from './pages/CatalogPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-brand-50 font-sans text-brand-900 selection:bg-brand-500 selection:text-white overflow-x-hidden flex flex-col">
        <Header />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<CatalogPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="border-t border-brand-200 py-16 bg-brand-100 relative z-20 mt-auto">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-brand-200 pb-12 mb-8">
                <div className="flex items-center gap-3">
                    <img src="/src/assets/logo-icon.png" alt="ADAZ" className="w-8 h-8 object-contain" />
                    <span className="font-black text-3xl tracking-tighter text-brand-900">ADAZ</span>
                </div>
                
                <div className="flex gap-8 text-brand-700 font-semibold text-sm">
                    <a href="#" className="hover:text-brand-900 transition-colors">Instagram</a>
                    <a href="#" className="hover:text-brand-900 transition-colors">TikTok</a>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row justify-between items-center text-brand-600 text-sm font-medium">
                <p>© 2026 ADAZ Sneakers. Estética y rendimiento.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                  <a href="#" className="hover:text-brand-900 transition-colors">Privacidad</a>
                  <a href="#" className="hover:text-brand-900 transition-colors">Términos</a>
                </div>
              </div>
            </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
