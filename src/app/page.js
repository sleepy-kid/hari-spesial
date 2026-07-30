import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#0f172a] font-sans selection:bg-[#0ea5e9] selection:text-white">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-6xl mx-auto border-b border-slate-200/60">
        <div className="flex items-center gap-2">
          {/* Logo Minimalis */}
          <div className="w-8 h-8 bg-[#0f172a] rounded-full flex items-center justify-center text-white font-serif italic text-xl">H</div>
          <span className="font-semibold text-xl tracking-tight text-[#0f172a]">HariSpesial.</span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/login" className="hidden md:block text-sm font-medium text-slate-500 hover:text-[#0f172a] transition">Masuk</Link>
          <Link href="/buat" className="bg-[#0f172a] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Mulai Gratis
          </Link>
        </div>
      </nav>

      {/* HERO SECTION (Split Layout) */}
      <section className="px-8 pt-16 pb-24 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 overflow-hidden">
        
        {/* Teks Kiri */}
        <div className="w-full md:w-1/2 text-left z-10">
          <div className="inline-block px-4 py-1.5 bg-teal-50 text-teal-700 text-xs font-bold tracking-widest rounded-full mb-6 border border-teal-100">
            ✨ PLATFORM UNDANGAN DIGITAL
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1] tracking-tight text-[#0f172a]">
            Rayakan Momen, <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">
              Tanpa Batasan.
            </span>
          </h1>
          <p className="text-slate-500 text-lg mb-10 leading-relaxed max-w-md">
            Ubah cara Anda mengundang. Buat website undangan premium atau kado digital eksklusif yang menyesuaikan dengan gaya personal Anda hanya dalam 3 menit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/buat" className="bg-[#0f172a] text-white px-8 py-4 rounded-full font-semibold text-center hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl">
              Buat Undangan Sekarang &rarr;
            </Link>
          </div>
        </div>

        {/* Visual Kanan - Abstrak Kartu */}
        <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] flex justify-center items-center">
          {/* Kartu Belakang */}
          <div className="absolute top-10 right-10 w-64 h-80 bg-teal-50/80 rounded-3xl border border-teal-100 shadow-2xl rotate-12 transform transition-transform hover:rotate-6 backdrop-blur-sm"></div>
          {/* Kartu Tengah */}
          <div className="absolute top-20 left-10 w-64 h-80 bg-emerald-50/80 rounded-3xl border border-emerald-100 shadow-2xl -rotate-6 transform transition-transform hover:-rotate-12 backdrop-blur-sm"></div>
          {/* Kartu Depan */}
          <div className="absolute z-10 w-72 h-[350px] bg-white rounded-3xl border border-slate-100 shadow-2xl flex flex-col items-center justify-center p-6 text-center transform transition-transform hover:scale-105">
            <div className="w-20 h-20 bg-slate-50 rounded-full mb-4 flex items-center justify-center text-4xl shadow-inner border border-slate-100">🌿</div>
            <h3 className="text-xl font-bold mb-2 text-[#0f172a]">Pernikahan Impian</h3>
            <p className="text-xs text-slate-400 mb-6 uppercase tracking-widest font-semibold">Akan Segera Hadir</p>
            <div className="w-full h-10 bg-slate-50 rounded-lg border border-slate-100 mb-2"></div>
            <div className="w-3/4 h-10 bg-slate-50 rounded-lg border border-slate-100"></div>
          </div>
        </div>
      </section>

      {/* FITUR UNGGULAN (Warna Gelap Kontras) */}
      <section className="px-8 py-24 bg-[#0f172a] text-white md:rounded-[3rem] mx-0 md:mx-4 lg:mx-auto max-w-7xl my-10 shadow-2xl border border-slate-800">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-teal-400 font-semibold tracking-widest text-sm uppercase mb-3">Keunggulan Fitur</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white">Mengapa Memilih Kami?</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Fitur 1 */}
            <div className="p-8 bg-slate-800/40 rounded-3xl border border-slate-700/50 hover:bg-slate-800 transition duration-300 backdrop-blur-md">
              <div className="w-14 h-14 bg-teal-500/20 text-teal-400 rounded-2xl flex items-center justify-center text-2xl mb-6 border border-teal-500/10">🎨</div>
              <h4 className="text-xl font-bold mb-3 text-slate-100">Desain Ultra Modern</h4>
              <p className="text-slate-400 leading-relaxed text-sm">Tinggalkan template kuno. Sistem kami memastikan setiap undangan terlihat seperti didesain oleh profesional.</p>
            </div>
            {/* Fitur 2 */}
            <div className="p-8 bg-slate-800/40 rounded-3xl border border-slate-700/50 hover:bg-slate-800 transition duration-300 backdrop-blur-md">
              <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center text-2xl mb-6 border border-emerald-500/10">⚡</div>
              <h4 className="text-xl font-bold mb-3 text-slate-100">Sistem Real-time</h4>
              <p className="text-slate-400 leading-relaxed text-sm">Ubah nama, tanggal, atau detail acara kapan saja. Tamu Anda akan selalu melihat versi terbaru secara instan.</p>
            </div>
            {/* Fitur 3 */}
            <div className="p-8 bg-slate-800/40 rounded-3xl border border-slate-700/50 hover:bg-slate-800 transition duration-300 backdrop-blur-md">
              <div className="w-14 h-14 bg-cyan-500/20 text-cyan-400 rounded-2xl flex items-center justify-center text-2xl mb-6 border border-cyan-500/10">🔒</div>
              <h4 className="text-xl font-bold mb-3 text-slate-100">Privasi Terjamin</h4>
              <p className="text-slate-400 leading-relaxed text-sm">Tidak ada data yang bocor. Anda pegang kendali penuh atas siapa saja yang berhak membuka kado digital Anda.</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
