
import React from 'react';
import { useApp } from '../App';
import { Skeleton } from '../components/Skeleton';

const Contact: React.FC = () => {
  const { content } = useApp();

  if (!content) return (
    <div className="p-48"><Skeleton className="h-96 w-full" /></div>
  );

  return (
    <div className="animate-reveal py-32 lg:py-48 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-32">
          <div className="lg:col-span-5">
            <h2 className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Kontak Kami</h2>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-950 tracking-tighter mb-10 leading-none">Ayo Bicara.</h1>
            <p className="text-lg text-slate-500 font-medium mb-20">Kami menghargai setiap aspirasi. Hubungi kami untuk kunjungan kampus atau konsultasi akademik.</p>
            
            <div className="space-y-12">
               <div>
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Kantor Pusat</h4>
                  <p className="text-xl font-bold text-slate-950 leading-snug">{content.schoolAddress}</p>
                  <a href={content.schoolMapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-6 text-[10px] font-black text-blue-600 uppercase tracking-widest border-b-2 border-blue-600 pb-1 hover:text-slate-950 hover:border-slate-950 transition-all duration-300">Buka di Peta</a>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Email</h4>
                    <p className="font-bold text-slate-950">{content.schoolEmail}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Telepon</h4>
                    <p className="font-bold text-slate-950">{content.schoolPhone}</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-slate-50 p-12 lg:p-20 rounded-[4rem] border border-slate-100">
             <h3 className="text-2xl font-black text-slate-950 tracking-tight mb-12 uppercase">Formulir Pesan</h3>
             <form className="space-y-8" onSubmit={e => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="space-y-2">
                      <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Nama</label>
                      <input className="w-full bg-white border-none px-6 py-4 rounded-2xl font-bold focus:ring-2 focus:ring-blue-600/10 transition-all outline-none" placeholder="Masukkan nama..." />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Subjek</label>
                      <input className="w-full bg-white border-none px-6 py-4 rounded-2xl font-bold focus:ring-2 focus:ring-blue-600/10 transition-all outline-none" placeholder="Misal: Info Program" />
                   </div>
                </div>
                <div className="space-y-2">
                   <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Email</label>
                   <input className="w-full bg-white border-none px-6 py-4 rounded-2xl font-bold focus:ring-2 focus:ring-blue-600/10 transition-all outline-none" placeholder="email@contoh.com" />
                </div>
                <div className="space-y-2">
                   <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Pesan</label>
                   <textarea className="w-full bg-white border-none px-6 py-4 rounded-2xl font-bold focus:ring-2 focus:ring-blue-600/10 transition-all outline-none h-48 resize-none" placeholder="Tuliskan pesan Anda di sini..."></textarea>
                </div>
                <button className="px-12 py-5 bg-slate-950 text-white rounded-full font-black uppercase tracking-widest text-[11px] hover:bg-blue-600 transition-all duration-500">Kirim Sekarang</button>
             </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="space-y-12">
           <div className="flex flex-col md:flex-row justify-between items-end gap-6">
              <div>
                 <h2 className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Navigasi Lokasi</h2>
                 <h1 className="text-4xl font-extrabold text-slate-950 tracking-tight">Kunjungi Kampus Kami.</h1>
              </div>
              <p className="text-slate-400 text-xs font-bold max-w-xs md:text-right uppercase tracking-widest">Klik pada peta untuk mendapatkan navigasi langsung via Google Maps</p>
           </div>
           
           <div className="relative rounded-[3rem] overflow-hidden border border-slate-100 shadow-2xl bg-slate-50 aspect-[16/9] md:aspect-[21/9]">
              <iframe 
                src={content.schoolEmbedMapsUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi SMKN 2 Tembilahan"
                className="grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-8 right-8 pointer-events-none">
                 <div className="bg-slate-950 text-white px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-2xl flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Live Tracking Aktif</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
