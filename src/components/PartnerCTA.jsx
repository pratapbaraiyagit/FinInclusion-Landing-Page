import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

const PartnerCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-finova-navy via-finova-blue to-finova-green z-0"></div>
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent z-0"></div>
      
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight max-w-3xl mx-auto">
          Build the Future of Digital Finance With Us
        </h2>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Join our growing network of businesses and financial partners helping make digital finance accessible to everyone.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#" className="bg-finova-green text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-green-500 transition-colors flex items-center justify-center gap-2 shadow-[0_8px_25px_-5px_rgba(0,200,83,0.5)]">
            Become a Partner
            <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-white/20 transition-colors flex items-center justify-center gap-2">
            <MessageCircle className="w-5 h-5" />
            Talk to Our Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default PartnerCTA;
