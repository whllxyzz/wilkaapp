
import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../App';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const AdminSidebar: React.FC<Props> = ({ isOpen, onClose }) => {
  const { user, logout } = useApp();

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-slate-950/20 backdrop-blur-sm z-[150] transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-[350px] bg-white z-[200] shadow-2xl transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-10 flex flex-col h-full">
          <div className="flex justify-between items-center mb-16">
            <div className="flex items-center space-x-3">
               <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
               </div>
               <span className="text-xs font-black text-slate-950 uppercase tracking-[0.2em]">Gatekeeper</span>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-slate-50 rounded-full transition-colors">
              <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeWidth="2"/></svg>
            </button>
          </div>

          <div className="space-y-12 flex-grow">
             <div>
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Administrasi</h4>
                <div className="space-y-4">
                   {!user ? (
                     <>
                       <Link to="/admin" onClick={onClose} className="flex items-center space-x-4 p-4 bg-slate-50 hover:bg-blue-600 hover:text-white rounded-2xl transition-all group">
                          <div className="w-8 h-8 rounded-lg bg-white group-hover:bg-white/20 flex items-center justify-center">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" strokeWidth="2"/></svg>
                          </div>
                          <span className="font-bold text-sm tracking-tight">Login Admin</span>
                       </Link>
                       <Link to="/admin" onClick={onClose} className="flex items-center space-x-4 p-4 border border-slate-100 hover:border-blue-600 rounded-2xl transition-all">
                          <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" strokeWidth="2"/></svg>
                          </div>
                          <span className="font-bold text-sm tracking-tight">Daftar Akun Baru</span>
                       </Link>
                     </>
                   ) : (
                     <>
                        <Link to="/admin" onClick={onClose} className="flex items-center space-x-4 p-4 bg-blue-50 text-blue-600 rounded-2xl transition-all">
                           <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                             <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" strokeWidth="2"/></svg>
                           </div>
                           <span className="font-bold text-sm tracking-tight">Dashboard CMS</span>
                        </Link>
                        <button onClick={() => { logout(); onClose(); }} className="w-full flex items-center space-x-4 p-4 text-red-600 hover:bg-red-50 rounded-2xl transition-all">
                           <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center">
                             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" strokeWidth="2"/></svg>
                           </div>
                           <span className="font-bold text-sm tracking-tight">Keluar Sesi</span>
                        </button>
                     </>
                   )}
                </div>
             </div>

             <div>
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Bantuan Cepat</h4>
                <ul className="space-y-4">
                   <li><Link to="/contact" onClick={onClose} className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">IT Support & Maintenance</Link></li>
                   <li><a href="#" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">Panduan CMS SKADA</a></li>
                </ul>
             </div>
          </div>

          <div className="pt-10 border-t border-slate-100">
             <div className="flex items-center space-x-4 mb-4">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Sistem Operasional Normal</span>
             </div>
             <p className="text-[10px] text-slate-300 font-medium">v2.4.0 Cloud-Native Edition</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
