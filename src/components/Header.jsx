// src/components/Header.jsx
import React from 'react';

// Tidak perlu lagi import './Header.css'; jika semua styling menggunakan Tailwind

const Header = () => {
  return (
    <header className="container mx-auto flex justify-between  pt-5 sticky top-0 z-50 ">
      <div className="border rounded-2xl bg-white border-white w-full mx-auto lg:px-9 flex flex-wrap justify-between items-center py-5">
        <div className="flex items-center cursor-pointer">
          {/* Logo Area */}
          <div className="w-7 h-7 bg-yellow-400 rounded-md mr-[10px] flex items-center justify-center">
          </div>
          <span className="text-[26px] font-bold text-gray-800 leading-none">
            {/*
              text-[26px]: Ukuran font 26px (arbitrary value).
              font-bold: font-weight 700.
              text-gray-800: Warna teks gelap (sesuai var(--dark-text)).
              leading-none: line-height 1.
            */}
            Struk.in
          </span>
        </div>

        <nav className="flex items-center space-x-[35px]">
          <a
            href="#beranda"
            className="text-base font-medium text-gray-800 hover:text-orange-600 transition-colors duration-200 ease-in-out"
          >

            Beranda
          </a>
          <a
            href="#fitur"
            className="text-base font-medium text-gray-800 hover:text-orange-600 transition-colors duration-200 ease-in-out"
          >
            Fitur Andalan
          </a>
          <a
            href="#cara-kerja"
            className="text-base font-medium text-gray-800 hover:text-orange-600 transition-colors duration-200 ease-in-out"
          >
            Cara Kerja
          </a>
          <a
            href="#tanya-jawab"
            className="text-base font-medium text-gray-800 hover:text-orange-600 transition-colors duration-200 ease-in-out"
          >
            Tanya Jawab
          </a>
          <a
            href="#tim"
            className="text-base font-medium text-gray-800 hover:text-orange-600 transition-colors duration-200 ease-in-out"
          >
            Tim Kami
          </a>
        </nav>
      </div>
      <div>   
      </div>
      
    </header>
  );
};

export default Header;