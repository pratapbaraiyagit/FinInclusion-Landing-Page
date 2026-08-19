import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, Smartphone, Shield, HandCoins, Users, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Banking Services',
      description: 'Easy account opening, cash deposit/withdrawal, AEPS, and more.',
      icon: Landmark,
      color: 'text-finova-navy',
      bg: 'bg-finova-navy/10'
    },
    {
      id: 2,
      title: 'Digital Payments',
      description: 'UPI, QR, bill payments, recharges and secure transactions.',
      icon: Smartphone,
      color: 'text-finova-green',
      bg: 'bg-finova-green/10'
    },
    {
      id: 3,
      title: 'Insurance Solutions',
      description: 'Life, health, accident and crop insurance for a secure tomorrow.',
      icon: Shield,
      color: 'text-finova-navy',
      bg: 'bg-finova-navy/10'
    },
    {
      id: 4,
      title: 'Credit Access',
      description: 'Micro loans and credit solutions for individuals and businesses.',
      icon: HandCoins,
      color: 'text-finova-green',
      bg: 'bg-finova-green/10'
    },
    {
      id: 5,
      title: 'Business Correspondent',
      description: 'Join our network and become a Banking Point in your community.',
      icon: Users,
      color: 'text-finova-navy',
      bg: 'bg-finova-navy/10'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="relative z-40 px-4 md:px-8 max-w-[1440px] mx-auto -mt-20 md:-mt-24 lg:-mt-[240px]">
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px" }}
        className="bg-white rounded-2xl shadow-xl border border-slate-100 flex flex-col lg:flex-row overflow-hidden divide-y lg:divide-y-0 lg:divide-x divide-slate-100"
      >
        {services.map((service) => (
          <motion.div 
            key={service.id} 
            variants={item}
            className="flex-1 px-6 pt-6 pb-4 hover:bg-slate-50 transition-colors cursor-pointer group flex flex-col"
          >
            <div className="flex items-start gap-4 mb-2">
              <div className={`w-12 h-12 rounded-full ${service.bg} flex-shrink-0 flex items-center justify-center`}>
                <service.icon className={`w-6 h-6 ${service.color}`} />
              </div>
              <div>
                <h3 className="text-sm sm:text-[15px] xl:text-base font-bold text-slate-800 mb-1 leading-tight whitespace-nowrap group-hover:text-finova-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
            
            <div className="mt-auto relative h-4 w-full">
              <ArrowRight className={`absolute top-0 left-4 group-hover:left-[64px] w-4 h-4 ${service.color} opacity-40 group-hover:opacity-100 transition-all duration-300`} />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
