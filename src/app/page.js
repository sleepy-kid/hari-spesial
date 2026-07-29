import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf8f5] flex flex-col items-center justify-center p-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-serif font-bold text-[#cda274] mb-6">
          Hari Spesial
        </h1>
        <p className="text-gray-600 text-lg mb-10 leading-relaxed">
          Platform pembuatan undangan digital premium. Buat undangan untuk pernikahan, ulang tahun, dan momen berharga lainnya hanya dalam hitungan menit.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Tombol ke halaman Buat Undangan */}
          <Link href="/buat" className="bg-[#cda274] text-white px-8 py-3 rounded-full font-bold hover:bg-[#b58b5d] transition shadow-md w-full sm:w-auto">
            ✨ Buat Undangan
          </Link>
          
          {/* Tombol ke halaman Login */}
          <Link href="/login" className="bg-white text-[#1e293b] border-2 border-gray-200 px-8 py-3 rounded-full font-bold hover:border-[#cda274] transition shadow-sm w-full sm:w-auto">
            Masuk / Kelola
          </Link>
        </div>
      </div>
    </main>
  );
}