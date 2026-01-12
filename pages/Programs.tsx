
import React from 'react';
// Fix: useApp is the correct hook exported from App.tsx
import { useApp } from '../App';
import { Skeleton } from '../components/Skeleton';

const Programs: React.FC = () => {
  // Fix: Use useApp hook instead of non-existent useContent
  const { content } = useApp();

  // Add loading state while content is being fetched
  if (!content) {
    return (
      <div className="py-32 lg:py-48 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="text-center mb-24">
            <Skeleton className="h-12 w-64 mx-auto mb-8" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Skeleton className="h-80 w-full rounded-[2.5rem]" />
            <Skeleton className="h-80 w-full rounded-[2.5rem]" />
            <Skeleton className="h-80 w-full rounded-[2.5rem]" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-reveal py-32 lg:py-48 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <h2 className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Akademik</h2>
          <h1 className="text-5xl font-extrabold text-slate-950 tracking-tighter mb-8 leading-none">Masa Depan Vokasi.</h1>
          <p className="text-lg text-slate-500 font-medium leading-relaxed">Kami menawarkan program keahlian yang telah diselaraskan dengan kebutuhan industri terkini.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.programs.map((prog) => (
            <div key={prog.id} className="bg-white rounded-[2.5rem] premium-shadow border border-slate-100 overflow-hidden hover:border-blue-600 transition-all duration-500">
              <div className={`h-2 bg-${prog.color}-600`}></div>
              <div className="p-10">
                <h3 className="text-2xl font-black text-slate-950 mb-4 tracking-tight">{prog.name}</h3>
                <p className="text-slate-500 mb-10 text-sm leading-relaxed font-medium">{prog.desc}</p>
                <div className="space-y-4">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Kompetensi Utama</h4>
                  <div className="flex flex-wrap gap-2">
                    {prog.focus.map((f, i) => (
                      <span key={i} className={`px-4 py-1.5 bg-${prog.color}-50 text-${prog.color}-600 text-[10px] font-black uppercase tracking-widest rounded-full`}>
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;
