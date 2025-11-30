import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-bdn-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative order-2 lg:order-1">
             <div className="absolute -inset-4 bg-bdn-accent/20 blur-2xl rounded-full opacity-50"></div>
            
            <div className="relative rounded-lg shadow-2xl border border-bdn-gray overflow-hidden w-full aspect-video z-10">
              <video 
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                controls={false}
              >
                <source src="video.mp4" type="video/mp4" />
                Seu navegador não suporta a tag de vídeo.
              </video>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase tracking-tight">
              Nossa <span className="text-bdn-accent">Identidade</span>
            </h2>
            <div className="w-20 h-2 bg-white mb-6"></div>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              A Bola de Neve Church nasceu em 1999, no Brasil, com um chamado missionário para alcançar jovens, surfistas e a tribo urbana. Hoje, somos uma grande família espalhada pelas nações.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Em <strong className="text-white">Cascais</strong>, mantemos essa essência. Somos uma igreja vibrante, acolhedora e cristocêntrica. Acreditamos no poder transformador do Evangelho e vivemos em comunhão genuína através dos nossos Connect Groups e cultos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};