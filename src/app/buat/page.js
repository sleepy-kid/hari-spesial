"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; 
import { db } from "../lib/firebase"; // Kita cuma import db (Firestore)
import { collection, addDoc } from "firebase/firestore";

export default function BuatUndangan() {
  const router = useRouter();
  
  const [jenisAcara, setJenisAcara] = useState("Pernikahan");
  const [mempelaiPria, setMempelaiPria] = useState("");
  const [mempelaiWanita, setMempelaiWanita] = useState("");
  const [namaUltah, setNamaUltah] = useState("");
  const [umur, setUmur] = useState("");
  const [tanggal, setTanggal] = useState("");
  
  // State khusus Foto
  const [foto, setFoto] = useState(null);
  
  const [loading, setLoading] = useState(false);

  const handleSimpan = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let fotoUrl = "";

      // 1. JALUR TIKUS: Upload foto ke ImgBB
      if (foto) {
        const formData = new FormData();
        formData.append("image", foto);
        
        // Menggunakan API Key ImgBB milik Anda
        const imgbbAPI = "19043b8f0d4415d3f1a92b8ae12e6c80"; 
        
        const res = await fetch(`https://api.imgbb.com/1/upload?key=${imgbbAPI}`, {
          method: "POST",
          body: formData,
        });
        
        const dataImg = await res.json();
        
        if (dataImg.success) {
          // Jika sukses, kita ambil link url gambarnya
          fotoUrl = dataImg.data.url; 
        } else {
          console.error("Gagal upload gambar ke ImgBB");
        }
      }

      // 2. Susun data undangan (gabungkan teks dengan link foto tadi)
      const dataUndangan = {
        jenisAcara: jenisAcara,
        tanggalAcara: tanggal,
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

      // 3. Simpan data lengkapnya ke Firebase Firestore
      const docRef = await addDoc(collection(db, "undangan"), dataUndangan);
      
      // Arahkan ke halaman kado yang sudah jadi
      router.push(`/undangan/${docRef.id}`); 
      
    } catch (error) {
      console.error("Error: ", error);
      alert("Gagal menyimpan data. Pastikan koneksi internet stabil.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#0f172a] p-8 pb-20 font-sans">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-xl border border-slate-100 mt-10">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#0f172a]">Detail Acara</h1>
          <Link href="/" className="text-sm text-slate-400 hover:text-rose-500 font-medium">Batal ✕</Link>
        </div>

        <form onSubmit={handleSimpan} className="flex flex-col gap-6">
          
          {/* FOTO UPLOAD SECTION */}
          <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl border-dashed">
            <label className="block text-sm font-bold text-slate-700 mb-2">Pilih Foto Utama (Opsional)</label>
            <input 
              type="file" 
              accept="image/*"
              onChange={(e) => setFoto(e.target.files[0])}
              className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100"
            />
            <p className="text-xs text-slate-400 mt-2">Format: JPG, PNG (Maksimal 2MB disarankan)</p>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">Jenis Acara</label>
            <select value={jenisAcara} onChange={(e) => setJenisAcara(e.target.value)} className="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none bg-white">
              <option value="Pernikahan">Pernikahan</option>
              <option value="Ulang Tahun">Ulang Tahun</option>
            </select>
          </div>

          {jenisAcara === "Pernikahan" ? (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Panggilan Pria</label>
                <input type="text" value={mempelaiPria} onChange={(e) => setMempelaiPria(e.target.value)} className="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-teal-500" required />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Panggilan Wanita</label>
                <input type="text" value={mempelaiWanita} onChange={(e) => setMempelaiWanita(e.target.value)} className="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-teal-500" required />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Nama Spesial</label>
                <input type="text" value={namaUltah} onChange={(e) => setNamaUltah(e.target.value)} className="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-teal-500" required />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Usia Ke-</label>
                <input type="number" value={umur} onChange={(e) => setUmur(e.target.value)} className="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-teal-500" required />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">Tanggal Acara</label>
            <input type="date" value={tanggal} onChange={(e) => setTanggal(e.target.value)} className="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-teal-500" required />
          </div>

          <button type="submit" disabled={loading} className={`mt-4 text-white font-bold py-4 rounded-xl transition-all shadow-lg ${loading ? 'bg-slate-400 cursor-not-allowed' : 'bg-[#0f172a] hover:bg-slate-800 hover:-translate-y-1'}`}>
            {loading ? "Mengunggah & Menyimpan..." : "Buat Kado Digital ✨"}
          </button>
        </form>
      </div>
    </main>
  );
}
