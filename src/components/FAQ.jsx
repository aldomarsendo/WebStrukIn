// src/components/FAQ.jsx
import React from 'react';
import FAQItem from './FAQItem'; // Impor sub-komponen

// Data untuk FAQ items (bisa ditaruh di sini atau diimpor)

const faqData = [
  // ... (salin data faqData dari atas) ...
  {
    question: "Apa itu Struk.in?",
    answer: "Struk.in adalah aplikasi inovatif yang dirancang untuk membantu Anda mengelola struk belanjaan secara digital dengan mudah. Anda dapat memindai struk fisik, dan aplikasi akan otomatis mengenali detail item, harga, serta total belanjaan. Fitur utama kami meliputi pembagian tagihan (split bill) yang praktis dengan teman, pencatatan pengeluaran otomatis, dan penyimpanan struk yang aman dan terorganisir."
  },
  {
    question: "Struk apa aja yang bisa dipindai Struk.in?",
    answer: "Struk.in dapat memindai sebagian besar jenis struk belanja dari berbagai tempat seperti supermarket, restoran, kafe, toko ritel, dan lainnya. Selama struk tersebut memiliki format yang cukup jelas dengan detail item, harga per item, dan total yang terbaca, sistem kami akan berusaha untuk mengenalinya. Kami terus meningkatkan kemampuan OCR kami untuk mendukung lebih banyak format struk."
  },
  {
    question: "Harus login dulu gak sih?",
    answer: "Ya, untuk dapat menggunakan fitur-fitur Struk.in secara penuh, termasuk menyimpan riwayat struk Anda secara aman di cloud dan menggunakan fitur split bill, Anda perlu membuat akun dan login. Ini memastikan data Anda terlindungi dan dapat diakses dari berbagai perangkat."
  },
  {
    question: "Bisa dipakai offline gak?",
    answer: "Untuk fitur inti seperti pemindaian struk (OCR) dan sinkronisasi data antar perangkat atau dengan teman Anda untuk split bill, Struk.in memerlukan koneksi internet. Namun, Anda mungkin masih bisa melihat riwayat struk yang sudah tersimpan sebelumnya saat offline, tergantung pada cache aplikasi di perangkat Anda."
  },
  {
    question: "Sistem bagi tagihannya gimana?",
    answer: "Sistem bagi tagihan kami sangat fleksibel. Setelah struk terpindai, Anda bisa memilih item mana saja yang ingin dibagi dan dengan siapa saja. Anda dapat membagi rata, memasukkan nominal berbeda per orang, atau menandai item tertentu untuk orang tertentu. Semua perhitungan dilakukan otomatis."
  },
  {
    question: "Bisa lihat histori struk sebelumnya?",
    answer: "Tentu saja! Semua struk yang berhasil Anda pindai dan simpan akan tercatat dalam histori akun Anda. Anda bisa dengan mudah mencari, melihat detail, dan mengelola struk-struk lama kapan pun Anda butuhkan."
  },
  {
    question: "Gimana kalau hasil scan-nya gak akurat?",
    answer: "Kami berusaha memberikan hasil scan seakurat mungkin. Namun, jika ada ketidakakuratan, Struk.in menyediakan fitur untuk mengedit detail item, harga, jumlah, atau nama toko secara manual setelah proses pemindaian. Jadi, Anda selalu bisa memastikan datanya benar."
  },
  {
    question: "Bisa kasih nama tiap transaksi?",
    answer: "Ya, Anda bisa memberikan nama atau label khusus untuk setiap transaksi atau struk yang Anda simpan. Ini akan memudahkan Anda dalam mengorganisir dan mencari transaksi tertentu di kemudian hari, misalnya 'Makan Malam Tim A' atau 'Belanja Bulanan Maret'."
  }
];

const SpeechBubble = ({ avatarText, avatarBg, name, message, positionClasses, avatarSide = 'left' }) => (
  <div className={`absolute z-20 max-w-[230px] sm:max-w-xs ${positionClasses}`}>
    <div className={`flex items-end space-x-2 ${avatarSide === 'right' ? 'flex-row-reverse space-x-reverse' : ''}`}>
      <div className={`w-10 h-10 sm:w-12 sm:h-12 ${avatarBg} rounded-full flex items-center justify-center text-white text-lg sm:text-xl font-bold shadow-md border-2 border-opacity-50 border-white flex-shrink-0`}>
        {avatarText}
      </div>
      <div className="bg-white p-3 sm:p-4 rounded-xl shadow-xl relative">
        <p className="text-xs sm:text-sm font-semibold text-slate-700 text-left">{name}</p>
        <p className="text-[10px] sm:text-xs text-slate-500 text-left">{message}</p>
        <div className={`absolute ${avatarSide === 'left' ? 'left-3' : 'right-3'} -bottom-[7px] w-3.5 h-3.5 bg-white transform rotate-45`}></div>
      </div>
    </div>
  </div>
);

const FAQ = () => {
  return (
    <section id="tanya-jawab" className="bg-white py-16 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> {/* z-10 agar konten di atas grafis Q-mark */}

        {/* Speech Bubbles Atas */}
        <SpeechBubble
          avatarText="BA"
          avatarBg="bg-sky-400"
          name="Bagus Alhan"
          message="Kak cara pakainya gimana sih?"
          positionClasses="top-0 md:top-4 -left-4 sm:left-0 md:-left-8 lg:-left-12 transform -rotate-3"
        />
        <SpeechBubble
          avatarText="FA"
          avatarBg="bg-orange-400"
          name="Fikri Abiyyu"
          message="Struk yang bisa dipakai apa aja ya?"
          positionClasses="top-4 md:top-8 -right-4 sm:right-0 md:-right-8 lg:-right-12 transform rotate-3"
          avatarSide="right"
        />

        {/* Judul dan Subjudul FAQ */}
        <div className="text-center mb-12 md:mb-16 pt-12 md:pt-16"> {/* Padding atas agar tidak tertutup bubble */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Yang Sering Ditanyain
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            FAQ ini siap menjawab segala rasa penasaranmu tentang fitur dan cara pakai aplikasi Struk.in.
          </p>
        </div>

        {/* Daftar FAQ */}
        <div className="max-w-3xl mx-auto relative z-10"> {/* z-10 agar FAQ list di atas grafis Q-mark dan bubble bawah */}
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        {/* Grafis Tanda Tanya Dekoratif di Kiri Bawah */}
        <div className="absolute -bottom-16 -left-24 md:-bottom-20 md:-left-32 w-48 h-64 md:w-60 md:h-72 -z-0 opacity-70 transform -rotate-[20deg]">
          {/* Ganti dengan SVG atau <img> untuk grafis tanda tanya sebenarnya */}
          <div className="relative w-full h-full">
            <div className="absolute bottom-0 left-0 w-[70%] h-[70%] bg-purple-300 rounded-full blur-sm"></div>
            <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-pink-300 rounded-full blur-sm"></div>
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl font-bold text-purple-400 opacity-60">?</span>
          </div>
        </div>

        {/* Speech Bubble Redian Basigio di Kanan Bawah */}
        <SpeechBubble
          avatarText="RB"
          avatarBg="bg-red-400"
          name="Redian Basigio"
          message="Eh ini aplikasinya bisa offline gak?"
          positionClasses="bottom-4 md:bottom-8 -right-4 sm:right-0 md:-right-8 lg:-right-12 transform rotate-2"
          avatarSide="right"
        />
      </div>
    </section>
  );
};

export default FAQ;