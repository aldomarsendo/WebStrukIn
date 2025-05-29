// src/components/TeamMemberCard.jsx
import React from 'react';


const TeamMemberCard = ({ name, role, avatar, bgColor, blobShapeStyle, speechBubble }) => {
  return (
    <div className="flex flex-col items-center text-center w-full max-w-[240px] sm:max-w-[260px] mx-auto">
      {/* Latar Belakang Blob & Avatar */}
      <div
        className={`relative w-[200px] h-[240px] sm:w-[220px] sm:h-[260px] ${bgColor} shadow-lg mb-4 transform transition-all duration-300 hover:scale-105 flex flex-col items-center pt-6`}
        style={blobShapeStyle} // Menerapkan border-radius kompleks
      >
        <img
          src={avatar || `https://ui-avatars.com/api/?name=${name.replace(/\s/g, "+")}&background=random&color=fff&size=128`} // Fallback ke UI Avatars jika path avatar tidak ada
          alt={name}
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-white shadow-md mb-3"
        />
        <h3 className="text-lg sm:text-xl font-bold text-slate-800 px-2">
          {name}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 px-2 leading-tight">
          {role}
        </p>
        {speechBubble && (
          <div className="absolute -top-2 -right-2 bg-white px-2 py-1 rounded-lg shadow-md text-[10px] text-slate-700 whitespace-nowrap transform rotate-3 max-w-[100px] truncate">
            {speechBubble}
            <div className="absolute right-2 -bottom-1 w-2 h-2 bg-white transform rotate-45"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamMemberCard;