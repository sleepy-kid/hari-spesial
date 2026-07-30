"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; 
import { db } from "../lib/firebase"; 
import { collection, addDoc } from "firebase/firestore";

export default function BuatUndangan() {
  const router = useRouter();
  
  // State Form Utama
  const [jenisAcara, setJenisAcara] = useState("Pernikahan");
  const [mempelaiPria, setMempelaiPria] = useState("Romeo");
  const [mempelaiWanita, setMempelaiWanita] = useState("Juliet");
  const [namaUltah, setNamaUltah] = useState("Mega");
  const [umur, setUmur] = useState("25");
  const [tanggal, setTanggal] = useState("2026-12-31");
  
  // State Form Tambahan (Baru)
  const [waktu, setWaktu] = useState("09:00 - Selesai");
  const [lokasi, setLokasi] = useState("Grand Ballroom Hotel");
  const [alamat, setAlamat] = useState("Jl. Sudirman No. 123, Kota Anda");
  const [pesan, setPesan] = useState("Kehadiran dan doa restu Anda adalah kado terindah bagi kami.");
  
  // State Foto
  const [foto, setFoto] = useState(null);
  const [fotoPreview, setFotoPreview] = useState("");
  
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!foto) {
        setFotoPreview("");
        return;
    }
    const objectUrl = URL.createObjectURL(foto);
    setFotoPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [foto]);

  const handleSimpan = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let fotoUrl = "";

      if (foto) {
        const formData = new FormData();
        formData.append("image", foto);
        const imgbbAPI = "19043b8f0d4415d3f1a92b8ae12e6c80"; 
        
        const res = await fetch(`https://api.imgbb.com/1/upload?key=${imgbbAPI}`, {
          method: "POST",
          body: formData,
        });
        
        const dataImg = await res.json();
        if (dataImg.success) {
          fotoUrl = dataImg.data.url; 
        } else {
          alert("Gagal upload gambar ke ImgBB. Silakan coba tanpa gambar dulu.");
        }
      }

      const dataUndangan = {
        jenisAcara,
        tanggalAcara: tanggal,
        waktuAcara: waktu,
        namaLokasi: lokasi,
        alamatLengkap: alamat,
        pesanPenutup: pesan,
        fotoUtama: fotoUrl, 
        dibuatPada: new Date().toISOString()
      };

      if (jenisAcara === "Pernikahan") {
        dataUndangan.pria = mempelaiPria;
        dataUndangan.wanita = mempelaiWanita;
      } else {
        dataUndangan.namaUltah = namaUltah;
        dataUndangan.umur = umur;
      }

      const docRef = await addDoc(collection(db, "undangan"), dataUndangan);
      router.push(`/undangan/${docRef.id}`); 
      
    } catch (error) {
      console.error("Error: ", error);
      alert("Terjadi kesalahan saat menyimpan data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col lg:flex-row bg-[#f8fafc] text-[#0f172a] font-sans">
      
      {/* KOLOM KIRI: FORMULIR */}
      <div className="w-full lg:w-1/2 p-8 lg:p-12 overflow-y-auto max-h-screen">
        <div className="max-w-xl mx-auto pb-20">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-[#0f172a]">Detail Acara</h1>
            <Link href="/" className="text-sm text-slate-400 hover:text-teal-500 font-medium transition">Batal ✕</Link>
          </div>

          <form onSubmit={handleSimpan} className="flex flex-col gap-6">
            
            {/* INPUT FOTO */}
            <div className="p-5 bg-white shadow-sm border border-slate-200 rounded-2xl">
              <label className="block text-sm font-bold text-slate-700 mb-2">Pilih Foto Utama (Opsional)</label>
              <input 
                type="file" 
                accept="image/*"
                onChange={(e) => setFoto(e.target.files[0])}
                className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100 transition"
              />
            </div>

            {/* DATA UTAMA */}
            <div className="p-6 bg-white shadow-sm border border-slate-200 rounded-2xl flex flex-col gap-5">
              <h2 className="text-xs font-bold tracking-widest text-teal-600 uppercase mb-2">Data Utama</h2>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Jenis Acara</label>
                <select value={jenisAcara} onChange={(e) => setJenisAcara(e.target.value)} className="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none bg-slate-50 transition">
                  <option value="Pernikahan">Pernikahan</option>
                  <option value="Ulang Tahun">Ulang Tahun</option>
                </select>
              </div>

              {jenisAcara === "Pernikahan" ? (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Pria</label>
                    <input type="text" value={mempelaiPria} onChange={(e) => setMempelaiPria(e.target.value)} className="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-teal-500 bg-slate-50 transition" required />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Wanita</label>
                    <input type="text" value={mempelaiWanita} onChange={(e) => setMempelaiWanita(e.target.value)} className="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-teal-500 bg-slate-50 transition" required />
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Nama Spesial</label>
                    <input type="text" value={namaUltah} onChange={(e) => setNamaUltah(e.target.value)} className="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-teal-500 bg-slate-50 transition" required />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Usia Ke-</label>
                    <input type="number" value={umur} onChange={(e) => setUmur(e.target.value)} className="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-teal-500 bg-slate-50 transition" required />
                  </div>
                </div>
              )}
            </div>

            {/* WAKTU & LOKASI */}
            <div className="p-6 bg-white shadow-sm border border-slate-200 rounded-2xl flex flex-col gap-5">
               <h2 className="text-xs font-bold tracking-widest text-teal-600 uppercase mb-2">Waktu & Lokasi</h2>
               
               <div className="grid grid-cols-2 gap-4">
                 <div>
                   <label className="block text-sm font-bold text-slate-700 mb-2">Tanggal</label>
                   <input type="date" value={tanggal} onChange={(e) => setTanggal(e.target.value)} className="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-teal-500 bg-slate-50 transition" required />
                 </div>
                 <div>
                   <label className="block text-sm font-bold text-slate-700 mb-2">Waktu (Jam)</label>
                   <input type="text" value={waktu} onChange={(e) => setWaktu(e.target.value)} placeholder="09:00 - Selesai" className="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-teal-500 bg-slate-50 transition" required />
                 </div>
               </div>

               <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Nama Gedung/Lokasi</label>
                  <input type="text" value={lokasi} onChange={(e) => setLokasi(e.target.value)} placeholder="Grand Ballroom Hotel" className="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-teal-500 bg-slate-50 transition" required />
               </div>

               <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Alamat Lengkap</label>
                  <textarea value={alamat} onChange={(e) => setAlamat(e.target.value)} placeholder="Jl. Sudirman No. 123..." className="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-teal-500 bg-slate-50 transition min-h-[80px]" required></textarea>
               </div>
            </div>

            {/* PESAN PENUTUP */}
            <div className="p-6 bg-white shadow-sm border border-slate-200 rounded-2xl">
               <label className="block text-sm font-bold text-slate-700 mb-2">Pesan Penutup</label>
               <textarea value={pesan} onChange={(e) => setPesan(e.target.value)} placeholder="Tulis pesan untuk tamu..." className="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-teal-500 bg-slate-50 transition min-h-[100px]" required></textarea>
            </div>

            <button type="submit" disabled={loading} className={`mt-4 text-white font-bold py-4 rounded-xl transition-all shadow-lg ${loading ? 'bg-slate-400 cursor-not-allowed' : 'bg-[#0f172a] hover:bg-slate-800 hover:-translate-y-1'}`}>
              {loading ? "Mengunggah & Menyimpan..." : "Terbitkan Kado Digital ✨"}
            </button>
          </form>
        </div>
      </div>

      {/* KOLOM KANAN: LIVE PREVIEW (TAMPILAN SINGKAT) */}
      <div className="hidden lg:flex w-full lg:w-1/2 bg-[#0f172a] p-12 flex-col items-center justify-center relative border-l border-slate-800">
         <div className="absolute top-6 right-6 bg-teal-500/20 text-teal-400 border border-teal-500/30 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase flex items-center gap-2">
            <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span>
            Live Preview (Sampul)
         </div>

         <div className="max-w-sm w-full bg-slate-900 border border-slate-700 p-8 rounded-3xl shadow-2xl relative overflow-hidden text-center">
            {fotoPreview ? (
               <div className="w-full aspect-[4/5] overflow-hidden rounded-2xl mb-8 border-4 border-slate-800 shadow-inner bg-slate-800">
                 <img src={fotoPreview} alt="Preview" className="w-full h-full object-cover" />
               </div>
            ) : (
               <div className="w-full aspect-[4/5] rounded-2xl mb-8 border-2 border-dashed border-slate-700 bg-slate-800/50 flex items-center justify-center text-slate-500 text-sm">Area Foto Utama</div>
            )}

            {jenisAcara === "Ulang Tahun" ? (
               <>
                 <h1 className="text-3xl font-extrabold text-white mb-4 truncate">{namaUltah || "Nama"}</h1>
                 <p className="text-teal-400 text-xs font-bold tracking-widest uppercase mb-4">Usia Ke-{umur || "..."}</p>
               </>
            ) : (
               <>
                 <h1 className="text-3xl font-serif text-white mb-4 truncate">{mempelaiPria || "Pria"} & {mempelaiWanita || "Wanita"}</h1>
                 <p className="text-teal-400 text-xs font-bold tracking-widest uppercase mb-4">The Wedding</p>
               </>
            )}
            
            <div className="bg-slate-800 text-slate-300 text-xs py-2 rounded-lg mt-4">{tanggal || "Tanggal"} • {lokasi || "Lokasi"}</div>
         </div>
      </div>

    </main>
  );
}
