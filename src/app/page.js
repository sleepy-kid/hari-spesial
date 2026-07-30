import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#1c1c1c] font-sans selection:bg-[#94a3b8] selection:text-white">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-6xl mx-auto border-b border-gray-200/50">
        <div className="flex items-center gap-2">
          {/* Logo Minimalis */}
          <div className="w-8 h-8 bg-[#1c1c1c] rounded-full flex items-center justify-center text-white font-serif italic text-xl">H</div>
          <span className="font-semibold text-xl tracking-tight">HariSpesial.</span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/login" className="hidden md:block text-sm font-medium text-gray-500 hover:text-black transition">Masuk</Link>
          <Link href="/buat" className="bg-[#1c1c1c] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Mulai Gratis
          </Link>
        </div>
      </nav>

      {/* HERO SECTION (Split Layout) */}
      <section className="px-8 pt-16 pb-24 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 overflow-hidden">
        
        {/* Teks Kiri */}
        <div className="w-full md:w-1/2 text-left z-10">
          <div className="inline-block px-3 py-1 bg-rose-100 text-rose-700 text-xs font-bold tracking-wider rounded-full mb-6">
            ✨ PLATFORM UNDANGAN DIGITAL
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
            Rayakan Momen, <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">
              Tanpa Batasan.
            </span>
          </h1>
          <p className="text-gray-500 text-lg mb-10 leading-relaxed max-w-md">
            Ubah cara Anda mengundang. Buat website undangan premium atau kado digital eksklusif yang menyesuaikan dengan gaya personal Anda hanya dalam 3 menit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/buat" className="bg-[#1c1c1c] text-white px-8 py-4 rounded-full font-semibold text-center hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl">
              Buat Undangan Sekarang &rarr;
            </Link>
          </div>
        </div>

        {/* Visual Kanan - Abstrak Kartu (Bukan HP) */}
        <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] flex justify-center items-center">
          {/* Kartu Belakang */}
          <div className="absolute top-10 right-10 w-64 h-80 bg-rose-50 rounded-3xl border border-rose-100 shadow-2xl rotate-12 transform transition-transform hover:rotate-6"></div>
          {/* Kartu Tengah */}
          <div className="absolute top-20 left-10 w-64 h-80 bg-orange-50 rounded-3xl border border-orange-100 shadow-2xl -rotate-6 transform transition-transform hover:-rotate-12"></div>
          {/* Kartu Depan */}
          <div className="absolute z-10 w-72 h-[350px] bg-white rounded-3xl border border-gray-100 shadow-2xl flex flex-col items-center justify-center p-6 text-center transform transition-transform hover:scale-105">
            <div className="w-20 h-20 bg-gray-50 rounded-full mb-4 flex items-center justify-center text-4xl shadow-inner">💍</div>
            <h3 className="text-xl font-bold mb-2">Pernikahan Impian</h3>
            <p className="text-xs text-gray-400 mb-6 uppercase tracking-widest">Akan Segera Hadir</p>
            <div className="w-full h-10 bg-gray-50 rounded-lg border border-gray-100 mb-2"></div>
            <div className="w-3/4 h-10 bg-gray-50 rounded-lg border border-gray-100"></div>
          </div>
        </div>
      </section>

      {/* FITUR UNGGULAN (Beda dari kompetitor) */}
      <section className="px-8 py-24 bg-[#1c1c1c] text-white md:rounded-[3rem] mx-0 md:mx-4 lg:mx-auto max-w-7xl my-10 shadow-2xl">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-rose-400 font-semibold tracking-widest text-sm uppercase mb-3">Keunggulan Fitur</h2>
            <h3 className="text-4xl md:text-5xl font-bold">Mengapa Memilih Kami?</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Fitur 1 */}
            <div className="p-8 bg-gray-800/50 rounded-3xl border border-gray-700 hover:bg-gray-800 transition duration-300">
              <div className="w-14 h-14 bg-rose-500/20 text-rose-400 rounded-2xl flex items-center justify-center text-2xl mb-6">🎨</div>
              <h4 className="text-xl font-bold mb-3">Desain Ultra Modern</h4>
              <p className="text-gray-400 leading-relaxed text-sm">Tinggalkan template kuno. Sistem kami memastikan setiap undangan terlihat seperti didesain oleh profesional.</p>
            </div>
            {/* Fitur 2 */}
            <div className="p-8 bg-gray-800/50 rounded-3xl border border-gray-700 hover:bg-gray-800 transition duration-300">
              <div className="w-14 h-14 bg-orange-500/20 text-orange-400 rounded-2xl flex items-center justify-center text-2xl mb-6">⚡</div>
              <h4 className="text-xl font-bold mb-3">Sistem Real-time</h4>
              <p className="text-gray-400 leading-relaxed text-sm">Ubah nama, tanggal, atau detail acara kapan saja. Tamu Anda akan selalu melihat versi terbaru secara instan.</p>
            </div>
            {/* Fitur 3 */}
            <div className="p-8 bg-gray-800/50 rounded-3xl border border-gray-700 hover:bg-gray-800 transition duration-300">
              <div className="w-14 h-14 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center text-2xl mb-6">🔒</div>
              <h4 className="text-xl font-bold mb-3">Privasi Terjamin</h4>
              <p className="text-gray-400 leading-relaxed text-sm">Tidak ada data yang bocor. Anda pegang kendali penuh atas siapa saja yang berhak membuka kado digital Anda.</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
