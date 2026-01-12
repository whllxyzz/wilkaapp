
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../App';

interface NavbarProps {
  onOpenAdmin: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenAdmin }) => {
  const location = useLocation();
  const { user } = useApp();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Tentang', path: '/about' },
    { name: 'Program', path: '/programs' },
    { name: 'Dashboard', path: '/dashboard' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
      scrolled ? 'py-4 glass border-b border-slate-100/50' : 'py-8 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-8 lg:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="bg-slate-950 p-2 rounded-xl group-hover:bg-blue-600 transition-colors duration-500">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-extrabold tracking-tighter text-slate-950 leading-none">SMKN 2 TEMBILAHAN</span>
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">Situs Resmi</span>
          </div>
        </Link>

        <div className="flex items-center space-x-6">
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-5 py-2 text-[13px] font-bold tracking-tight rounded-full transition-all duration-300 ${
                  location.pathname === link.path 
                    ? 'text-blue-600 bg-blue-50/50' 
                    : 'text-slate-500 hover:text-slate-950 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Link 
              to="/admission" 
              className="hidden sm:block bg-blue-600 text-white px-6 py-2.5 rounded-full text-[12px] font-black uppercase tracking-widest hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200 transition-all active:scale-95"
            >
              Daftar
            </Link>
            
            {/* Tombol Garis 3 Administratif */}
            <button 
              onClick={onOpenAdmin}
              className="p-3 bg-slate-100 hover:bg-slate-950 hover:text-white rounded-2xl transition-all group flex items-center space-x-3"
            >
              {user && <span className="text-[10px] font-black uppercase tracking-widest pl-2 border-r border-slate-200 pr-3">{user.username}</span>}
              <div className="space-y-1.5">
                <div className="w-5 h-0.5 bg-current rounded-full"></div>
                <div className="w-3 h-0.5 bg-current rounded-full ml-auto group-hover:w-5 transition-all"></div>
                <div className="w-5 h-0.5 bg-current rounded-full"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
