
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-blue-600 p-2.5 rounded-xl shadow-lg shadow-blue-500/20">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <span className="text-2xl font-black tracking-tight">SmartSchool</span>
            </div>
            <p className="text-slate-500 leading-relaxed font-medium">
              Membangun masa depan Indonesia melalui pendidikan karakter, inovasi teknologi, dan wawasan global yang terukur.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500 mb-8">Tautan Cepat</h4>
            <ul className="space-y-4 text-slate-400 font-bold text-sm">
              <li><a href="#" className="hover:text-white transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>Visi & Misi</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>Staf Pengajar</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>Berita & Acara</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>Alumni</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500 mb-8">Akademik</h4>
            <ul className="space-y-4 text-slate-400 font-bold text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Program IPA</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Program IPS</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kurikulum Merdeka</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Beasiswa Siswa</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500 mb-8">Kontak</h4>
            <ul className="space-y-6 text-slate-400 font-bold text-sm">
              <li className="flex items-start space-x-4">
                <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path></svg>
                <span className="leading-relaxed">Jl. Pendidikan No. 123, Jakarta Selatan</span>
              </li>
              <li className="flex items-center space-x-4">
                <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <span>(021) 1234-5678</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-12 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.2em]">
            &copy; 2024 SmartSchool Portal. Dibangun dengan Integritas.
          </p>
          <div className="flex space-x-8">
            <a href="#" className="text-slate-600 hover:text-white transition-all transform hover:scale-110">
              <span className="sr-only">Facebook</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
            </a>
            <a href="#" className="text-slate-600 hover:text-white transition-all transform hover:scale-110">
              <span className="sr-only">Instagram</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16.4a4.4 4.4 0 110-8.8 4.4 4.4 0 010 8.8zm6.487-11.46a1.08 1.08 0 100 2.16 1.08 1.08 0 000-2.16z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;