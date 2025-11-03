import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import UnifiedSections from './components/UnifiedSections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white text-black scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <UnifiedSections />
      </main>
      <Footer />

      {/* Floating Book Now button (Chat text changed to Book Now) */}
      <a
        href="https://cal.com/velodent-ogbkfv/20min"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 inline-flex items-center rounded-full border border-black bg-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-black hover:text-white transition-colors"
      >
        Book Now
      </a>
    </div>
  );
}

export default App;
