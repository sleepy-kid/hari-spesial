"use client";
import { useEffect, useState, use } from "react"; 
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";

export default function UndanganDetail({ params }) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [buka, setBuka] = useState(false); // State untuk animasi buka kado

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

  if (loading) return <div className="min-h-screen bg-[#2c1820] flex items-center justify-center text-[#d4af37]">Mempersiapkan kado spesial...</div>;
  if (!data) return <div className="min-h-screen bg-[#2c1820] flex items-center justify-center text-white">Maaf, Kado/Undangan tidak ditemukan.</div>;

  return (
    <main className="min-h-screen bg-[#2c1820] text-[#fdf8f5] font-sans selection:bg-[#d4af37] selection:text-white relative overflow-hidden">
      
      {/* HALAMAN SAMPUL (COVER) */}
      <div className={`absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#231219] transition-transform duration-1000 ease-in-out ${buka ? '-translate-y-full' : 'translate-y-0'}`}>
        <span className="text-5xl mb-6 drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]">✨</span>
        <p className="text-[#d4af37] tracking-[0.3em] text-xs font-bold mb-4 uppercase">Kado Spesial Untuk</p>
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-10 text-center px-4">
          {data.jenisAcara === "Ulang Tahun" ? data.namaUltah : `${data.pria} & ${data.wanita}`}
        </h1>
        <button 
          onClick={() => setBuka(true)}
          className="bg-[#d4af37] text-[#2c1820] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#ebd59a] transition-all shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-105"
        >
          Buka Kado
        </button>
      </div>

      {/* ISI KADO UTAMA (Terlihat setelah tombol ditekan) */}
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]">
        <div className="max-w-xl w-full border border-white/10 bg-white/5 p-10 md:p-16 rounded-3xl backdrop-blur-md shadow-2xl relative overflow-hidden">
          
          {/* Ornamen Sudut */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-[#d4af37]/30 rounded-tl-3xl"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-[#d4af37]/30 rounded-br-3xl"></div>

          <span className="text-4xl mb-6 block">🌸</span>
          
          {data.jenisAcara === "Ulang Tahun" ? (
            <>
              <h2 className="text-2xl font-serif text-[#d4af37] mb-2 italic">Selamat Ulang Tahun</h2>
              <h1 className="text-5xl font-extrabold text-white mb-6">{data.namaUltah}</h1>
              <p className="text-white/70 text-lg leading-relaxed">
                Selamat bertambah usia yang ke-<span className="font-bold text-[#d4af37]">{data.umur}</span>. <br/>
                Di hari spesialmu pada <span className="font-bold text-white">{data.tanggalAcara}</span> ini, kami mendoakan segala kebaikan dan kebahagiaan selalu menyertaimu.
              </p>
            </>
          ) : (
            <>
              <p className="text-[#d4af37] tracking-[0.2em] text-sm font-semibold mb-6 uppercase">The Wedding Of</p>
              <h1 className="text-5xl font-serif text-white mb-6">{data.pria} & {data.wanita}</h1>
              <p className="text-white/70 text-lg leading-relaxed">
                Dengan penuh rasa syukur, kami mengundang Anda untuk hadir dan memberikan doa restu pada hari bahagia kami di tanggal:<br/>
                <span className="font-bold text-[#d4af37] text-2xl mt-4 block tracking-wide">{data.tanggalAcara}</span>
              </p>
            </>
          )}
        </div>
      </div>
    </main>
  );
}