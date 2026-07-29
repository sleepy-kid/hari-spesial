"use client";
import { useEffect, useState, use } from "react"; 
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";

export default function UndanganDetail({ params }) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-[#faf8f5]">Mempersiapkan undangan...</div>;
  if (!data) return <div className="min-h-screen flex items-center justify-center bg-[#faf8f5]">Maaf, Undangan tidak ditemukan.</div>;

  // Jika acara adalah Ulang Tahun
  if (data.jenisAcara === "Ulang Tahun") {
    return (
      <main className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-4">
        <div className="bg-white p-10 rounded-3xl shadow-xl text-center border-t-4 border-blue-400 max-w-lg w-full">
          <p className="text-blue-500 tracking-[0.2em] text-sm font-bold mb-4 uppercase">You're Invited!</p>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Happy Birthday</h1>
          <h2 className="text-5xl font-extrabold text-blue-600 mb-4">{data.namaUltah}</h2>
          <p className="text-gray-600 mb-8">
            Rayakan ulang tahun ke-<span className="font-bold">{data.umur}</span> bersama kami pada:<br/>
            <span className="font-bold text-gray-800 text-xl mt-2 block">{data.tanggalAcara}</span>
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition shadow-md w-full">
            Buka Undangan
          </button>
        </div>
      </main>
    );
  }

  // Jika acara adalah Pernikahan (Default)
  return (
    <main className="min-h-screen bg-[#faf8f5] flex flex-col items-center justify-center p-4">
      <div className="bg-white p-10 rounded-3xl shadow-xl text-center border-t-4 border-[#cda274] max-w-lg w-full">
        <p className="text-[#cda274] tracking-[0.2em] text-sm font-semibold mb-4 uppercase">The Wedding Of</p>
        <h1 className="text-5xl font-serif text-[#1e293b] mb-4">{data.pria} & {data.wanita}</h1>
        <p className="text-gray-600 mb-8">
          Kami berharap kehadiran Anda pada tanggal:<br/>
          <span className="font-bold text-[#1e293b] text-xl mt-2 block">{data.tanggalAcara}</span>
        </p>
        <button className="bg-[#1e293b] text-white px-8 py-3 rounded-full font-medium hover:bg-[#334155] transition shadow-md w-full">
          Buka Undangan Lengkap
        </button>
      </div>
    </main>
  );
}