// src/components/Team.jsx
import React from 'react';
import TeamMemberCard from './TeamMemberCard'; // Impor sub-komponen

// Salin 'teamData' dari atas ke sini, atau impor jika Anda meletakkannya di file terpisah.
const teamData = [
  { name: "Bagus Alhan", role: "Product Owner & Mobile Developer", avatar: "https://i.pravatar.cc/150?u=bagus", bgColor: "bg-sky-100", blobShapeStyle: { borderRadius: '73% 27% 56% 44% / 54% 30% 70% 46%' }, speechBubble: "Progres tim sampai mana yaa?" },
  { name: "Salsabila Nurhalimah", role: "Assistant Scrum Master & Frontend Developer", avatar: "https://i.pravatar.cc/150?u=salsabila", bgColor: "bg-emerald-100", blobShapeStyle: { borderRadius: '27% 73% 42% 58% / 62% 55% 45% 38%' }, speechBubble: "Kerjain task yg mana dulu nih?" },
  { name: "Muhammad Fikri A.", role: "Frontend Developer", avatar: "https://i.pravatar.cc/150?u=fikri", bgColor: "bg-amber-100", blobShapeStyle: { borderRadius: '51% 49% 52% 48% / 68% 60% 40% 32%' }, speechBubble: "Ada revisi design lagi?" },
  { name: "Aldo Mareando", role: "UI/UX Designer", avatar: "https://i.pravatar.cc/150?u=aldo", bgColor: "bg-indigo-100", blobShapeStyle: { borderRadius: '64% 36% 60% 40% / 43% 52% 48% 57%' }, speechBubble: "Peace!" },
  { name: "Redian Rasigio I.P.", role: "Backend Developer", avatar: "https://i.pravatar.cc/150?u=redian", bgColor: "bg-purple-100", blobShapeStyle: { borderRadius: '33% 67% 70% 30% / 30% 70% 30% 70%' }, speechBubble: "API ready!" },
  { name: "Tiara Vani P.H.", role: "Backend Developer", avatar: "https://i.pravatar.cc/150?u=tiara", bgColor: "bg-pink-100", blobShapeStyle: { borderRadius: '70% 30% 40% 60% / 60% 40% 60% 40%' }, speechBubble: "Database aman." },
  { name: "Muhammad Renata M.P", role: "UI/UX Designer", avatar: "https://i.pravatar.cc/150?u=renata", bgColor: "bg-rose-100", blobShapeStyle: { borderRadius: '40% 60% 60% 40% / 70% 70% 30% 30%' }, speechBubble: "Mockup done." }
];


// Placeholder untuk ikon dekoratif (ganti dengan SVG atau <img> Anda)
const GameControllerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 md:w-28 md:h-28 text-indigo-400 opacity-70" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.78 11.2L22.5 13.92l-2.33 2.33a2.5 2.5 0 01-3.54 0L13.5 13.12V16H11V8h1.09l2.05-2.05a2.5 2.5 0 013.54 0l2.33 2.33A2.5 2.5 0 0119.78 11.2zM4.22 11.2L1.5 13.92l2.33 2.33a2.5 2.5 0 003.54 0L10.5 13.12V16H13V8h-1.09l-2.05-2.05a2.5 2.5 0 00-3.54 0L4.22 8.3A2.5 2.5 0 004.22 11.2zM12 12a2 2 0 100-4 2 2 0 000 4z"/>
  </svg>
);

const HeadphonesIcon = () => (
 <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 md:w-28 md:h-28 text-pink-400 opacity-70" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12v3a2 2 0 002 2h1a1 1 0 001-1v-2a6 6 0 1112 0v2a1 1 0 001 1h1a2 2 0 002-2v-3C22 6.477 17.523 2 12 2zM8 13a1 1 0 011-1h.01a1 1 0 110 2H9a1 1 0 01-1-1zm7 0a1 1 0 00-1-1h-.01a1 1 0 100 2H15a1 1 0 001-1z" clipRule="evenodd" />
  </svg>
);


const Team = () => {
  // Pisahkan tim menjadi baris atas (4) dan baris bawah (3) untuk tata letak
  const topRowTeam = teamData.slice(0, 4);
  const bottomRowTeam = teamData.slice(4);

  return (
    <section id="tim" className="bg-[#FFF9F0] py-16 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Ikon Dekoratif */}
        <div className="absolute top-[20%] -left-8 sm:left-0 md:left-5 lg:left-10 transform -translate-y-1/2 -rotate-12 -z-0">
          <GameControllerIcon />
        </div>
        <div className="absolute top-[40%] -right-8 sm:right-0 md:right-5 lg:right-10 transform -translate-y-1/2 rotate-12 -z-0">
          <HeadphonesIcon />
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-12 md:mb-16 relative z-10">
          Tim Kami
        </h2>

        {/* Baris Atas (4 Anggota) */}
        <div className="flex flex-wrap justify-center items-start gap-x-6 gap-y-16 md:gap-x-8 lg:gap-x-10 mb-10 md:mb-16 relative z-10">
          {topRowTeam.map((member) => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </div>

        {/* Baris Bawah (3 Anggota) - dipusatkan */}
        <div className="flex flex-wrap justify-center items-start gap-x-6 gap-y-16 md:gap-x-8 lg:gap-x-10 relative z-10">
          {bottomRowTeam.map((member) => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;