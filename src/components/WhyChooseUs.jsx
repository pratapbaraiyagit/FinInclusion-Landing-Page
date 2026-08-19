import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, BarChart3, Globe, Handshake } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      title: 'Secure by Design',
      description: 'Enterprise-grade security and reliable transaction infrastructure ensuring your money is always safe.',
      icon: ShieldCheck,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Built for Scale',
      description: 'Technology designed to support growing businesses and large transaction volumes seamlessly.',
      icon: BarChart3,
      bgColor: 'bg-green-50',
      iconColor: 'text-finova-green'
    },
    {
      title: 'Nationwide Accessibility',
      description: 'Solutions designed to reach customers across urban and rural markets without barriers.',
      icon: Globe,
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      title: 'Partner First',
      description: 'Helping businesses grow through technology, financial products and strong partnerships.',
      icon: Handshake,
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600'
    }
  ];

  return (
    <section className="py-24 bg-finova-bg">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-finova-navy mb-4 tracking-tight">
            Why Businesses Choose FinovaPay
          </h2>
          <p className="text-lg text-slate-600">
            We combine innovative technology with deep financial expertise to deliver unparalleled value to our partners.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col items-start"
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.bgColor} ${feature.iconColor} flex items-center justify-center mb-6`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
