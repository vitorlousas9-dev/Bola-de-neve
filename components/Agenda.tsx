import React from 'react';
import { Calendar, Clock, MapPin, Laptop, Activity, Music, Heart, Users } from 'lucide-react';

interface Event {
  time: string;
  title: string;
  detail?: string;
  icon?: React.ReactNode;
}

interface DaySchedule {
  day: string;
  events: Event[];
  highlight?: boolean;
}

const schedule: DaySchedule[] = [
  {
    day: 'Segunda a Quinta',
    events: [
      { 
        time: '06:00', 
        title: 'Encontro dos Homens', 
        detail: 'Online',
        icon: <Laptop className="w-3 h-3" />
      }
    ]
  },
  {
    day: 'Terça-feira',
    events: [
      { 
        time: '19:30', 
        title: 'Connect Group', 
        detail: 'Aldeia de Juzo',
        icon: <Users className="w-3 h-3" />
      },
      { 
        time: '20:30', 
        title: 'Connect Group', 
        detail: 'Cascais (Sede)',
        icon: <Users className="w-3 h-3" />
      }
    ]
  },
  {
    day: 'Quarta-feira',
    events: [
      { 
        time: '06:00', 
        title: 'Jiu-Jitsu',
        icon: <Activity className="w-3 h-3" />
      },
      { 
        time: '17:30', 
        title: 'Aula de Dança', 
        detail: 'Crianças (3+ anos)',
        icon: <Music className="w-3 h-3" />
      },
      { 
        time: '18:30', 
        title: 'Aula de Dança', 
        detail: 'Mulheres',
        icon: <Music className="w-3 h-3" />
      },
      { 
        time: '20:00', 
        title: 'Torre de Oração', 
        detail: 'Mulheres (Presencial)',
        icon: <Heart className="w-3 h-3" />
      }
    ]
  },
  {
    day: 'Quinta-feira',
    events: [
      { 
        time: '21:00', 
        title: 'Cá Entre Nós', 
        detail: 'Mulheres (Online)',
        icon: <Laptop className="w-3 h-3" />
      }
    ]
  },
  {
    day: 'Sexta-feira',
    events: [
      { 
        time: '06:00', 
        title: 'Jiu-Jitsu',
        icon: <Activity className="w-3 h-3" />
      },
      { 
        time: '20:00', 
        title: 'Encontro dos Homens', 
        detail: 'Presencial',
        icon: <Users className="w-3 h-3" />
      }
    ]
  },
  {
    day: 'Sábado',
    events: [
      { 
        time: '09:00', 
        title: 'Jiu-Jitsu',
        icon: <Activity className="w-3 h-3" />
      }
    ]
  },
  {
    day: 'Domingo',
    highlight: true,
    events: [
      { 
        time: '10:00', 
        title: 'Culto de Celebração', 
        detail: 'Venha adorar a Deus conosco!',
        icon: <Calendar className="w-3 h-3" />
      }
    ]
  }
];

export const Agenda: React.FC = () => {
  return (
    <section id="agenda" className="py-24 bg-bdn-dark border-y border-white/5 relative overflow-hidden">
       {/* Decorative subtle background */}
       <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-bdn-dark to-bdn-dark opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-bdn-accent font-bold tracking-[0.2em] uppercase text-xs mb-3 block animate-fade-in-up">Semana</span>
          <h2 className="font-display font-black text-4xl md:text-5xl uppercase tracking-tighter text-white mb-4">
            Agenda Semanal
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-bdn-accent to-transparent mx-auto opacity-70"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {schedule.map((item, idx) => (
            <div 
              key={idx} 
              className={`
                group relative overflow-hidden rounded-xl transition-all duration-500
                ${item.highlight 
                  ? 'bg-gradient-to-br from-bdn-gray via-bdn-black to-bdn-black border border-bdn-accent/40 shadow-[0_0_40px_-10px_rgba(245,158,11,0.15)]' 
                  : 'bg-bdn-black/40 backdrop-blur-sm border border-white/5 hover:border-white/10 hover:bg-bdn-black/60'}
              `}
            >
              {/* Highlight Glow Effect */}
              {item.highlight && <div className="absolute top-0 left-0 w-full h-1 bg-bdn-accent shadow-[0_0_20px_2px_rgba(245,158,11,0.5)]"></div>}

              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                  <h3 className={`font-display font-black text-xl uppercase tracking-wider ${item.highlight ? 'text-white' : 'text-gray-200'}`}>
                    {item.day}
                  </h3>
                  <div className={`p-2 rounded-lg ${item.highlight ? 'bg-bdn-accent text-bdn-black' : 'bg-white/5 text-gray-400'}`}>
                    <Calendar className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-6">
                  {item.events.map((event, eventIdx) => (
                    <div key={eventIdx} className="group/event relative pl-4 border-l-2 border-white/10 hover:border-bdn-accent transition-colors duration-300">
                      <div className="flex flex-col gap-1">
                        <span className="font-mono text-xs font-bold text-bdn-accent tracking-wider">
                          {event.time}
                        </span>
                        <h4 className="font-bold text-white text-base leading-snug group-hover/event:text-bdn-accent transition-colors">
                          {event.title}
                        </h4>
                        {event.detail && (
                          <div className="flex items-center gap-2 mt-1 text-gray-500 text-xs font-medium">
                            {event.icon}
                            <span>{event.detail}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
           <a 
             href="https://www.instagram.com/boladenevecascais/" 
             target="_blank"
             rel="noreferrer"
             className="inline-flex items-center space-x-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-bdn-accent/50 text-gray-300 hover:text-white px-8 py-4 rounded-full font-bold uppercase text-xs tracking-[0.15em] transition-all duration-300 backdrop-blur-md"
           >
             <MapPin className="w-4 h-4 text-bdn-accent" />
             <span>Confirmar atualizações no Instagram</span>
           </a>
        </div>
      </div>
    </section>
  );
};