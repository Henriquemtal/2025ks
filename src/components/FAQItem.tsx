import React, { useState } from 'react';

export interface FAQItemProps {
  question: string;
  answer: string;
}

export const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-surface-lighter py-5 last:border-none">
      <button 
        className="w-full text-left font-semibold text-lg text-primary-light flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {question}
        <span className="text-secondary text-2xl" aria-hidden="true">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      {isOpen && (
        <div className="pl-3 mt-3 opacity-90 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}