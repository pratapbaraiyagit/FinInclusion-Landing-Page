import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import WhyChooseUs from './components/WhyChooseUs';
import PartnerCTA from './components/PartnerCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Stats />
        <WhyChooseUs />
        <PartnerCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
