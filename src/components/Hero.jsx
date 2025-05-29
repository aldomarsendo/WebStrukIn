// src/components/Hero.jsx
import React from 'react';

// Jika Anda telah mengkonfigurasi warna kustom di tailwind.config.js:
// const bgColor = 'bg-strukin-beige'; // contoh
// const primaryOrange = 'text-strukin-orange';
// const gradientFrom = 'from-strukin-yellow';
// const gradientTo = 'to-strukin-orange';
// const logoYellow = 'bg-strukin-yellow';
// const darkText = 'text-strukin-dark';
// const mediumText = 'text-strukin-medium';

// Untuk contoh ini, saya akan menggunakan warna standar Tailwind atau arbitrary values
// yang mendekati desain.
// Misal, #FFF9F0 (beige sangat terang) bisa didekati dengan bg-amber-50 atau bg-orange-50
// atau Anda bisa menambahkannya ke tailwind.config.js

const Hero = () => {
  return (
    <section id="beranda" className="bg-[#FFF9F0] py-16 md:py-24 overflow-hidden"> {/* Warna latar utama Hero */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          {/* === Kolom Kiri (Teks & CTA) === */}
          <div className="md:w-1/2 text-center md:text-left">
            {/* Logo Struk.in di atas headline */}
            <div className="inline-flex items-center mb-6">
              <div className="w-9 h-9 bg-yellow-400 rounded-lg mr-2.5 flex items-center justify-center">
                {/* Placeholder Ikon Logo Struk.in */}
                {/* Ganti dengan SVG atau <img> untuk ikon logo aktual */}
                {/* Ini adalah contoh sederhana, bentuk ikon asli lebih kompleks */}
                <div className="w-3 h-full bg-yellow-300 rounded-sm transform -skew-x-12"></div>
                <div className="w-3 h-full bg-yellow-500 rounded-sm transform -skew-x-12 -ml-1"></div>
              </div>
              <span className="text-4xl font-bold text-slate-800">Struk.in</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-800 mb-6 leading-tight">
              Scan, Split, <span className="text-orange-500">Beres!</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto md:mx-0">
              Gak perlu lagi ribet ngitung struk belanjaan. Mudah tanpa ribet!
              Split bill cepat dan praktis, langsung dari foto struk kamu.
            </p>
            <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50">
              Coba Yuk
              <span className="ml-2 text-xl">&rarr;</span>
            </button>

            {/* Social Proof dengan ikon koin */}
            <div className="mt-10 flex items-center justify-center md:justify-start">
              <div className="flex -space-x-3">
                {/* Placeholder Avatar */}
                <div className="w-10 h-10 bg-slate-300 rounded-full border-2 border-white flex items-center justify-center text-white font-semibold">A</div>
                <div className="w-10 h-10 bg-pink-300 rounded-full border-2 border-white flex items-center justify-center text-white font-semibold">M</div>
                <div className="w-10 h-10 bg-sky-300 rounded-full border-2 border-white flex items-center justify-center text-white font-semibold">S</div>
              </div>
              <div className="ml-4 relative pl-10">
                {/* Placeholder Koin */}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-md border-2 border-yellow-500">
                  $
                </div>
                <div className="bg-white p-3 rounded-lg shadow-lg text-left">
                  <p className="text-sm font-semibold text-slate-700">Aldo Mareando</p>
                  <p className="text-xs text-slate-500">dan 10 lainnya gabung!</p>
                </div>
              </div>
            </div>
          </div>

          {/* === Kolom Kanan (Gambar & Grafis) === */}
          <div className="md:w-1/2 relative mt-12 md:mt-0 flex justify-center">
            {/* Placeholder Ikon Matahari Besar di Latar */}
            <div className="absolute -top-16 -right-10 md:-right-20 w-60 h-60 md:w-80 md:h-80 bg-yellow-300 rounded-full opacity-40 -z-10 transform rotate-45">
              {/* Ini adalah placeholder sederhana, ganti dengan gambar SVG/PNG matahari */}
            </div>

            {/* Placeholder Mockup Handphone */}
            <div className="w-[280px] h-[570px] sm:w-[300px] sm:h-[610px] bg-slate-800 rounded-[40px] p-4 shadow-2xl transform transition-all duration-500 hover:scale-105">
              <div className="bg-white w-full h-full rounded-[24px] p-3 overflow-hidden">
                {/* Konten dalam layar mockup */}
                <div className="h-full overflow-y-auto text-xs text-slate-700 space-y-2">
                  <div className="flex justify-between items-center p-2 bg-slate-100 rounded-t-lg">
                    <span className="font-semibold">PILIH STRUK</span>
                    <div className="w-3 h-3 bg-slate-400 rounded-full"></div> {/* Placeholder ikon */}
                  </div>
                  <div className="p-2 border-b border-slate-200">
                    <p className="font-medium">Salsabila Nurhalimah</p>
                    <p className="text-slate-500 text-[10px]">Eh tadi jadi gak split billnya ya?</p>
                  </div>
                  <div className="p-2 border-b border-slate-200">
                    <p className="font-medium">AYAM GEPREK JUARA</p>
                    <p className="text-slate-500 text-[10px]">3 item dipilih</p>
                  </div>
                  <div className="p-2 border-b border-slate-200">
                    <p className="font-medium">NASI GORENG PEDAS</p>
                    <p className="text-slate-500 text-[10px]">2 item dipilih</p>
                  </div>
                  <div className="p-2">
                    <p className="font-medium">MINUMAN DINGIN</p>
                    <p className="text-slate-500 text-[10px]">5 item dipilih</p>
                  </div>
                   {/* Placeholder untuk tombol atau elemen lain di layar */}
                  <div className="mt-auto pt-2 flex justify-end">
                    <button className="text-[10px] bg-orange-500 text-white px-3 py-1.5 rounded-md">Lanjut</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Placeholder Speech Bubble Salsabila */}
            <div className="absolute top-10 sm:top-16 -left-8 sm:-left-12 bg-white p-3 rounded-lg shadow-lg text-center transform -rotate-6 transition-all duration-300 hover:scale-110">
              <p className="text-xs font-semibold text-slate-700">Salsabila Nurhalimah</p>
              <p className="text-[10px] text-slate-500">Split billnya gampang!</p>
               {/* Pointer bubble (sederhana) */}
              <div className="absolute left-1/2 bottom-[-8px] transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;