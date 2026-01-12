
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', parts: [{ text: 'Halo! Saya asisten AI SmartSchool. Ada yang bisa saya bantu terkait sekolah?' }] }
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => endRef.current?.scrollIntoView({ behavior: 'smooth' }), [messages]);

  const onSend = async () => {
    if (!input.trim() || loading) return;
    const userMsg: ChatMessage = { role: 'user', parts: [{ text: input }] };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);
    const text = await getGeminiResponse(messages, input);
    setMessages(prev => [...prev, { role: 'model', parts: [{ text }] }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen ? (
        <div className="bg-white w-[360px] sm:w-[400px] h-[520px] rounded-[2.5rem] shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
          <div className="bg-blue-600 p-6 flex justify-between items-center text-white">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold">AI</div>
              <div>
                <h3 className="font-bold">Asisten Sekolah</h3>
                <p className="text-[10px] uppercase tracking-widest opacity-80">Aktif & Pintar</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:opacity-70 transition-opacity">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeWidth="2"/></svg>
            </button>
          </div>
          <div className="flex-grow p-6 overflow-y-auto space-y-4 bg-slate-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-3xl text-sm leading-relaxed ${m.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white border text-slate-700 rounded-tl-none shadow-sm'}`}>
                  {m.parts[0].text}
                </div>
              </div>
            ))}
            {loading && <div className="text-xs text-slate-400 font-bold ml-2">Mengetik...</div>}
            <div ref={endRef} />
          </div>
          <div className="p-4 bg-white border-t flex space-x-2">
            <input 
              value={input} 
              onChange={e => setInput(e.target.value)} 
              onKeyDown={e => e.key === 'Enter' && onSend()}
              placeholder="Tanya info sekolah..." 
              className="flex-grow bg-slate-100 rounded-2xl px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <button onClick={onSend} className="bg-blue-600 p-3 rounded-2xl text-white hover:bg-blue-700 transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
      ) : (
        <button onClick={() => setIsOpen(true)} className="bg-blue-600 w-16 h-16 rounded-3xl shadow-2xl flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" strokeWidth="2"/></svg>
        </button>
      )}
    </div>
  );
};

export default Chatbot;
