// src/components/HowItWorks.jsx
import React from 'react';

const HowItWorksData = [
  {
    illustrationPlaceholder: { text: '[Ilustrasi: Tangan memegang struk & smartphone]', color: 'bg-orange-100' },
    title: 'Scan Struk',
    description: 'Ambil foto struk belanja Anda dengan kamera smartphone.',
  },
  {
    illustrationPlaceholder: { text: '[Ilustrasi: Dua orang dengan item & tanda plus]', color: 'bg-sky-100' },
    title: 'Sesuaikan Pembagian',
    description: 'Pilih item mana yang ingin Anda bagikan dan dengan siapa.',
  },
  {
    illustrationPlaceholder: { text: '[Ilustrasi: Celengan & koin/transaksi]', color: 'bg-green-100' },
    title: 'Split & Bayar',
    description: 'Bagi tagihan secara otomatis dan selesaikan pembayaran dengan mudah.',
  },
];

const HowItWorks = () => {
  return (
    <section id="cara-kerja" className="bg-[#FFF9F0] py-16 md:py-20"> {/* Warna latar beige seperti Hero */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Placeholder Ikon Megafon */}
          <div className="flex-shrink-0 w-28 h-28 md:w-32 md:h-32 bg-orange-400 rounded-full flex items-center justify-center shadow-lg transform -rotate-12">
            {/* Ganti dengan <img> atau SVG untuk ikon megafon sebenarnya */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.906 2.176a1.5 1.5 0 011.926-.01L19.5 6.756a1.5 1.5 0 01.824 1.32V15a1.5 1.5 0 01-1.51 1.493l-.01.001h- bestätigt-.317a1.5 1.5 0 01-1.138-.501L12 12.003l-4.176 3.99a1.5 1.5 0 01-1.138.502H6.375a1.5 1.5 0 01-1.5-1.5V8.076a1.5 1.5 0 01.824-1.32l5.67-4.584zM15.75 15.75H21m-5.25 0v-2.25m-10.5 2.25H3m5.25 0v-2.25" />
            </svg>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              Bagaimana Struk.in Bekerja
            </h2>
            <p className="text-base md:text-lg text-slate-600 max-w-md mx-auto md:mx-0">
              Tiga langkah mudah untuk mengelola struk dan membagi tagihan dengan teman.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 text-center">
          {HowItWorksData.map((step, index) => (
            <div key={index} className="transform transition-transform duration-300 hover:scale-105">
              <div className={`mx-auto mb-6 w-full max-w-[280px] h-48 md:h-56 ${step.illustrationPlaceholder.color} rounded-xl shadow-lg flex items-center justify-center p-4 text-slate-600 font-medium`}>
                {/* Ganti dengan <img> atau SVG untuk ilustrasi langkah sebenarnya */}
                {step.illustrationPlaceholder.text}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-slate-800 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed px-2">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;