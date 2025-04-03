import React from 'react';

export interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  initials: string;
  colorClass: string;
}

export const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role, initials, colorClass }) => (
  <div className="bg-surface rounded-2xl p-8 border border-white/10 shadow-lg transition-all hover:translate-y-[-6px]">
    <blockquote className="italic mb-6 text-white/95 text-lg">{quote}</blockquote>
    <div className="flex items-center gap-3">
      <span className={`w-11 h-11 rounded-full ${colorClass} flex items-center justify-center font-semibold border-2 border-surface-lighter`}>
        {initials}
      </span>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-sm opacity-70">{role}</p>
      </div>
    </div>
  </div>
);