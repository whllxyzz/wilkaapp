
import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../App';
import { HomeSkeleton } from '../components/Skeleton';

const Home: React.FC = () => {
  const { content } = useApp();

  if (!content) return <HomeSkeleton />;

  const formatPostedDate = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  return (
    <div className="animate-reveal">
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 lg:pt-64 lg:pb-48 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10 text-center lg:text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center space-x-3 mb-8 px-4 py-1.5 bg-slate-50 border border-slate-100 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Situs Resmi - Cloud Synced</span>
              </div>
              
              <h1 className="text-6xl lg:text-[100px] font-extrabold text-slate-950 leading-[0.95] tracking-[-0.05em] mb-10 whitespace-pre-line">
                {content.heroTitle}
              </h1>
              
              <p className="text-xl text-slate-500 mb-14 max-w-xl font-medium leading-relaxed">
                {content.heroSubtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                <Link to="/admission" className="px-12 py-5 bg-slate-950 text-white rounded-full font-bold text-sm hover:bg-blue-600 hover:shadow-2xl transition-all duration-500 text-center">
                  Mulai Pendaftaran
                </Link>
                <Link to="/programs" className="px-12 py-5 bg-white border border-slate-200 text-slate-900 rounded-full font-bold text-sm hover:bg-slate-50 transition-all duration-500 text-center">
                  Jelajahi Program
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-[4rem] overflow-hidden group shadow-2xl">
                <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                <img 
                  src={content.heroImage} 
                  alt="SMKN 2 Tembilahan" 
                  className="w-full aspect-[4/5] object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-slate-50/50 border-y border-slate-100/50">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-20">
            {content.stats.map((s, i) => (
              <div key={i} className="text-center lg:text-left">
                <div className="text-5xl font-extrabold text-slate-950 tracking-tighter mb-2">{s.val}</div>
                <div className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-3">{s.label}</div>
                <p className="text-[11px] text-slate-400 font-medium uppercase tracking-widest">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="text-center mb-24">
            <h2 className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Inspirasi Karir</h2>
            <h1 className="text-5xl font-extrabold text-slate-950 tracking-tight leading-none">Apa Kata Alumni?</h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {content.testimonials.map((t) => (
              <div key={t.id} className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100 relative group hover:bg-white hover:shadow-2xl hover:shadow-blue-100 transition-all duration-700">
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center space-x-6">
                    <img src={t.image} alt={t.name} className="w-16 h-16 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                    <div>
                      <h4 className="font-black text-slate-950 uppercase tracking-tight">{t.name}</h4>
                      <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">{t.batch}</p>
                    </div>
                  </div>
                  <span className="text-[8px] font-black text-slate-300 uppercase tracking-[0.3em]">Record: {formatPostedDate(t.createdAt)}</span>
                </div>
                <p className="text-lg font-bold text-slate-500 leading-relaxed mb-8 italic">"{t.quote}"</p>
                <div className="pt-8 border-t border-slate-200">
                   <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Karier: {t.workplace}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-32 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 text-center md:text-left">
            <div className="max-w-xl">
              <h2 className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Warta SKADA</h2>
              <h1 className="text-5xl font-extrabold text-slate-950 tracking-tight leading-none">Berita Terkini.</h1>
            </div>
            <Link to="/news" className="text-[11px] font-black uppercase tracking-widest border-b-2 border-slate-950 pb-1 hover:text-blue-600 hover:border-blue-600 transition-all">Lihat Arsip Berita</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {content.news.map((item) => (
              <div key={item.id} className="group cursor-pointer bg-white rounded-[3rem] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-700">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute top-6 left-6 px-4 py-1.5 bg-blue-600 rounded-full text-[8px] font-black uppercase tracking-widest text-white shadow-lg">{item.category}</div>
                </div>
                <div className="p-10 space-y-4">
                  <div className="flex justify-between items-center text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    <span>{item.date}</span>
                    <span className="text-[8px] text-slate-200">• Upload: {formatPostedDate(item.createdAt)}</span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-950 leading-tight group-hover:text-blue-600 transition-colors">{item.title}</h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed line-clamp-2">{item.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 bg-slate-950 text-white rounded-[5rem] mx-4 mb-12 overflow-hidden shadow-2xl">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="text-center mb-24">
            <h2 className="text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Lensa Kampus</h2>
            <h1 className="text-5xl font-extrabold tracking-tight">Koleksi Digital.</h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.gallery.map((img) => (
              <div key={img.id} className="group relative aspect-square rounded-[3rem] overflow-hidden border border-white/5">
                <img src={img.url} alt={img.caption} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-x-8 bottom-8 p-6 bg-white/10 backdrop-blur rounded-[2rem] translate-y-20 group-hover:translate-y-0 transition-transform duration-500 border border-white/10 text-center">
                   <p className="text-xs font-black uppercase tracking-widest mb-2">{img.caption}</p>
                   <p className="text-[8px] font-bold text-white/40 uppercase tracking-[0.2em]">{formatPostedDate(img.createdAt)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
