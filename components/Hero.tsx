import React from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center bg-bdn-black">
      {/* Background with advanced overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2673&auto=format&fit=crop" 
          alt="Worship background" 
          className="w-full h-full object-cover object-center opacity-50"
        />
        {/* Radial gradient for focus */}
        <div className="absolute inset-0 bg-gradient-to-t from-bdn-black via-bdn-black/40 to-bdn-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-bdn-black/20 to-bdn-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center gap-8">
        <div className="animate-fade-in-up flex flex-col items-center gap-4">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-bdn-accent shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-bdn-accent animate-pulse"></span>
            Bem-vindo a casa
          </span>
          
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-white uppercase tracking-tighter leading-none drop-shadow-2xl">
            Somos uma <br/> igreja de <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">apaixonados</span>
          </h1>
        </div>
        
        <p className="font-sans text-lg md:text-xl text-gray-300 max-w-2xl font-light leading-relaxed tracking-wide opacity-90">
          Um ambiente de amor, transformação e presença de Deus <br className="hidden md:block"/> para influenciar esta geração.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-bounce">
        <span className="text-[10px] uppercase tracking-widest text-white/50">Scroll</span>
        <ArrowDown className="w-5 h-5 text-white" />
      </div>
    </div>
  );
};