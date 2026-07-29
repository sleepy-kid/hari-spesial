import Link from "next/link";

export default function Galeri() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#1e293b] p-8 pb-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-serif font-bold text-[#cda274]">Galeri Desain</h1>
          <Link href="/" className="text-sm font-medium hover:text-[#cda274] transition">
            &larr; Kembali ke Beranda
          </Link>
        </div>
        
        <p className="text-gray-600 mb-8">Pilih tema undangan yang paling sesuai dengan gaya Anda.</p>

        {/* Grid Template */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contoh Card Template 1 */}
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition">
            <div className="bg-gray-200 h-64 rounded-xl mb-4 flex items-center justify-center">
              <span className="text-gray-400">Preview Tema 1</span>
            </div>
            <h2 className="font-bold text-xl mb-1">Klasik Elegan</h2>
            <p className="text-sm text-gray-500 mb-4">Warna netral dengan tipografi serif.</p>
            <Link href="/buat" className="block text-center w-full bg-[#1e293b] text-white py-2 rounded-lg font-medium hover:bg-[#334155] transition">
              Gunakan Desain Ini
            </Link>
          </div>

          {/* Contoh Card Template 2 */}
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition">
            <div className="bg-gray-200 h-64 rounded-xl mb-4 flex items-center justify-center">
              <span className="text-gray-400">Preview Tema 2</span>
            </div>
            <h2 className="font-bold text-xl mb-1">Floral Romantis</h2>
            <p className="text-sm text-gray-500 mb-4">Aksen bunga dengan warna pastel.</p>
            <Link href="/buat" className="block text-center w-full bg-[#1e293b] text-white py-2 rounded-lg font-medium hover:bg-[#334155] transition">
              Gunakan Desain Ini
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}