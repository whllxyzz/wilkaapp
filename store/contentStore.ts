
import { SiteContent } from "../types";

const STORAGE_KEY = 'skada_portal_database';

const DEFAULT_CONTENT: SiteContent = {
  heroTitle: "Pendidikan\nPresisi.",
  heroSubtitle: "Di SMK Negeri 2 Tembilahan, kami tidak hanya mengajar; kami membentuk standar profesionalisme untuk industri masa depan.",
  heroImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000",
  stats: [
    { val: '08', label: 'Program Keahlian', desc: 'Vokasi spesialis' },
    { val: '40+', label: 'Tenaga Ahli', desc: 'Sertifikasi industri' },
    { val: '12', label: 'Lab Praktik', desc: 'Standar nasional' },
    { val: '2k+', label: 'Alumni Sukses', desc: 'Jejaring global' },
  ],
  programs: [
    { id: '1', name: 'Teknik Otomotif', desc: 'Penguasaan teknologi kendaraan bermotor modern.', focus: ['Engine Tuning', 'Sistem Kelistrikan'], color: 'blue' },
    { id: '2', name: 'TKJ & Informatika', desc: 'Fokus pada infrastruktur jaringan dan keamanan siber.', focus: ['Network Security', 'Cloud Computing'], color: 'indigo' }
  ],
  news: [
    {
      id: 'n1',
      title: 'Siswa SKADA Raih Juara 1 LKS Tingkat Provinsi',
      date: '24 Mei 2024',
      category: 'Prestasi',
      image: 'https://images.unsplash.com/photo-1523240715181-310f9d7a5ee1?auto=format&fit=crop&q=80&w=800',
      excerpt: 'Kebanggaan bagi sekolah, tim Robotik SKADA berhasil mengalahkan perwakilan...',
      createdAt: '2024-05-24T10:00:00'
    }
  ],
  gallery: [
    { id: 'g1', url: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800', caption: 'Lab Komputer Server', createdAt: '2024-01-10T14:30:00' },
  ],
  teachers: [
    { id: 't1', name: 'Drs. Ahmad Jaelani', role: 'Kepala Sekolah', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400', createdAt: '2023-12-01T08:00:00' },
  ],
  testimonials: [
    { id: 'tm1', name: 'Rian Hidayat', batch: 'Lulusan 2021', workplace: 'Software Engineer di GoTo', quote: 'SKADA memberikan fondasi teknis yang sangat kuat.', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400', createdAt: '2024-02-15T16:20:00' },
  ],
  schoolAddress: "Jl. SKB No. 03, Tembilahan Hilir, Riau 29212",
  schoolEmail: "info@smkn2tembilahan.sch.id",
  schoolPhone: "(0768) 22211",
  schoolMapsUrl: "https://maps.app.goo.gl/BF5ujWkxjcYRtyvu5",
  schoolEmbedMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.28187834789!2d103.14328237585094!3d-0.323555535352668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e293cd3a17523d1%3A0xa1946028882798e3!2sSMK%20Negeri%202%20Tembilahan!5e0!3m2!1sid!2sid!4v1716550000000!5m2!1sid!2sid",
  devName: "blblblb",
  devRole: "Project Lead Developer",
  devQuote: "Membangun ekosistem digital pendidikan yang inklusif untuk masa depan."
};

export const fetchSiteContent = async (): Promise<SiteContent> => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return DEFAULT_CONTENT;
  try {
    const data = JSON.parse(saved);
    // Ensure new fields exist
    return { ...DEFAULT_CONTENT, ...data };
  } catch {
    return DEFAULT_CONTENT;
  }
};

export const syncToCloud = async (content: SiteContent): Promise<boolean> => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
  return true;
};

export const resetDatabase = async () => {
  localStorage.removeItem(STORAGE_KEY);
};
