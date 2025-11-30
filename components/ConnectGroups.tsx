import React from 'react';
import { MapPin, Navigation, MessageCircle } from 'lucide-react';

export const ConnectGroups: React.FC = () => {
  const groups = [
    {
      neighborhood: 'Cascais (Sede)',
      address: 'Praceta Marquês de Soveral 81, 2 andar Dto B, 2755-522 Cascais, Portugal',
      googleMapsQuery: 'Praceta Marquês de Soveral 81, 2755-522 Cascais, Portugal',
      whatsappLink: 'https://api.whatsapp.com/send?phone=+351926295890&text=Ol%C3%A1!%20Eu%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20connect-group%20Cascais'
    },
    {
      neighborhood: 'São Marcos / Cacém',
      address: 'Impasse cidade de Vitória, 7 - 7C, Oeiras, Portugal',
      googleMapsQuery: 'Impasse cidade de Vitória 7 Oeiras Portugal',
      whatsappLink: 'https://api.whatsapp.com/send?phone=+351961859741&text=Ol%C3%A1!%20Eu%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20connect-group%20Cac%C3%A9m'
    },
    {
      neighborhood: 'Alcabideche',
      address: 'Estrada de Manique, 1232, Alcabideche, Portugal',
      googleMapsQuery: 'Estrada de Manique 1232 Alcabideche Portugal',
      whatsappLink: 'https://api.whatsapp.com/send?phone=+351912718484&text=Ol%C3%A1!%20Eu%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20connect-group%20Alcabideche'
    },
    {
      neighborhood: 'Odivelas',
      address: 'Rua Diogo Guilherme Silva Alves Furtado, n. 6 - apto 3A, Odivelas',
      googleMapsQuery: 'Rua Diogo Guilherme Silva Alves Furtado 6 Odivelas',
      whatsappLink: 'https://api.whatsapp.com/send?phone=+351926617884&text=Ol%C3%A1!%20Eu%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20connect-group%20Odivelas'
    },
    {
      neighborhood: 'Aldeia de Juzo',
      address: 'Rua da Pedra d\'agua, 50 - Casa 5, Aldeia de Juzo, Cascais',
      googleMapsQuery: 'Rua da Pedra d agua 50 Aldeia de Juzo Cascais',
      whatsappLink: 'https://api.whatsapp.com/send?phone=+351961338792&text=Ol%C3%A1!%20Eu%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20connect-group%20Aldeia%20de%20Juso'
    },
  ];

  return (
    <section id="connect-groups" className="py-24 bg-bdn-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-b from-bdn-accent/5 to-transparent rounded-bl-[100px] pointer-events-none blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-bdn-accent font-bold tracking-[0.2em] uppercase text-xs mb-3 block">A Igreja nos Lares</span>
          <h2 className="font-display font-black text-4xl md:text-5xl uppercase tracking-tighter text-white mb-6">
            Connect <span className="text-bdn-accent">Groups</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Não fomos criados para viver sozinhos. Pequenos grupos que se reúnem semanalmente em casas para partilhar a vida.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col h-full bg-bdn-dark/40 backdrop-blur-sm border border-white/5 hover:border-bdn-accent/30 rounded-xl p-6 transition-all duration-300 hover:bg-bdn-dark/60 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex-1 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-bdn-accent/10 rounded-lg text-bdn-accent group-hover:bg-bdn-accent group-hover:text-bdn-black transition-colors duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 font-bold uppercase tracking-wider block mb-0.5">Connect Group</span>
                    <h4 className="font-display font-bold text-xl text-white uppercase tracking-tight leading-none">{group.neighborhood}</h4>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                  {group.address}
                </p>
              </div>

              <div className="flex flex-col gap-3">
                 <a 
                  href={group.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white px-4 py-3.5 rounded-lg font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#25d366]/10"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Contactar Líder</span>
                </a>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(group.googleMapsQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-bdn-accent border border-bdn-accent/30 hover:border-bdn-accent px-4 py-3.5 rounded-lg font-bold text-xs uppercase tracking-wider transition-all duration-300"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Ver Localização</span>
                </a>
              </div>
            </div>
          ))}

          {/* Coming Soon Card */}
          <div className="bg-gradient-to-br from-white/5 to-transparent border border-dashed border-white/10 rounded-xl p-6 flex flex-col items-center justify-center text-center text-gray-500 min-h-[200px] hover:border-white/20 transition-colors">
            <div className="p-4 rounded-full bg-white/5 mb-4">
                <MapPin className="w-6 h-6 opacity-40" />
            </div>
            <p className="font-bold uppercase text-xs tracking-[0.2em] text-gray-400 mb-2">Em Breve</p>
            <p className="text-[10px] font-display uppercase tracking-widest opacity-50">Sintra • Estoril • Parede</p>
          </div>
        </div>
      </div>
    </section>
  );
};