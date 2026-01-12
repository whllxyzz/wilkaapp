
export interface ChatMessage {
  role: 'user' | 'model';
  parts: { text: string }[];
}

export interface ProgramItem {
  id: string;
  name: string;
  desc: string;
  focus: string[];
  color: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string; // Tanggal tampilan publik
  category: string;
  image: string;
  excerpt: string;
  createdAt: string; // Riwayat upload sistem
}

export interface GalleryItem {
  id: string;
  url: string;
  caption: string;
  createdAt: string;
}

export interface TeacherItem {
  id: string;
  name: string;
  role: string;
  image: string;
  createdAt: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  batch: string;
  workplace: string;
  quote: string;
  image: string;
  createdAt: string;
}

export interface SiteContent {
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  stats: { val: string; label: string; desc: string }[];
  programs: ProgramItem[];
  news: NewsItem[];
  gallery: GalleryItem[];
  teachers: TeacherItem[];
  testimonials: TestimonialItem[];
  schoolAddress: string;
  schoolEmail: string;
  schoolPhone: string;
  schoolMapsUrl: string;
  schoolEmbedMapsUrl: string;
  devName: string;
  devRole: string;
  devQuote: string;
}

export interface User {
  username: string;
  role: 'admin' | 'staff';
}
