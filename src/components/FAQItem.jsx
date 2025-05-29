// src/components/FAQItem.jsx
import React, { useState } from 'react';

// Impor ikon chevron (misalnya dari heroicons)
// npm install @heroicons/react
import { ChevronDownIcon } from '@heroicons/react/24/solid'; // atau outline

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-lg mb-3 md:mb-4 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left p-4 md:p-5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-opacity-75 rounded-lg"
        aria-expanded={isOpen}
      >
        <span className="text-base md:text-lg font-semibold text-slate-700 group-hover:text-orange-600">
          {question}
        </span>
        <ChevronDownIcon
          className={`w-5 h-5 md:w-6 md:h-6 text-slate-500 group-hover:text-orange-500 transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="p-4 md:p-5 border-t border-slate-200 text-sm md:text-base text-slate-600 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQItem;