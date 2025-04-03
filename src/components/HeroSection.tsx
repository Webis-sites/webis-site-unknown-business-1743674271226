import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

interface HeroSectionProps {
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  backgroundImage?: string;
}

export default function HeroSection({
  headline = 'סטודיו צילום אופנה מקצועי',
  subheadline = 'מביאים את הסטייל שלך לחיים עם צילומי אופנה ברמה בינלאומית',
  ctaText = 'הזמינו עכשיו',
  backgroundImage = 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80'
}: HeroSectionProps) {
  return (
    <div className="relative h-screen w-full overflow-hidden" dir="rtl">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src={backgroundImage}
          alt="צילום אופנה"
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      {/* Content Container */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 md:px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          {/* Headline with accent underline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            {headline}
            <span className="block h-1 w-32 bg-secondary mx-auto mt-4"></span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {subheadline}
          </p>
          
          {/* CTA Button */}
          <button 
            className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto shadow-lg"
          >
            <FaCalendarAlt className="mr-2" />
            {ctaText}
          </button>
          
          {/* Decorative Element */}
          <div className="mt-12">
            <div className="w-24 h-0.5 bg-secondary/70 mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
}