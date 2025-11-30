import React from 'react';
import { Instagram, Facebook, Mail, MapPin, Youtube, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="localizacao" className="bg-black pt-20 pb-10 border-t border-bdn-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          
          {/* Contact Info */}
          <div>
            <h3 className="font-display font-black text-3xl uppercase tracking-tight text-white mb-8">
              Bola de Neve <span className="text-bdn-accent">Cascais</span>
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="mt-1 p-2 bg-bdn-gray rounded-full">
                  <MapPin className="w-5 h-5 text-bdn-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wide">Endereço</h4>
                  <p className="text-gray-400">Estr. de Manique 1232<br/>2645-550 Alcabideche, Portugal</p>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Estr.+de+Manique+1232,+2645-550+Alcabideche" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="text-sm text-bdn-accent hover:underline mt-1 inline-block"
                  >
                    Ver no Google Maps
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1 p-2 bg-bdn-gray rounded-full">
                  <Mail className="w-5 h-5 text-bdn-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wide">Email</h4>
                  <a href="mailto:comunicacao.cascais@boladeneve.com" className="text-gray-400 hover:text-white transition-colors">
                    comunicacao.cascais@boladeneve.com
                  </a>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 mt-10">
              {[
                { icon: <Instagram className="w-6 h-6" />, href: "https://www.instagram.com/boladenevecascais/" },
                { icon: <Facebook className="w-6 h-6" />, href: "https://web.facebook.com/boladenevecascais?locale=pt_PT" },
                { icon: <Youtube className="w-6 h-6" />, href: "https://www.youtube.com/@boladenevecascais" },
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-bdn-gray flex items-center justify-center text-white hover:bg-bdn-accent hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="h-[300px] md:h-full bg-bdn-gray rounded-xl overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
            <iframe 
              src="https://maps.google.com/maps?q=Estr.+de+Manique+1232,+2645-550+Alcabideche&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Map"
            ></iframe>
          </div>
        </div>

        <div className="border-t border-bdn-gray pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Bola de Neve Cascais. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">Feito com <Heart className="w-3 h-3 inline text-red-500 mx-1" /> para o Reino</p>
        </div>
      </div>
    </footer>
  );
};