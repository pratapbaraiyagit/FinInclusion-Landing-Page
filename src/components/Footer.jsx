import React from 'react';
import { Globe, Mail, Phone, MessageCircle } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-4">
            <div className="mb-8 scale-90 origin-left">
              <Logo />
            </div>
            <p className="text-slate-600 mb-8 max-w-sm leading-relaxed text-sm">
              Building accessible, secure and technology-driven financial solutions for a digitally connected India.
            </p>
            <div className="flex gap-4">
              {[Globe, Mail, Phone, MessageCircle].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-finova-blue hover:border-finova-blue transition-colors shadow-sm">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-bold text-finova-navy mb-6">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Careers', 'Contact'].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-sm text-slate-600 hover:text-finova-blue transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold text-finova-navy mb-6">Services</h4>
            <ul className="space-y-4">
              {['Banking', 'Payments', 'Insurance', 'Credit'].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-sm text-slate-600 hover:text-finova-blue transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold text-finova-navy mb-6">Resources</h4>
            <ul className="space-y-4">
              {['Blog', 'FAQs', 'Support', 'Partner Resources'].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-sm text-slate-600 hover:text-finova-blue transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold text-finova-navy mb-6">Legal</h4>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms & Conditions', 'Security'].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-sm text-slate-600 hover:text-finova-blue transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {currentYear} FinInclusion. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Powered by Financial Technology</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
