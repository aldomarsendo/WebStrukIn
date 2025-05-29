// src/components/Features.jsx
import React from 'react';

// Data untuk kartu fitur agar lebih mudah dikelola
const featureData  = [
  
  {
    bgColor: 'bg-[#4D8DFF]', // Biru dari desain
    title: 'Pilih Item',
    description: 'Cukup foto strukmu, dan Struk.in akan otomatis mengenali isi belanjaan mulai dari nama item, harga, sampai total belanjaan.',
    phoneScreenContent: (
      <>
        <div className="p-1.5 text-[9px] border-b border-slate-200">
          <p className="font-medium">AYAM GEPREK JUARA</p>
          <div className="flex justify-between"><span className="text-slate-500">2x</span> <span>25.000</span></div>
        </div>
        <div className="p-1.5 text-[9px] border-b border-slate-200">
          <p className="font-medium">NASI GORENG PEDAS</p>
          <div className="flex justify-between"><span className="text-slate-500">1x</span> <span>27.000</span></div>
        </div>
        <div className="p-1.5 text-[9px]">
          <p className="font-medium">ES TEH MANIS</p>
          <div className="flex justify-between"><span className="text-slate-500">3x</span> <span>5.000</span></div>
        </div>
      </>
    ),
  },
  {
    bgColor: 'bg-[#32D7A0]', // Teal/Mint dari desain
    title: 'Ubah Struk',
    description: 'Kurang pas hasil scannya? Tenang, kamu bisa edit semua detailnya, seperti nama item, harga, jumlah, bahkan nama restoranya.',
    phoneScreenContent: (
      <>
        <div className="p-1.5 text-[9px] border-b border-slate-200 text-center font-semibold">JOHOR BARU RESTORANT</div>
        <div className="p-1.5 text-[9px] border-b border-slate-200 flex justify-between">
          <span>Nasi Goreng Pedas</span>
          <div className="flex space-x-2"><span>1x</span> <span>10.000</span> <span>10.000</span></div>
        </div>
        <div className="p-1.5 text-[9px] border-b border-slate-200 flex justify-between">
          <span>Es Teh Manis</span>
          <div className="flex space-x-2"><span>2x</span> <span>5.000</span> <span>10.000</span></div>
        </div>
      </>
    ),
  },
  {
    bgColor: 'bg-[#F6A625]', // Oranye/Kuning dari desain
    title: 'Scan Struk Baru',
    smallTitle: 'Hello There',
    description: 'Kurang pas hasil scannya? Tenang, kamu bisa edit semua detailnya, seperti nama item, harga, jumlah, bahkan nama restoranya.', // Deskripsi ini sama dengan kartu kedua di gambar, mungkin perlu disesuaikan.
    phoneScreenContent: (
      <>
        <div className="p-1.5 text-[9px] text-center">
          <p className="font-semibold mb-1">Scan Strukmu Sekarang</p>
          <p className="text-slate-500 text-[8px] mb-2">Ambil foto struk untuk item baru</p>
          <button className="w-full bg-orange-500 text-white py-1.5 rounded-md text-[9px] font-medium">Scan Struk</button>
          <p className="text-slate-400 text-[8px] mt-3">Filter berdasarkan : Semua</p>
        </div>
      </>
    ),
    hasPlusIcon: true,
  },
];

const FeatureCard = ({ bgColor, title, smallTitle, description, phoneScreenContent, hasPlusIcon }) => {
  return (
    <div className={`${bgColor} rounded-xl md:rounded-2xl shadow-xl p-6 md:p-8 flex flex-col justify-between text-white overflow-hidden min-h-[480px] sm:min-h-[500px] lg:min-h-[520px] transform hover:scale-[1.03] transition-transform duration-300 ease-in-out`}>
      <div className="mb-6">
        {smallTitle && <p className="text-sm font-normal opacity-80 mb-1">{smallTitle}</p>}
        <h3 className="text-2xl lg:text-3xl font-semibold mb-3 flex items-center">
          {title}
          {hasPlusIcon && (
            <span className="ml-2 w-6 h-6 bg-white bg-opacity-25 rounded-full flex items-center justify-center text-lg font-semibold">
              +
            </span>
          )}
        </h3>
        <p className="text-sm opacity-90 leading-relaxed">{description}</p>
      </div>
      <div className="mt-auto flex justify-center items-end select-none">
        {/* Placeholder Mockup Handphone */}
        <div className="w-[160px] h-[320px] sm:w-[170px] sm:h-[340px] lg:w-[180px] lg:h-[360px] bg-slate-800 rounded-t-[30px] p-2 pt-3 shadow-inner relative">
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-10 h-1.5 bg-slate-700 rounded-full"></div> {/* Earpiece/Notch placeholder */}
          <div className="bg-white rounded-t-[20px] h-full w-full overflow-y-auto p-2 text-slate-800">
            {phoneScreenContent}
          </div>
        </div>
      </div>
    </div>
  );
};


const Features = () => {
  return (
    <section id="fitur" className="bg-white py-16 md:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Speech Bubble Aldo Mareando - Diposisikan relatif terhadap section */}
        <div className="absolute -top-5 left-4 sm:left-8 md:left-16 lg:left-24 transform -translate-y-1/2 md:translate-y-0 mb-8 md:mb-0 z-10">
          <div className="flex items-start space-x-2">
            {/* Placeholder Koin */}
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-md border-2 border-yellow-500 flex-shrink-0 mt-1">
              $
            </div>
            <div className="bg-white p-3 rounded-lg shadow-xl relative min-w-[200px]">
              <p className="text-sm font-semibold text-slate-700">Aldo Mareando</p>
              <p className="text-xs text-slate-500">Eh tadi ga salah kan ngitungnya?</p>
              {/* Pointer untuk bubble */}
              <div className="absolute left-2 -bottom-1.5 w-3 h-3 bg-white transform rotate-45 shadow"></div>
            </div>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-4">
          Fitur Andalan Struk.in
        </h2>
        <p className="text-base md:text-lg text-slate-600 text-center max-w-2xl mx-auto mb-12 md:mb-16">
          Aplikasi yang memudahkan kamu mengelola struk belanja dan membagi tagihan dengan teman.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
          {featureData.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;