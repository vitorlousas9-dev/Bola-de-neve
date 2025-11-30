import React from 'react';
import { Ministry } from '../types';
import { Heart, Flame, Users, BookOpen } from 'lucide-react';

const ministries: (Ministry & { icon: React.ReactNode })[] = [
  {
    id: 'meraki',
    title: 'Meraki',
    description: 'Ministério de Mulheres. Um tempo precioso de comunhão, cura e fortalecimento da identidade feminina em Deus.',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2669&auto=format&fit=crop',
    icon: <Heart className="w-6 h-6" />
  },
  {
    id: 'flame',
    title: 'Flame',
    description: 'Nosso ministério de jovens e adolescentes. Paixão, energia e propósito para uma geração que não se conforma.',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2670&auto=format&fit=crop',
    icon: <Flame className="w-6 h-6" />
  },
  {
    id: 'celulas',
    title: 'Connect Group',
    description: 'A igreja nas casas. Pequenos grupos onde compartilhamos a vida, a palavra e crescemos juntos em discipulado.',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2670&auto=format&fit=crop',
    icon: <Users className="w-6 h-6" />
  },
  {
    id: 'novavida',
    title: 'Nova Vida',
    description: 'Primeiros passos na fé. Um curso fundamental para quem acabou de chegar ou quer firmar as bases do cristianismo.',
    image: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=2574&auto=format&fit=crop',
    icon: <BookOpen className="w-6 h-6" />
  }
];

export const Ministries: React.FC = () => {
  return (
    <section id="ministerios" className="py-24 bg-bdn-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase tracking-tight mb-2">
              Ministérios
            </h2>
            <div className="w-20 h-2 bg-bdn-accent"></div>
          </div>
          <p className="text-gray-400 max-w-md text-right md:text-left">
            Há um lugar para você servir e ser servido. Conecte-se com um de nossos ministérios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ministries.map((ministry) => (
            <div key={ministry.id} className="group relative h-96 rounded-xl overflow-hidden cursor-pointer">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={ministry.image} 
                  alt={ministry.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end items-start transform transition-transform duration-300">
                <div className="bg-bdn-accent p-3 rounded-lg text-white mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {ministry.icon}
                </div>
                
                <h3 className="font-display font-black text-2xl uppercase text-white mb-2 translate-y-0 group-hover:-translate-y-2 transition-transform duration-300">
                  {ministry.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  {ministry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};