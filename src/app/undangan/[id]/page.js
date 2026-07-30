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
        } else {
          console.log("Undangan tidak ditemukan!");
        }
      } catch (error) {
        console.error("Error mengambil data:", error);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchData();
  }, [id]);

  if (loading) return <div className="min-h-screen bg-[#0f172a] flex items-center justify-center text-teal-400 font-bold">Mempersiapkan kado spesial...</div>;
  if (!data) return <div className="min-h-screen bg-[#0f172a] flex items-center justify-center text-white">Maaf, Kado/Undangan tidak ditemukan.</div>;

  return (
    <main className="min-h-screen bg-[#0f172a] text-[#f8fafc] font-sans selection:bg-teal-500 selection:text-white relative overflow-hidden">
      
      {/* HALAMAN SAMPUL (COVER) */}
      <div className={`absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#0f172a] transition-transform duration-1000 ease-in-out ${buka ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center text-3xl mb-6 shadow-xl border border-slate-700">🌿</div>
        <p className="text-teal-400 tracking-[0.3em] text-xs font-bold mb-4 uppercase">Kado Spesial Untuk</p>
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-12 text-center px-4">
          {data.jenisAcara === "Ulang Tahun" ? data.namaUltah : `${data.pria} & ${data.wanita}`}
        </h1>
        <button 
          onClick={() => setBuka(true)}
          className="bg-teal-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-teal-400 transition-all shadow-[0_0_20px_rgba(20,184,166,0.4)] hover:scale-105"
        >
          Buka Kado
        </button>
      </div>

      {/* ISI KADO UTAMA */}
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <div className="max-w-md w-full bg-slate-900 border border-slate-700 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden mt-10 mb-10">
          
          {/* INI DIA KODE UNTUK MEMUNCULKAN FOTONYA */}
          {data.fotoUtama && (
            <div className="w-full aspect-[4/5] overflow-hidden rounded-2xl mb-8 border-4 border-slate-800 shadow-inner">
              <img src={data.fotoUtama} alt="Foto Utama" className="w-full h-full object-cover" />
            </div>
          )}
          
          {data.jenisAcara === "Ulang Tahun" ? (
            <>
              <h2 className="text-xl font-bold text-teal-400 mb-2 uppercase tracking-widest">Selamat Ulang Tahun</h2>
              <h1 className="text-4xl font-extrabold text-white mb-4">{data.namaUltah}</h1>
              <div className="w-12 h-1 bg-teal-500 mx-auto rounded-full mb-6"></div>
              <p className="text-slate-400 leading-relaxed text-sm">
                Selamat bertambah usia yang ke-<span className="font-bold text-white">{data.umur}</span>. <br/>
                Di hari spesial pada <span className="font-bold text-white">{data.tanggalAcara}</span> ini, kami mendoakan kebaikan selalu menyertaimu.
              </p>
            </>
          ) : (
            <>
              <p className="text-teal-400 tracking-[0.2em] text-xs font-bold mb-4 uppercase">The Wedding Of</p>
              <h1 className="text-4xl font-serif text-white mb-4">{data.pria} & {data.wanita}</h1>
              <div className="w-12 h-1 bg-teal-500 mx-auto rounded-full mb-6"></div>
              <p className="text-slate-400 leading-relaxed text-sm">
                Dengan penuh rasa syukur, kami mengundang Anda untuk hadir pada hari bahagia kami di tanggal:<br/>
                <span className="font-bold text-white text-xl mt-4 block">{data.tanggalAcara}</span>
              </p>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
