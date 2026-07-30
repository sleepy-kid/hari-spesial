import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f2eb] text-[#2c2c2c] font-sans selection:bg-[#d4af37] selection:text-white pb-20">
      
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 py-5 max-w-5xl mx-auto">
        <div className="font-serif font-bold text-2xl tracking-wide text-[#8c6b4a]">HariSpesial.id</div>
        <Link href="/login" className="bg-[#2c2c2c] text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-black transition shadow-md">
          Buka Studio &rarr;
        </Link>
      </nav>

      {/* HERO SECTION & MOCKUP HP */}
      <section className="px-6 pt-10 pb-20 max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-serif font-medium mb-6 leading-tight">
          Kado digital yang <span className="italic text-[#8c6b4a]">mekar</span><br/>saat dibuka.
        </h1>
        <p className="text-gray-600 mb-12 text-lg max-w-xl mx-auto">
          Tulis pesanmu, pilih tema, dan biarkan dia membukanya pelan-pelan. Tanpa aplikasi, tanpa akun.
        </p>

        {/* SIMULASI LAYAR HP (MOCKUP) */}
        <div className="relative mx-auto w-[300px] h-[600px] bg-[#faf8f5] border-[12px] border-[#2c2c2c] rounded-[3rem] shadow-2xl overflow-hidden mb-12 flex flex-col items-center justify-center">
           {/* Dekorasi dalam HP */}
           <div className="text-center px-6 w-full">
              <p className="text-[10px] tracking-widest text-[#8c6b4a] mb-2 uppercase font-bold">Senja, Bunga & Musik</p>
              <div className="w-full h-[1px] bg-gray-200 mb-4"></div>
              <p className="text-xs tracking-widest text-gray-400 mb-1 uppercase">Untuk</p>
              <h2 className="text-4xl font-serif font-bold mb-10 text-[#2c2c2c]">Sarah</h2>
              
              <Link href="/buat" className="bg-[#4a3b52] text-white w-full py-4 rounded-full text-sm font-bold shadow-lg flex justify-center items-center gap-2 hover:scale-105 transition-transform">
                 ✨ Buka undangan
              </Link>
              <p className="text-[10px] text-gray-400 mt-4">Ketuk untuk merobek tiket</p>
           </div>
           {/* Indikator Home HP */}
           <div className="absolute bottom-4 w-24 h-1 bg-gray-300 rounded-full"></div>
        </div>

        {/* TOMBOL CALL TO ACTION UTAMA */}
        <Link href="/buat" className="bg-[#8c6b4a] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#70553b] transition shadow-xl inline-block">
          Buat Kado Sekarang
        </Link>
      </section>

      {/* BAGIAN CARA KERJA (Seperti di Video) */}
      <section className="px-6 py-24 bg-[#efebe1]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm font-bold tracking-[0.2em] text-[#8c6b4a] mb-3 uppercase">Cara Kerja</h2>
          <h3 className="text-3xl md:text-4xl font-serif mb-16 text-[#2c2c2c]">Tanpa aplikasi, tanpa akun — untukmu maupun penerima.</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-[#f5f2eb] p-8 rounded-3xl shadow-sm border border-[#e5e0d3]">
              <div className="w-12 h-12 bg-[#8c6b4a] text-white font-bold rounded-full flex items-center justify-center mb-6 text-xl shadow-md">1</div>
              <h4 className="font-bold text-xl mb-3">Pilih Penerima & Momen</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Orang tua, sahabat, kolega, keluarga besar — lalu pilih momen dan warnanya.</p>
            </div>
            {/* Step 2 */}
            <div className="bg-[#f5f2eb] p-8 rounded-3xl shadow-sm border border-[#e5e0d3]">
              <div className="w-12 h-12 bg-[#8c6b4a] text-white font-bold rounded-full flex items-center justify-center mb-6 text-xl shadow-md">2</div>
              <h4 className="font-bold text-xl mb-3">Isi & Lihat Pratinjau</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Tulis salam, foto, surat, lagu. Pratinjau reveal-nya hidup langsung sambil kamu menyusun.</p>
            </div>
            {/* Step 3 */}
            <div className="bg-[#f5f2eb] p-8 rounded-3xl shadow-sm border border-[#e5e0d3]">
              <div className="w-12 h-12 bg-[#8c6b4a] text-white font-bold rounded-full flex items-center justify-center mb-6 text-xl shadow-md">3</div>
              <h4 className="font-bold text-xl mb-3">Bagikan Tautan / QR</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Terbitkan sekali, dapat tautan privat & QR. Penerima cukup buka lewat browser.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BAGIAN UNTUK SIAPA (Seperti di Video) */}
      <section className="px-6 py-24 max-w-4xl mx-auto">
         <h2 className="text-sm font-bold tracking-[0.2em] text-[#8c6b4a] mb-3 uppercase">Yang Berubah</h2>
         <h3 className="text-3xl md:text-5xl font-serif mb-12 leading-tight">Untuk Semua<br/>Orang Terkasih.</h3>
         <p className="text-gray-600 mb-12 max-w-xl text-lg">Nggak perlu bingung mau pakai cara apa untuk siapa. Pilih penerimanya, sisanya menyesuaikan.</p>
         
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border border-[#e5e0d3] bg-[#efebe1] p-8 rounded-3xl hover:shadow-lg transition">
               <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-sm">🏠</div>
               <h4 className="font-bold text-xl mb-3">Untuk Orang Tua</h4>
               <p className="text-gray-600 text-sm leading-relaxed">Ucapan Hari Raya, ulang tahun, atau sekadar terima kasih yang jarang terucap langsung.</p>
            </div>
            <div className="border border-[#e5e0d3] bg-[#efebe1] p-8 rounded-3xl hover:shadow-lg transition">
               <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-sm">🤝</div>
               <h4 className="font-bold text-xl mb-3">Untuk Sahabat</h4>
               <p className="text-gray-600 text-sm leading-relaxed">Kirim kado kelulusan, penyemangat, peringatan momen lucu, atau ajakan nongkrong berkelas.</p>
            </div>
         </div>
      </section>

    </main>
  );
}