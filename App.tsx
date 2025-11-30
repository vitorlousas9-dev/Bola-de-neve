import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Agenda } from './components/Agenda';
import { ConnectGroups } from './components/ConnectGroups';
import { Giving } from './components/Giving';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-bdn-black text-white selection:bg-bdn-accent selection:text-white scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Agenda />
        <ConnectGroups />
        <Giving />
      </main>
      <Footer />
    </div>
  );
};

export default App;