import React from 'react';
import { ArrowRight, ShieldCheck, Smartphone, TrendingUp, Building2, Wallet, Umbrella, CreditCard, Users, Shield, Landmark } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative pt-28 pb-32 lg:pt-32 lg:pb-[235px] overflow-hidden bg-white">
      {/* Dramatic Blue Sweeping Curve Background (Desktop) */}
      <div className="hidden lg:block absolute inset-0 bg-finova-blue z-0"
        style={{ clipPath: 'ellipse(80% 120% at 120% 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      </div>

      {/* Dramatic Blue Sweeping Curve Background (Tablet/Mobile) */}
      <div className="block lg:hidden absolute inset-0 bg-finova-blue z-0 top-[45%] sm:top-[50%]"
        style={{ clipPath: 'ellipse(150% 100% at 100% 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-2xl lg:max-w-none xl:max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-[3.4rem] font-bold leading-tight mb-6 tracking-tight">
              <span className="text-finova-navy md:whitespace-nowrap">Empowering Communities.</span><br />
              <span className="text-finova-green">Enriching Lives.</span>
            </h1>

            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
              Driving financial inclusion by providing accessible banking, digital payments, insurance, and credit solutions to every corner of Bharat.
            </p>

            {/* Trust Indicators (Moved Above Buttons) */}
            <div className="flex flex-wrap xl:flex-nowrap gap-x-4 lg:gap-x-6 gap-y-4 mb-10 w-full">
              {[
                { icon: Users, label: 'Reaching', sub: 'Every Citizen' },
                { icon: ShieldCheck, label: 'Secure', sub: 'Transactions' },
                { icon: Smartphone, label: 'Digital', sub: 'First' },
                { icon: TrendingUp, label: 'Inclusive', sub: 'Growth' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 lg:gap-3">
                  <div className="w-7 h-7 lg:w-8 lg:h-8 flex items-center justify-center text-finova-green shrink-0">
                    <item.icon className="w-6 h-6 lg:w-7 lg:h-7 stroke-[1.5]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] lg:text-xs font-semibold text-slate-700 leading-tight whitespace-nowrap">{item.label}</span>
                    <span className="text-[11px] lg:text-xs font-semibold text-slate-700 leading-tight whitespace-nowrap">{item.sub}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="bg-finova-navy text-white px-8 py-3.5 rounded-md text-sm font-semibold hover:bg-blue-900 transition-all flex items-center justify-center gap-2">
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#" className="bg-white text-finova-navy border border-finova-navy px-8 py-3.5 rounded-md text-sm font-semibold hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                Become a Partner
                <Users className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Visual Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[650px] w-full flex items-center justify-center mt-12 lg:mt-0"
          >
            {/* Unified wrapper for precise absolute anchoring on a circle */}
            <div className="relative w-full max-w-[480px] aspect-square mt-8 lg:mt-0">

              {/* Faint Concentric Rings Behind Image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-full border border-white/20 z-0 pointer-events-none"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] rounded-full border border-white/10 border-dashed z-0 pointer-events-none"></div>

              {/* Main Circular Image */}
              <div className="absolute inset-0 rounded-full overflow-hidden border-[6px] border-white/30 shadow-[0_20px_50px_rgba(0,0,0,0.2)] z-10 bg-finova-navy">
                <img
                  src="/hero-image.jpg"
                  alt="FinovaPay Indian Customers"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>

              {/* Floating Bubbles perfectly aligned to the orbit (Radius 55%) */}
              {/* Banking: Top Right */}
              <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute z-20 flex flex-col items-center -translate-x-1/2 -translate-y-1/2"
                style={{ top: '5%', left: '85%' }}>
                <div className="w-16 h-16 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center justify-center text-finova-navy border border-slate-100 mb-0">
                  <Landmark className="w-7 h-7 stroke-[1.5]" />
                </div>
                <span className="text-[11px] font-bold text-slate-700 bg-white px-4 py-1 rounded-full shadow-md border border-slate-100 text-center leading-tight -mt-3 relative z-10">Banking</span>
              </motion.div>

              {/* Credit Access: Middle Left (Mirrored to Digital Payments) */}
              <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute z-20 flex flex-col items-center -translate-x-1/2 -translate-y-1/2"
                style={{ top: '10%', left: '-5%' }}>
                <div className="w-16 h-16 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center justify-center text-finova-green border border-slate-100 mb-0">
                  <CreditCard className="w-7 h-7 stroke-[1.5]" />
                </div>
                <span className="text-[11px] font-bold text-slate-700 bg-white px-4 py-1 rounded-full shadow-md border border-slate-100 text-center leading-tight -mt-3 relative z-10">Credit<br />Access</span>
              </motion.div>

              {/* AEPS & Micro ATM: Bottom Left (Mirrored to Insurance) */}
              <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute z-20 flex flex-col items-center -translate-x-1/2 -translate-y-1/2"
                style={{ top: '60%', left: '-22%' }}>
                <div className="w-16 h-16 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center justify-center text-finova-blue border border-slate-100 mb-0">
                  <Smartphone className="w-7 h-7 stroke-[1.5]" />
                </div>
                <span className="text-[11px] font-bold text-slate-700 bg-white px-4 py-1 rounded-full shadow-md border border-slate-100 text-center leading-tight -mt-3 relative z-10">AEPS &<br />Micro ATM</span>
              </motion.div>

              {/* Digital Payments: Middle Right */}
              <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute z-20 flex flex-col items-center -translate-x-1/2 -translate-y-1/2"
                style={{ top: '40%', left: '105%' }}>
                <div className="w-16 h-16 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center justify-center text-finova-blue border border-slate-100 mb-0">
                  <Smartphone className="w-7 h-7 stroke-[1.5]" />
                </div>
                <span className="text-[11px] font-bold text-slate-700 bg-white px-4 py-1 rounded-full shadow-md border border-slate-100 text-center leading-tight -mt-3 relative z-10">Digital<br />Payments</span>
              </motion.div>

              {/* Insurance: Bottom Right */}
              <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                className="absolute z-20 flex flex-col items-center -translate-x-1/2 -translate-y-1/2"
                style={{ top: '75%', left: '95%' }}>
                <div className="w-16 h-16 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center justify-center text-finova-green border border-slate-100 mb-0">
                  <Shield className="w-7 h-7 stroke-[1.5]" />
                </div>
                <span className="text-[11px] font-bold text-slate-700 bg-white px-4 py-1 rounded-full shadow-md border border-slate-100 text-center leading-tight -mt-3 relative z-10">Insurance</span>
              </motion.div>

              {/* Overlapping Bottom Card */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-12 -left-2 md:-left-8 w-[95%] md:w-[480px] bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.12)] p-4 md:p-5 flex items-center gap-4 z-30 border border-slate-100"
              >
                <div className="w-12 h-12 flex-shrink-0 text-finova-green flex items-center justify-center bg-finova-green/10 rounded-full">
                  <Users className="w-6 h-6" />
                </div>
                <p className="text-sm md:text-[15px] font-bold text-slate-800 leading-snug">
                  Building a financially inclusive India where no one is left behind.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
