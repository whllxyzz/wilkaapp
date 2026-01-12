
import React, { useState, useEffect } from 'react';
import { useApp } from '../App';
import { syncToCloud, resetDatabase } from '../store/contentStore';
import { SiteContent, NewsItem, GalleryItem, TeacherItem, TestimonialItem } from '../types';
import { Skeleton } from '../components/Skeleton';

const Admin: React.FC = () => {
  const { content: globalContent, refresh, user, login } = useApp();
  const [localContent, setLocalContent] = useState<SiteContent | null>(null);
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved'>('idle');
  const [activeTab, setActiveTab] = useState<'hero' | 'news' | 'gallery' | 'school' | 'people'>('hero');
  
  const [formData, setFormData] = useState({ user: '', pass: '' });
  const [authLoading, setAuthLoading] = useState(false);
  const [authSuccess, setAuthSuccess] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  useEffect(() => {
    if (globalContent) setLocalContent({ ...globalContent });
  }, [globalContent]);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (authLoading) return;
    setAuthLoading(true);
    setAuthError(null);
    try {
      await new Promise(r => setTimeout(r, 1000));
      if (formData.user === 'wilka' && formData.pass === 'wilka') {
        setAuthSuccess(true);
        await new Promise(r => setTimeout(r, 800));
        login({ username: formData.user, role: 'admin' });
      } else {
        setAuthError("Kredensial tidak valid.");
      }
    } finally {
      setAuthLoading(false);
    }
  };

  const handleSave = async () => {
    if (!localContent) return;
    setStatus('saving');
    const success = await syncToCloud(localContent);
    if (success) {
      setStatus('saved');
      refresh();
      setTimeout(() => setStatus('idle'), 2000);
    }
  };

  const handleReset = async () => {
    if (window.confirm("CRITICAL: Reset semua konten?")) {
      await resetDatabase();
      refresh();
      window.location.reload();
    }
  };

  const removeItem = (type: keyof SiteContent, id: string) => {
    if (!localContent) return;
    if (window.confirm(`Hapus item ini secara permanen?`)) {
      setLocalContent({
        ...localContent,
        [type]: (localContent[type] as any[]).filter((item: any) => item.id !== id)
      });
    }
  };

  const addNewItem = (type: 'news' | 'teachers' | 'testimonials' | 'gallery') => {
    if (!localContent) return;
    const now = new Date().toISOString();
    const id = `${type.charAt(0)}-${Date.now()}`;
    
    let newItem: any;
    if (type === 'news') {
      newItem = { id, title: 'Judul Baru', date: 'Hari ini', category: 'Umum', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4', excerpt: 'Tulis ringkasan...', createdAt: now };
    } else if (type === 'teachers') {
      newItem = { id, name: 'Nama Guru', role: 'Jabatan', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a', createdAt: now };
    } else if (type === 'testimonials') {
      newItem = { id, name: 'Nama Alumni', batch: '2024', workplace: 'Perusahaan', quote: 'Pesan...', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e', createdAt: now };
    } else if (type === 'gallery') {
      newItem = { id, url: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837', caption: 'Caption Baru', createdAt: now };
    }

    setLocalContent({
      ...localContent,
      [type]: [...(localContent[type] as any[]), newItem]
    });
  };

  const formatSystemDate = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleString('id-ID', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  };

  if (!user) {
    return (
      <div className="min-h-screen pt-48 pb-32 bg-slate-50 flex items-center justify-center px-8">
        <div className="max-w-md w-full animate-reveal">
          <div className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-2xl relative overflow-hidden">
            {authSuccess && (
              <div className="absolute inset-0 bg-blue-600 z-50 flex flex-col items-center justify-center text-white animate-reveal">
                <span className="text-2xl font-black text-center">Akses Diterima.<br/>Membuka Portal...</span>
              </div>
            )}
            <div className="text-center mb-12">
              <h1 className="text-3xl font-black text-slate-950 mb-2 tracking-tight uppercase">Admin Gateway</h1>
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">SKADA Cloud Systems</p>
            </div>
            {authError && <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-2xl text-[11px] font-bold">{authError}</div>}
            <form className="space-y-6" onSubmit={handleAuth}>
              <div className="space-y-2">
                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Username</label>
                <input required type="text" value={formData.user} onChange={e => setFormData({...formData, user: e.target.value})} className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl font-bold outline-none" placeholder="wilka" />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Password</label>
                <input required type="password" value={formData.pass} onChange={e => setFormData({...formData, pass: e.target.value})} className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl font-bold outline-none" placeholder="••••" />
              </div>
              <button type="submit" disabled={authLoading} className="w-full py-5 bg-slate-950 text-white rounded-full font-black uppercase tracking-widest text-[11px] hover:bg-blue-600 transition-all">
                {authLoading ? 'Verifikasi...' : 'Autentikasi'}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  if (!localContent) return <div className="p-48"><Skeleton className="h-96 w-full" /></div>;

  return (
    <div className="animate-reveal py-48 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-8">
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-3">Management Cloud</h1>
            <div className="flex flex-wrap gap-2">
              {[
                {id: 'hero', label: 'Home Hero'},
                {id: 'news', label: 'Warta SKADA'},
                {id: 'people', label: 'Guru & Alumni'},
                {id: 'gallery', label: 'Lensa Kampus'},
                {id: 'school', label: 'Info Kontak'}
              ].map((t) => (
                <button 
                  key={t.id}
                  onClick={() => setActiveTab(t.id as any)}
                  className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === t.id ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-white text-slate-400 hover:text-slate-900 border border-slate-100'}`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {user.role === 'admin' && (
              <button onClick={handleReset} className="px-6 py-2 text-[10px] font-black uppercase tracking-widest text-red-500 hover:bg-red-50 rounded-xl transition-all border border-red-100">Reset</button>
            )}
            <button 
              onClick={handleSave} 
              disabled={status === 'saving'} 
              className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest text-white shadow-xl ${status === 'saved' ? 'bg-green-600' : 'bg-slate-950 hover:bg-blue-600'}`}
            >
              {status === 'saving' ? 'Syncing...' : 'Sync to Cloud'}
            </button>
          </div>
        </div>

        <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm min-h-[500px]">
          {activeTab === 'hero' && (
            <div className="space-y-8 animate-reveal">
              <div className="space-y-2">
                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Main Headline</label>
                <textarea value={localContent.heroTitle} onChange={e => setLocalContent({...localContent, heroTitle: e.target.value})} className="w-full bg-slate-50 border-none px-6 py-4 rounded-2xl font-bold outline-none h-32" />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Sub Headline</label>
                <textarea value={localContent.heroSubtitle} onChange={e => setLocalContent({...localContent, heroSubtitle: e.target.value})} className="w-full bg-slate-50 border-none px-6 py-4 rounded-2xl font-bold outline-none h-24" />
              </div>
            </div>
          )}

          {activeTab === 'people' && (
            <div className="space-y-16 animate-reveal">
               <section>
                  <div className="flex justify-between items-center mb-8">
                    <h3 className="text-lg font-black text-slate-950 uppercase tracking-tight flex items-center">
                      <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mr-3 text-xs">G</span>
                      Daftar Guru & Staf
                    </h3>
                    <button onClick={() => addNewItem('teachers')} className="px-4 py-2 bg-slate-950 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all">+ Tambah Guru</button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {localContent.teachers.map(t => (
                      <div key={t.id} className="p-6 bg-slate-50 rounded-3xl flex items-center space-x-4 relative group">
                         <img src={t.image} className="w-16 h-16 rounded-2xl object-cover" alt="" />
                         <div className="flex-grow space-y-2">
                            <input value={t.name} onChange={e => {
                               const newTeachers = localContent.teachers.map(x => x.id === t.id ? {...x, name: e.target.value} : x);
                               setLocalContent({...localContent, teachers: newTeachers});
                            }} className="w-full bg-transparent font-bold text-sm outline-none border-b border-transparent focus:border-blue-600" />
                            <div className="flex justify-between items-center">
                              <input value={t.role} onChange={e => {
                                 const newTeachers = localContent.teachers.map(x => x.id === t.id ? {...x, role: e.target.value} : x);
                                 setLocalContent({...localContent, teachers: newTeachers});
                              }} className="bg-transparent text-[10px] font-black uppercase text-slate-400 outline-none" />
                              <span className="text-[8px] text-slate-300 font-bold uppercase">{formatSystemDate(t.createdAt)}</span>
                            </div>
                         </div>
                         <button onClick={() => removeItem('teachers', t.id)} className="absolute -top-2 -right-2 p-2 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all scale-75 shadow-lg">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                         </button>
                      </div>
                    ))}
                  </div>
               </section>

               <section>
                  <div className="flex justify-between items-center mb-8">
                    <h3 className="text-lg font-black text-slate-950 uppercase tracking-tight flex items-center">
                      <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mr-3 text-xs">A</span>
                      Testimoni Alumni
                    </h3>
                    <button onClick={() => addNewItem('testimonials')} className="px-4 py-2 bg-slate-950 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all">+ Tambah Testimoni</button>
                  </div>
                  <div className="space-y-6">
                    {localContent.testimonials.map(tm => (
                      <div key={tm.id} className="p-8 bg-slate-50 rounded-[2.5rem] space-y-4 relative group">
                         <div className="grid grid-cols-2 gap-4">
                            <input value={tm.name} onChange={e => {
                               const nt = localContent.testimonials.map(x => x.id === tm.id ? {...x, name: e.target.value} : x);
                               setLocalContent({...localContent, testimonials: nt});
                            }} className="bg-white px-4 py-2 rounded-xl font-bold text-sm outline-none" />
                            <input value={tm.batch} onChange={e => {
                               const nt = localContent.testimonials.map(x => x.id === tm.id ? {...x, batch: e.target.value} : x);
                               setLocalContent({...localContent, testimonials: nt});
                            }} className="bg-white px-4 py-2 rounded-xl font-bold text-sm outline-none" />
                         </div>
                         <textarea value={tm.quote} onChange={e => {
                            const nt = localContent.testimonials.map(x => x.id === tm.id ? {...x, quote: e.target.value} : x);
                            setLocalContent({...localContent, testimonials: nt});
                         }} className="w-full bg-white px-4 py-2 rounded-xl font-medium text-sm outline-none h-20" />
                         <div className="flex justify-between items-center text-[9px] font-black text-slate-300 uppercase tracking-widest">
                            <span>Diposting pada: {formatSystemDate(tm.createdAt)}</span>
                            <button onClick={() => removeItem('testimonials', tm.id)} className="text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-all">Hapus Permanen</button>
                         </div>
                      </div>
                    ))}
                  </div>
               </section>
            </div>
          )}

          {activeTab === 'news' && (
            <div className="space-y-12 animate-reveal">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-black text-slate-950 uppercase tracking-tight">Postingan Berita</h3>
                <button onClick={() => addNewItem('news')} className="px-6 py-3 bg-slate-950 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl">+ Berita Baru</button>
              </div>
              <div className="grid grid-cols-1 gap-8">
                {localContent.news.map((item) => (
                  <div key={item.id} className="p-8 bg-slate-50 rounded-[3rem] space-y-6 relative group border border-transparent hover:border-slate-100 hover:bg-white transition-all">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Judul & Kategori</label>
                          <input value={item.title} onChange={e => {
                             const nn = localContent.news.map(n => n.id === item.id ? {...n, title: e.target.value} : n);
                             setLocalContent({...localContent, news: nn});
                          }} className="w-full bg-slate-100 border-none px-5 py-3 rounded-xl font-bold text-sm outline-none" />
                          <input value={item.category} onChange={e => {
                             const nn = localContent.news.map(n => n.id === item.id ? {...n, category: e.target.value} : n);
                             setLocalContent({...localContent, news: nn});
                          }} className="w-full bg-slate-100 border-none px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-widest outline-none text-blue-600" />
                        </div>
                      </div>
                      <div className="space-y-4">
                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Konten Ringkas</label>
                        <textarea value={item.excerpt} onChange={e => {
                           const nn = localContent.news.map(n => n.id === item.id ? {...n, excerpt: e.target.value} : n);
                           setLocalContent({...localContent, news: nn});
                        }} className="w-full bg-slate-100 border-none px-5 py-3 rounded-xl font-medium text-sm outline-none h-24" />
                      </div>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                       <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Database Record: {formatSystemDate(item.createdAt)}</span>
                       <button onClick={() => removeItem('news', item.id)} className="text-[9px] font-black text-red-400 uppercase tracking-widest hover:text-red-600">Hapus Artikel</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'gallery' && (
            <div className="animate-reveal space-y-12">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-black text-slate-950 uppercase tracking-tight">Koleksi Visual</h3>
                <button onClick={() => addNewItem('gallery')} className="px-6 py-3 bg-slate-950 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all">+ Upload Foto</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {localContent.gallery.map((img) => (
                  <div key={img.id} className="relative group rounded-[2.5rem] overflow-hidden aspect-square bg-slate-50 border border-slate-100">
                    <img src={img.url} className="w-full h-full object-cover" alt="" />
                    <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-8 text-center space-y-4">
                       <input 
                        value={img.caption} 
                        onChange={e => {
                          const newGal = localContent.gallery.map(g => g.id === img.id ? {...g, caption: e.target.value} : g);
                          setLocalContent({...localContent, gallery: newGal});
                        }} 
                        className="w-full bg-white/20 backdrop-blur border-none px-4 py-2 rounded-xl text-[10px] font-bold outline-none text-white text-center" 
                      />
                      <span className="text-[8px] text-white/40 uppercase tracking-widest">{formatSystemDate(img.createdAt)}</span>
                      <button onClick={() => removeItem('gallery', img.id)} className="bg-red-500 text-white px-6 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest">Hapus</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'school' && (
            <div className="space-y-8 animate-reveal">
               <div className="space-y-2">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Alamat Fisik</label>
                  <textarea value={localContent.schoolAddress} onChange={e => setLocalContent({...localContent, schoolAddress: e.target.value})} className="w-full bg-slate-50 border-none px-6 py-4 rounded-2xl font-bold outline-none h-24" />
               </div>
               <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Email Korespondensi</label>
                    <input value={localContent.schoolEmail} onChange={e => setLocalContent({...localContent, schoolEmail: e.target.value})} className="w-full bg-slate-50 border-none px-6 py-4 rounded-2xl font-bold outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Line Telepon</label>
                    <input value={localContent.schoolPhone} onChange={e => setLocalContent({...localContent, schoolPhone: e.target.value})} className="w-full bg-slate-50 border-none px-6 py-4 rounded-2xl font-bold outline-none" />
                  </div>
               </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
