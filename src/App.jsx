import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Gallery from './pages/Gallery';
import Donate from './pages/Donate';
import Volunteer from './pages/Volunteer';
import Contact from './pages/Contact';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedProgramForDonate, setSelectedProgramForDonate] = useState('general');

  const renderCurrentPage = () => {
    switch (activePage) {
      case 'home':
        return (
          <Home 
            setActivePage={setActivePage} 
            setSelectedProgramForDonate={setSelectedProgramForDonate} 
          />
        );
      case 'about':
        return <About setActivePage={setActivePage} />;
      case 'programs':
        return (
          <Programs 
            setActivePage={setActivePage} 
            setSelectedProgramForDonate={setSelectedProgramForDonate} 
          />
        );
      case 'gallery':
        return <Gallery />;
      case 'donate':
        return <Donate preselectedProgram={selectedProgramForDonate} />;
      case 'volunteer':
        return <Volunteer />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <Home 
            setActivePage={setActivePage} 
            setSelectedProgramForDonate={setSelectedProgramForDonate} 
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8F0] text-[#2C1E16] selection:bg-[#E86A17] selection:text-white">
      {/* Sticky Header */}
      <Header activePage={activePage} setActivePage={setActivePage} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer setActivePage={setActivePage} />
    </div>
  );
}
