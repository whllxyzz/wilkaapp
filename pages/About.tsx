
import React from 'react';
import { useApp } from '../App';
import { Skeleton } from '../components/Skeleton';

const About: React.FC = () => {
  const { content } = useApp();

  if (!content) return (
    <div className="p-48"><Skeleton className="h-96 w-full" /></div>
  );

  return (
    <div className="animate-reveal py-32 lg:py-48 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="text-center mb-32">
          <h2 className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Mengenal SKADA</h2>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-950 tracking-tighter mb-8 leading-none">Membangun Masa Depan.</h1>
          <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">Sejak didirikan, SMK Negeri 2 Tembilahan berkomitmen menjadi pusat unggulan vokasi di Riau.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center mb-48">
          <div>
            <div className="relative rounded-[4rem] overflow-hidden">
               <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1000" alt="History" className="w-full aspect-square object-cover" />
               <div className="absolute inset-0 bg-blue-600/10"></div>
            </div>
          </div>
          <div className="space-y-10">
            <h2 className="text-4xl font-black text-slate-950 tracking-tight leading-none uppercase">Visi & Misi</h2>
            <div className="space-y-8">
               <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100">
                  <h4 className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-4">Visi Kami</h4>
                  <p className="text-xl font-bold text-slate-900 leading-snug">"Menjadi lembaga pendidikan vokasi yang menghasilkan lulusan kompeten, berakhlak mulia, dan siap bersaing secara global."</p>
               </div>
               <div className="space-y-4 ml-6">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Misi Strategis</h4>
                  {[
                    "Menyelenggarakan kurikulum berbasis industri terkini.",
                    "Mengembangkan karakter siswa melalui kedisiplinan dan etika.",
                    "Meningkatkan kerjasama produktif dengan mitra DU/DI.",
                    "Pemanfaatan teknologi digital dalam setiap proses pembelajaran."
                  ].map((m, i) => (
                    <div key={i} className="flex items-center space-x-4">
                       <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                       <p className="text-sm font-bold text-slate-600">{m}</p>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>

        {/* Teachers Section */}
        <section className="py-20 border-t border-slate-100">
           <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-20">
              <div>
                 <h2 className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Wajah SKADA</h2>
                 <h1 className="text-5xl font-extrabold text-slate-950 tracking-tight">Profil Guru & Staf.</h1>
              </div>
              <p className="text-slate-400 text-xs font-bold max-w-xs md:text-right uppercase tracking-widest">Didukung oleh tenaga pendidik tersertifikasi industri.</p>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {content.teachers.map((teacher) => (
                <div key={teacher.id} className="group cursor-pointer">
                   <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden mb-6">
                      <img src={teacher.image} alt={teacher.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0" />
                      <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500"></div>
                   </div>
                   <h3 className="text-xl font-black text-slate-950 tracking-tight group-hover:text-blue-600 transition-colors uppercase">{teacher.name}</h3>
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">{teacher.role}</p>
                </div>
              ))}
           </div>
        </section>
      </div>
    </div>
  );
};

export default About;
