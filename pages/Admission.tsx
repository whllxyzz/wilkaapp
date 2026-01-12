
import React from 'react';

const Admission: React.FC = () => {
  return (
    <div className="animate-reveal py-32 lg:py-48 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="text-center mb-32">
          <h2 className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Admisi 2024</h2>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-950 tracking-tighter mb-8 leading-none">Mulai Karir Profesional.</h1>
          <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">Kami mengundang putra-putri terbaik untuk bergabung dalam ekosistem vokasi terdepan di Indragiri Hilir.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-20">
            <section>
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-12">Alur Seleksi</h3>
              <div className="space-y-12">
                {[
                  { n: '01', t: 'Registrasi Digital', d: 'Isi formulir melalui portal resmi dengan data autentik.' },
                  { n: '02', t: 'Uji Kompetensi Dasar', d: 'Evaluasi potensi akademik dan minat bakat kejuruan.' },
                  { n: '03', t: 'Wawancara Industri', d: 'Diskusi mengenai visi karir dan kesiapan mental industri.' },
                ].map((s, i) => (
                  <div key={i} className="flex space-x-8 items-start group">
                    <span className="text-2xl font-black text-slate-200 group-hover:text-blue-600 transition-colors duration-500 tracking-tighter">{s.n}</span>
                    <div>
                      <h4 className="font-bold text-slate-950 mb-2">{s.t}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed font-medium">{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div className="p-12 bg-slate-50 rounded-[3rem] border border-slate-100">
               <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-8">Persyaratan Utama</h4>
               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {['SKL SMP/Sederajat', 'Pas Foto 3x4 Digital', 'Kartu Keluarga', 'Sertifikat Prestasi'].map(doc => (
                   <li key={doc} className="flex items-center space-x-3 text-sm font-bold text-slate-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span>{doc}</span>
                   </li>
                 ))}
               </ul>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white p-12 lg:p-16 rounded-[3rem] border border-slate-100 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.06)] sticky top-32">
               <div className="mb-12">
                 <h3 className="text-2xl font-black text-slate-950 tracking-tight">Daftar Minat</h3>
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">Dapatkan info lengkap via WhatsApp</p>
               </div>
               <form className="space-y-6" onSubmit={e => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Nama Lengkap</label>
                    <input className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl font-bold focus:ring-2 focus:ring-blue-600/10 transition-all outline-none" placeholder="Masukkan nama..." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">WhatsApp Aktif</label>
                    <input className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl font-bold focus:ring-2 focus:ring-blue-600/10 transition-all outline-none" placeholder="08..." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Minat Jurusan</label>
                    <select className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl font-bold focus:ring-2 focus:ring-blue-600/10 transition-all outline-none appearance-none">
                       <option>Pilih Program...</option>
                       <option>Teknik Otomotif</option>
                       <option>TKJ & Informatika</option>
                       <option>Perhotelan</option>
                    </select>
                  </div>
                  <button className="w-full py-5 bg-slate-950 text-white rounded-full font-black uppercase tracking-widest text-[11px] hover:bg-blue-600 hover:shadow-2xl transition-all duration-500 mt-4">Kirim Data</button>
               </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admission;