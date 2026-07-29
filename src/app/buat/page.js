"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; 
import { db } from "../lib/firebase"; 
import { collection, addDoc } from "firebase/firestore";

export default function BuatUndangan() {
  const router = useRouter();
  
  // State untuk jenis acara
  const [jenisAcara, setJenisAcara] = useState("Pernikahan");
  
  // State data pernikahan
  const [mempelaiPria, setMempelaiPria] = useState("");
  const [mempelaiWanita, setMempelaiWanita] = useState("");
  
  // State data ulang tahun
  const [namaUltah, setNamaUltah] = useState("");
  const [umur, setUmur] = useState("");

  // State umum
  const [tanggal, setTanggal] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSimpan = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Menyusun data yang akan dikirim berdasarkan jenis acara
      const dataUndangan = {
        jenisAcara: jenisAcara,
        tanggalAcara: tanggal,
        dibuatPada: new Date().toISOString()
      };

      if (jenisAcara === "Pernikahan") {
        dataUndangan.pria = mempelaiPria;
        dataUndangan.wanita = mempelaiWanita;
      } else {
        dataUndangan.namaUltah = namaUltah;
        dataUndangan.umur = umur;
      }

      // Simpan ke database
      const docRef = await addDoc(collection(db, "undangan"), dataUndangan);
      
      // Pindah ke halaman hasil
      router.push(`/undangan/${docRef.id}`); 
      
    } catch (error) {
      console.error("Error: ", error);
      alert("Gagal menyimpan data. Coba lagi.");
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#1e293b] p-8 pb-20">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-[#cda274]">Detail Acara</h1>
          <Link href="/" className="text-sm text-gray-400 hover:text-gray-700">Tutup ✕</Link>
        </div>

        <form onSubmit={handleSimpan} className="flex flex-col gap-5">
          {/* Pilihan Jenis Acara */}
          <div>
            <label className="block text-sm font-semibold mb-1">Jenis Acara</label>
            <select 
              value={jenisAcara} 
              onChange={(e) => setJenisAcara(e.target.value)}
              className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-[#cda274] outline-none text-black bg-white cursor-pointer"
            >
              <option value="Pernikahan">Pernikahan</option>
              <option value="Ulang Tahun">Ulang Tahun</option>
            </select>
          </div>

          {/* Form Dinamis: Berubah tergantung jenis acara */}
          {jenisAcara === "Pernikahan" ? (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1">Nama Pria</label>
                <input type="text" value={mempelaiPria} onChange={(e) => setMempelaiPria(e.target.value)} className="w-full border p-2 rounded-lg text-black bg-white focus:ring-[#cda274]" placeholder="Romeo" required />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Nama Wanita</label>
                <input type="text" value={mempelaiWanita} onChange={(e) => setMempelaiWanita(e.target.value)} className="w-full border p-2 rounded-lg text-black bg-white focus:ring-[#cda274]" placeholder="Juliet" required />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1">Nama yang Berulang Tahun</label>
                <input type="text" value={namaUltah} onChange={(e) => setNamaUltah(e.target.value)} className="w-full border p-2 rounded-lg text-black bg-white focus:ring-[#cda274]" placeholder="Contoh: Budi" required />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Ulang Tahun Ke-</label>
                <input type="number" value={umur} onChange={(e) => setUmur(e.target.value)} className="w-full border p-2 rounded-lg text-black bg-white focus:ring-[#cda274]" placeholder="17" required />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold mb-1">Tanggal Acara</label>
            <input type="date" value={tanggal} onChange={(e) => setTanggal(e.target.value)} className="w-full border p-2 rounded-lg text-black bg-white focus:ring-[#cda274]" required />
          </div>

          <button type="submit" disabled={loading} className={`mt-4 text-white font-bold py-3 rounded-lg transition ${loading ? 'bg-gray-400' : 'bg-[#cda274] hover:bg-[#b58b5d]'}`}>
            {loading ? "Menyimpan..." : "Simpan & Buat Undangan"}
          </button>
        </form>
      </div>
    </main>
  );
}