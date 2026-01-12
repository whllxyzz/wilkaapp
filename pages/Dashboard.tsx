
import React from 'react';
// Fix: useApp is the correct hook exported from App.tsx
import { useApp } from '../App';
import { Skeleton } from '../components/Skeleton';

const Dashboard: React.FC = () => {
  // Fix: Use useApp hook instead of non-existent useContent
  const { content } = useApp();
  
  const stats = [
    { label: 'Siswa Aktif', value: '1.420', trend: '+12%', color: 'blue' },
    { label: 'Kelulusan', value: '100%', trend: 'Stabil', color: 'slate' },
    { label: 'Lab Aktif', value: '18 Unit', trend: 'Modern', color: 'indigo' },
    { label: 'Mitra DU/DI', value: '45+', trend: '+5 Baru', color: 'blue' },
  ];

  // Add loading state while content is being fetched
  if (!content) {
    return (
      <div className="py-32 lg:py-48 min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="mb-20">
            <Skeleton className="h-16 w-3/4 mb-4" />
            <Skeleton className="h-4 w-1/4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {[1, 2, 3, 4].map(i => <Skeleton key={i} className="h-40 w-full rounded-[2.5rem]" />)}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <Skeleton className="lg:col-span-4 h-96 rounded-[3rem]" />
            <Skeleton className="lg:col-span-8 h-96 rounded-[3rem]" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-reveal py-32 lg:py-48 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Dashboard</h2>
            <h1 className="text-5xl font-extrabold text-slate-950 tracking-tight leading-none">Manajemen Data Terpadu.</h1>
          </div>
          <div className="flex items-center space-x-4 bg-slate-50 p-2 rounded-2xl border border-slate-100">
             <div className="px-6 py-3 bg-white rounded-xl shadow-sm">
                <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest block mb-1">Status Server</span>
                <div className="flex items-center space-x-2">
                   <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                   <span className="text-xs font-bold text-slate-900 uppercase tracking-tight">Enkripsi Aktif</span>
                </div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((s, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 premium-shadow group hover:border-blue-600 transition-all duration-500">
              <div className="text-4xl font-extrabold text-slate-950 tracking-tighter mb-1">{s.value}</div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">{s.label}</div>
              <div className="flex items-center space-x-2">
                <span className={`text-[9px] font-black uppercase px-2 py-1 rounded-md bg-${s.color}-50 text-${s.color}-600`}>
                  {s.trend}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Developer Card */}
          <div className="lg:col-span-4 bg-slate-950 p-12 rounded-[3rem] text-white shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[400px]">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center font-black text-slate-950 text-xl mb-12">{content.devName.charAt(0).toUpperCase()}</div>
              <h3 className="text-2xl font-bold tracking-tight mb-4 leading-tight">{content.devQuote}</h3>
              <p className="text-slate-400 text-xs font-medium uppercase tracking-[0.2em]">Project Lead: {content.devName}</p>
            </div>
            <div className="relative z-10 pt-10 border-t border-white/5">
               <div className="flex flex-wrap gap-2">
                  {['Architecture', 'Artificial Intelligence', 'Systems Design'].map(t => (
                    <span key={t} className="text-[8px] font-black uppercase tracking-widest text-slate-500 border border-slate-800 px-3 py-1 rounded-full">{t}</span>
                  ))}
               </div>
            </div>
          </div>

          {/* Agenda Table */}
          <div className="lg:col-span-8 bg-white p-12 rounded-[3rem] border border-slate-100 premium-shadow">
            <h3 className="text-lg font-black text-slate-950 tracking-tight uppercase mb-12">Agenda Akademik</h3>
            <div className="space-y-4">
              {[
                { date: '12 Jan', title: 'Uji Kompetensi Keahlian (UKK) Nasional', tag: 'Penting' },
                { date: '18 Jan', title: 'Rapat Sinkronisasi Kurikulum Industri', tag: 'Humas' },
                { date: '25 Jan', title: 'Magang Industri Gelombang 1', tag: 'Siswa' },
              ].map((a, i) => (
                <div key={i} className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-transparent hover:border-slate-100 hover:bg-white transition-all duration-300 group">
                  <div className="flex items-center space-x-8">
                    <span className="text-xs font-black text-blue-600 uppercase tracking-widest w-16">{a.date}</span>
                    <span className="font-bold text-slate-950 group-hover:text-blue-600 transition-colors">{a.title}</span>
                  </div>
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest border border-slate-200 px-3 py-1 rounded-lg">{a.tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
