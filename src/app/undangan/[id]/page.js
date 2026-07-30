"use client";
import { useEffect, useState, use } from "react"; 
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";

export default function UndanganDetail({ params }) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [buka, setBuka] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "undangan", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setData(docSnap.data());
        }
      } catch (error) {
        console.error("Error mengambil data:", error);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchData();
  }, [id]);

  if (loading) return <div className="min-h-screen bg-[#0f172a] flex items-center justify-center text-teal-400 font-bold tracking-widest uppercase text-sm">Membuka kenangan...</div>;
  if (!data) return <div className="min-h-screen bg-[#0f172a] flex items-center justify-center text-white">Maaf, Kado/Undangan tidak ditemukan.</div>;

  return (
    <main className="min-h-screen bg-[#0f172a] text-[#f8fafc] font-sans selection:bg-teal-500 selection:text-white relative overflow-x-hidden">
      
      {/* ================= COVER DEPAN (SAMPUL) ================= */}
      <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0f172a] transition-transform duration-[1.5s] ease-in-out ${buka ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center text-3xl mb-6 shadow-2xl border border-slate-700/50 animate-pulse">🌿</div>
        <p className="text-teal-400 tracking-[0.3em] text-xs font-bold mb-4 uppercase">
          {data.jenisAcara === "Ulang Tahun" ? "Special Gift For" : "The Wedding Of"}
        </p>
        <h1 className="text-5xl md:text-6xl font-serif text-white mb-16 text-center px-6 leading-tight">
          {data.jenisAcara === "Ulang Tahun" ? data.namaUltah : `${data.pria} & ${data.wanita}`}
        </h1>
        <button 
          onClick={() => setBuka(true)}
          className="bg-teal-500 text-white px-10 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-teal-400 transition-all shadow-[0_0_30px_rgba(20,184,166,0.3)] hover:scale-105 hover:shadow-[0_0_40px_rgba(20,184,166,0.5)]"
        >
          Buka Undangan
        </button>
      </div>

      {/* ================= ISI UNDANGAN (LONG SCROLL) ================= */}
      <div className={`transition-opacity duration-1000 delay-500 ${buka ? 'opacity-100' : 'opacity-0 h-screen overflow-hidden'}`}>
        
        {/* SECTION 1: HERO & FOTO */}
        <section className="min-h-screen flex flex-col items-center justify-center p-6 text-center relative border-b border-slate-800/50">
           {/* Hiasan Dekorasi */}
           <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-teal-900/20 to-transparent"></div>
           
           <div className="max-w-lg w-full relative z-10 mt-10">
             {data.fotoUtama ? (
                <div className="w-full aspect-[3/4] overflow-hidden rounded-[2rem] mb-10 border border-slate-700 shadow-2xl relative">
                  <img src={data.fotoUtama} alt="Foto Utama" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent"></div>
                </div>
             ) : (
                <div className="w-32 h-32 mx-auto bg-slate-800 rounded-full flex items-center justify-center text-4xl mb-10 border border-slate-700">✨</div>
             )}

             {data.jenisAcara === "Ulang Tahun" ? (
                <>
                  <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight">{data.namaUltah}</h1>
                  <p className="text-teal-400 font-medium tracking-widest text-sm uppercase">Perayaan Usia Ke-{data.umur}</p>
                </>
             ) : (
                <>
                  <h1 className="text-5xl font-serif text-white mb-4">{data.pria} & {data.wanita}</h1>
                  <p className="text-teal-400 font-medium tracking-widest text-sm uppercase">Kami Akan Menikah</p>
                </>
             )}
           </div>
           
           {/* Indikator Scroll */}
           <div className="absolute bottom-10 animate-bounce text-slate-500 text-sm tracking-widest uppercase">
              Gulir Ke Bawah <br/> ↓
           </div>
        </section>

        {/* SECTION 2: KUTIPAN / PESAN PEMBUKA */}
        <section className="py-32 px-6 text-center max-w-3xl mx-auto">
           <div className="text-4xl text-teal-500/50 mb-6 font-serif">"</div>
           {data.jenisAcara === "Ulang Tahun" ? (
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light italic">
                "Setiap tahun adalah lembaran baru yang menanti untuk ditulisi dengan tawa, cinta, dan petualangan. Selamat menyambut babak baru dalam hidupmu."
              </p>
           ) : (
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light italic">
                "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang."
              </p>
           )}
           <div className="w-16 h-[1px] bg-teal-500/50 mx-auto mt-10"></div>
        </section>

        {/* SECTION 3: DETAIL WAKTU & LOKASI */}
        <section className="py-24 px-6 bg-slate-900/50 border-y border-slate-800">
           <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-teal-400 text-sm font-bold tracking-[0.2em] uppercase mb-16">Informasi Acara</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {/* Kartu Waktu */}
                 <div className="bg-[#0f172a] p-10 rounded-3xl border border-slate-800 shadow-xl hover:border-teal-500/30 transition">
                    <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-xl mx-auto mb-6 text-teal-400">📅</div>
                    <h3 className="text-2xl font-bold text-white mb-2">Waktu</h3>
                    <p className="text-slate-400 mb-6">{data.tanggalAcara}</p>
                    <div className="bg-slate-800/50 py-3 px-6 rounded-lg inline-block text-slate-300 font-mono text-sm">
                       Pukul 09:00 - Selesai
                    </div>
                 </div>

                 {/* Kartu Lokasi */}
                 <div className="bg-[#0f172a] p-10 rounded-3xl border border-slate-800 shadow-xl hover:border-teal-500/30 transition">
                    <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-xl mx-auto mb-6 text-teal-400">📍</div>
                    <h3 className="text-2xl font-bold text-white mb-2">Lokasi</h3>
                    <p className="text-slate-400 mb-6 leading-relaxed">Grand Ballroom Hotel<br/>Jl. Sudirman No. 123, Kota Anda</p>
                    <button className="bg-slate-800 hover:bg-slate-700 text-white py-3 px-6 rounded-lg text-sm transition shadow-md">
                       Buka Google Maps
                    </button>
                 </div>
              </div>
           </div>
        </section>

        {/* SECTION 4: PENUTUP */}
        <section className="py-32 px-6 text-center max-w-2xl mx-auto">
           <h2 className="text-3xl font-serif text-white mb-6">Merupakan suatu kehormatan...</h2>
           <p className="text-slate-400 leading-relaxed mb-12">
             Kehadiran dan doa restu Anda adalah kado terindah bagi kami. Kami menantikan momen bahagia ini bersama Anda.
           </p>
           <h3 className="text-xl font-bold text-teal-400 tracking-widest uppercase">
             {data.jenisAcara === "Ulang Tahun" ? data.namaUltah : `${data.pria} & ${data.wanita}`}
           </h3>
           <p className="text-xs text-slate-600 mt-16 tracking-widest uppercase">Dibuat dengan ✨ HariSpesial</p>
        </section>

      </div>
    </main>
  );
}
