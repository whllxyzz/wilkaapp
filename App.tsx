
import React, { useState, useEffect, createContext, useContext } from 'react';
import { MemoryRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import About from './pages/About';
import Programs from './pages/Programs';
import Admission from './pages/Admission';
import Admin from './pages/Admin';
import AdminSidebar from './components/AdminSidebar';
import { fetchSiteContent } from './store/contentStore';
import { SiteContent, User } from './types';

interface AppContextType {
  content: SiteContent | null;
  user: User | null;
  refresh: () => void;
  login: (user: User) => void;
  logout: () => void;
}

const AppContext = createContext<AppContextType>({ 
  content: null, 
  user: null,
  refresh: () => {},
  login: () => {},
  logout: () => {}
});

export const useApp = () => useContext(AppContext);

const AppInternal: React.FC = () => {
  const { content, user, refresh: loadData, login, logout } = useApp();
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Navbar onOpenAdmin={() => setIsAdminOpen(true)} />
      <AdminSidebar isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      
      <footer className="bg-white py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-20">
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-slate-950 p-2 rounded-lg">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z" strokeWidth="2.5"/></svg>
                </div>
                <span className="text-xs font-black text-slate-950 tracking-tight uppercase leading-none">SMK NEGERI 2<br/>TEMBILAHAN</span>
              </div>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest flex items-center mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Cloud System Active
              </p>
              <div className="space-y-3">
                 <p className="text-[11px] text-slate-500 font-medium leading-relaxed uppercase tracking-wider">
                   {content?.schoolAddress}
                 </p>
                 <p className="text-[11px] text-blue-600 font-black tracking-widest">{content?.schoolPhone}</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-[10px] font-black text-slate-950 uppercase tracking-[0.3em] mb-8">Eksplorasi</h4>
              <ul className="space-y-4 text-xs font-bold text-slate-500">
                <li><button onClick={() => navigate('/about')} className="hover:text-blue-600 transition-colors">Visi & Misi</button></li>
                <li><button onClick={() => navigate('/programs')} className="hover:text-blue-600 transition-colors">Program Keahlian</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black text-slate-950 uppercase tracking-[0.3em] mb-8">Sistem</h4>
              <ul className="space-y-4 text-xs font-bold text-slate-500">
                <li><button onClick={() => setIsAdminOpen(true)} className="hover:text-blue-600 transition-colors text-left">Admin Gateway</button></li>
                <li><button onClick={() => navigate('/contact')} className="hover:text-blue-600 transition-colors text-left">IT Support</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black text-slate-950 uppercase tracking-[0.3em] mb-8">Ikuti Kami</h4>
              <div className="flex space-x-4">
                {['FB', 'IG', 'YT'].map(s => (
                  <a key={s} href="#" className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-xs font-black text-slate-400 hover:text-blue-600 transition-all">{s}</a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-slate-100">
            <div className="text-[9px] font-black text-slate-300 uppercase tracking-[0.4em]">
              &copy; 2024 SMKN 2 TEMBILAHAN &bull; Dibuat oleh {content?.devName}
            </div>
          </div>
        </div>
      </footer>
      <Chatbot />
    </div>
  );
};

const App: React.FC = () => {
  const [content, setContent] = useState<SiteContent | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const loadData = async () => {
    const data = await fetchSiteContent();
    setContent(data);
    const savedUser = localStorage.getItem('skada_auth_session');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        localStorage.removeItem('skada_auth_session');
      }
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem('skada_auth_session', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('skada_auth_session');
  };

  return (
    <AppContext.Provider value={{ content, user, refresh: loadData, login, logout }}>
      <MemoryRouter>
        <AppInternal />
      </MemoryRouter>
    </AppContext.Provider>
  );
};

export default App;
