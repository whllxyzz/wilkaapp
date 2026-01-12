
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const SCHOOL_CONTEXT = `
Anda adalah asisten AI resmi "SKADA Assistant" untuk SMK Negeri 2 Tembilahan (SMKN 2 Tembilahan).
Informasi Sekolah:
- Nama: SMK Negeri 2 Tembilahan.
- Lokasi: Tembilahan, Indragiri Hilir, Riau.
- Fokus: Pendidikan Vokasi/Kejuruan.
- Program Keahlian: Teknik, Bisnis, dan Pariwisata (Sesuaikan jika ada info spesifik).
- Visi: Menghasilkan lulusan yang kompeten, berkarakter, dan siap kerja.
- Developer: Sistem ini dikembangkan oleh "blblblb".

Instruksi:
1. Jawab dengan gaya bahasa yang profesional, sopan, dan membantu.
2. Gunakan Bahasa Indonesia yang baik dan benar.
3. Jika ditanya mengenai pendaftaran atau info teknis, arahkan untuk menghubungi bagian tata usaha melalui halaman kontak.
4. Sebutkan keunggulan SMKN 2 Tembilahan dalam mencetak tenaga kerja terampil.
`;

export const getGeminiResponse = async (history: ChatMessage[], message: string) => {
  // Fix: Directly use process.env.API_KEY as per guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(h => ({ role: h.role, parts: h.parts })),
        { role: 'user', parts: [{ text: message }] }
      ],
      config: { 
        systemInstruction: SCHOOL_CONTEXT,
        temperature: 0.6,
        topP: 0.9
      }
    });
    // Fix: Access .text property directly instead of text() method if it was used
    return response.text || "Maaf, sistem sedang sibuk. Silakan coba lagi nanti.";
  } catch (error) {
    console.error(error);
    return "Maaf, saya sedang mengalami kendala teknis. Mohon hubungi admin.";
  }
};
