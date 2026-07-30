"use client";
import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#0f172a] p-8 font-sans selection:bg-teal-500 selection:text-white">
      <div className="max-w-4xl mx-auto mt-10">
        
        {/* HEADER DASHBOARD */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-12 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
          <div>
            <div className="flex items-center gap-3 mb-2">
               <div className="w-10 h-10 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center text-xl">✨</div>
               <h1 className="text-3xl font-bold text-slate-800">Studio Kado</h1>
            </div>
            <p className="text-slate-500 text-sm ml-13">Kelola momen spesial yang telah Anda terbitkan.</p>
          </div>
          <Link href="/buat" className="bg-[#0f172a] text-white px-8 py-3.5 rounded-full font-bold hover:bg-slate-800 transition shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-center">
            + Buat Baru
          </Link>
        </div>

        {/* DAFTAR KADO (Tampilan Sementara/Demo) */}
        <h2 className="text-sm font-bold tracking-widest text-slate-400 mb-6 uppercase ml-2">Koleksi Anda</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
           {/* Kartu Kado 1 */}
           <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition group">
              <div className="flex justify-between items-start mb-6">
                 <div>
                    <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-3 py-1.5 rounded-full uppercase tracking-wider border border-teal-100">Ulang Tahun</span>
                    <h3 className="text-2xl font-bold mt-4 text-slate-800 group-hover:text-teal-600 transition">Kak Hilda</h3>
                    <p className="text-slate-400 text-xs mt-1 font-medium">Usia Ke-28 • 30 Jul 2026</p>
                 </div>
                 <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-xl border border-slate-100">🎂</div>
              </div>
              <div className="flex gap-3">
                 <Link href="/undangan/CONTOH_ID" className="flex-1 bg-slate-50 text-slate-600 py-3 rounded-xl text-center font-bold hover:bg-slate-100 transition text-sm border border-slate-200">Lihat</Link>
                 <button className="flex-1 bg-teal-500 text-white py-3 rounded-xl text-center font-bold hover:bg-teal-400 transition text-sm shadow-md shadow-teal-500/20">Bagikan 🔗</button>
              </div>
           </div>

           {/* Kartu Kado 2 */}
           <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition group">
              <div className="flex justify-between items-start mb-6">
                 <div>
                    <span className="text-[10px] font-bold text-rose-700 bg-rose-50 px-3 py-1.5 rounded-full uppercase tracking-wider border border-rose-100">Pernikahan</span>
                    <h3 className="text-2xl font-bold mt-4 text-slate-800 group-hover:text-rose-500 transition">Romeo & Juliet</h3>
                    <p className="text-slate-400 text-xs mt-1 font-medium">31 Des 2026</p>
                 </div>
                 <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-xl border border-slate-100">💍</div>
              </div>
              <div className="flex gap-3">
                 <Link href="#" className="flex-1 bg-slate-50 text-slate-600 py-3 rounded-xl text-center font-bold hover:bg-slate-100 transition text-sm border border-slate-200">Lihat</Link>
                 <button className="flex-1 bg-rose-500 text-white py-3 rounded-xl text-center font-bold hover:bg-rose-400 transition text-sm shadow-md shadow-rose-500/20">Bagikan 🔗</button>
              </div>
           </div>
        </div>

      </div>
    </main>
  );
}
