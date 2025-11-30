import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, PlayCircle } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Agenda', href: '#agenda' },
    { name: 'Connect Groups', href: '#connect-groups' },
    { name: 'Contribua', href: '#contribua' },
    { name: 'Localização', href: '#localizacao' },
  ];

  // Função para rolar suavemente e evitar erro 404
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80; // Compensar altura da navbar
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-bdn-black/95 backdrop-blur-md border-b border-bdn-gray py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            {!logoError ? (
              <img 
                src="logo.png" 
                alt="Bola de Neve Cascais" 
                className="h-12 md:h-16 w-auto object-contain"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="flex items-center gap-2">
                <Globe className="h-8 w-8 text-white" />
                <div className="flex flex-col">
                  <span className="font-display font-black text-xl leading-none tracking-tighter text-white">BOLA DE NEVE</span>
                  <span className="font-display font-bold text-xs tracking-[0.2em] text-bdn-accent">CASCAIS</span>
                </div>
              </div>
            )}
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="font-display text-xs xl:text-sm font-bold uppercase tracking-wider hover:text-bdn-accent transition-colors duration-200 text-white whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://www.youtube.com/@boladenevecascais" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-red-600 text-white hover:bg-red-700 px-5 py-2 rounded-full font-bold font-display text-sm uppercase tracking-wide transition-all duration-300 transform hover:scale-105 whitespace-nowrap flex items-center gap-2"
            >
              <PlayCircle className="w-4 h-4 fill-current" />
              Assista Agora!
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-bdn-accent focus:outline-none"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-bdn-dark border-b border-bdn-gray transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[30rem] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="block px-3 py-3 text-base font-display font-bold uppercase tracking-wider text-gray-300 hover:text-white hover:bg-bdn-gray w-full text-center rounded-md"
            >
              {link.name}
            </a>
          ))}
           <a 
              href="https://www.youtube.com/@boladenevecascais" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 bg-red-600 text-white w-full text-center py-3 rounded-md font-bold font-display uppercase tracking-wide hover:bg-red-700"
            >
              <PlayCircle className="w-5 h-5 fill-current" />
              Assista Agora!
            </a>
        </div>
      </div>
    </nav>
  );
};