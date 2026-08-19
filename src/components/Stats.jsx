import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, ShieldCheck, Handshake, Heart } from 'lucide-react';

const Stats = () => {
  const stats = [
    { value: 'Pan India Presence', label: '600+ Districts', icon: MapPin },
    { value: '50,000+', label: 'Banking Points', icon: Users },
    { value: '100% Secure', label: 'RBI Compliant Solutions', icon: ShieldCheck },
    { value: 'Trusted by', label: 'Banks & NBFCs', icon: Handshake },
    { value: 'Millions of Lives', label: 'Touched', icon: Users }
  ];

  return (
    <section className="relative z-30 bg-finova-navy py-8 lg:py-10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-4 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-4 flex-1 lg:pl-6 first:pl-0 pt-6 lg:pt-0 first:pt-0"
            >
              <div className="text-finova-green">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm md:text-base font-bold text-white leading-tight mb-1">{stat.value}</span>
                <span className="text-xs md:text-sm font-medium text-white/70 leading-tight">{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
