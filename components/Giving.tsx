import React from 'react';
import { Copy, Landmark, CreditCard, CheckCircle2 } from 'lucide-react';

export const Giving: React.FC = () => {
  const [copied, setCopied] = React.useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="contribua" className="py-24 bg-bdn-gray relative overflow-hidden">
      <div className="absolute inset-0 bg-bdn-black/50"></div>
      
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display font-black text-4xl md:text-5xl uppercase tracking-tighter text-white mb-6">
            Dízimos e <span className="text-bdn-accent">Ofertas</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            "Deus ama ao que dá com alegria." <br/>
            <span className="text-sm font-bold text-gray-500 uppercase tracking-widest mt-2 block">(2 Coríntios 9:7)</span>
          </p>
        </div>

        <div className="flex justify-center">
          {/* Premium Card Design */}
          <div className="w-full max-w-2xl transform transition-all hover:scale-[1.01] duration-500">
            <div className="bg-gradient-to-br from-[#1a1a1a] via-[#111] to-black rounded-2xl border border-white/10 p-8 md:p-12 shadow-2xl relative overflow-hidden group">
               {/* Glossy Effect */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-bdn-accent/5 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none"></div>
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-bdn-accent via-yellow-200 to-bdn-accent opacity-50"></div>
               
               <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10 border-b border-white/5 pb-8">
                  <div className="flex items-center gap-5">
                    <div className="p-3.5 bg-gradient-to-br from-bdn-gray to-bdn-black rounded-xl border border-white/10 shadow-inner">
                        <Landmark className="w-8 h-8 text-bdn-accent" />
                    </div>
                    <div>
                        <h3 className="font-display font-bold text-2xl uppercase tracking-wider text-white">Dados Bancários</h3>
                        <p className="text-gray-500 text-sm font-medium tracking-wide">Transferência Nacional e Internacional</p>
                    </div>
                  </div>
                  <CreditCard className="w-10 h-10 text-white/10 hidden md:block" />
               </div>

               <div className="space-y-8">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div>
                         <p className="text-bdn-accent text-[10px] uppercase tracking-[0.2em] mb-2 font-bold opacity-80">Beneficiário</p>
                         <p className="font-bold text-white text-base md:text-lg tracking-wide leading-tight">IGREJA EVANGELICA <br/> BOLA DE NEVE</p>
                     </div>
                     
                     <div>
                        <p className="text-bdn-accent text-[10px] uppercase tracking-[0.2em] mb-2 font-bold opacity-80">Banco</p>
                        <p className="text-white font-medium text-lg">BPI</p>
                     </div>
                   </div>

                   <div className="bg-black/30 p-6 rounded-xl border border-white/5 hover:border-bdn-accent/20 transition-all group/iban relative">
                      <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] mb-3 font-bold">IBAN</p>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <code className="text-white font-mono font-bold text-lg md:text-2xl tracking-wider drop-shadow-md">PT50 0010 0000 5533 4350 0015 6</code>
                          <button 
                            onClick={() => copyToClipboard("PT50001000005533435000156", "iban")} 
                            className="self-start sm:self-center px-4 py-2 bg-white/5 hover:bg-bdn-accent hover:text-bdn-black rounded-lg transition-all flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400" 
                          >
                            {copied === "iban" ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                            <span>{copied === "iban" ? "Copiado" : "Copiar"}</span>
                          </button>
                      </div>
                   </div>

                   <div className="bg-black/30 p-6 rounded-xl border border-white/5 hover:border-bdn-accent/20 transition-all group/swift">
                       <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] mb-3 font-bold">SWIFT / BIC</p>
                       <div className="flex items-center justify-between gap-4">
                          <p className="text-white font-mono text-lg md:text-xl tracking-wider">BBPIPTPL</p>
                          <button 
                            onClick={() => copyToClipboard("BBPIPTPL", "swift")} 
                            className="px-4 py-2 bg-white/5 hover:bg-bdn-accent hover:text-bdn-black rounded-lg transition-all flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400" 
                          >
                              {copied === "swift" ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                              <span>{copied === "swift" ? "Copiado" : "Copiar"}</span>
                          </button>
                       </div>
                   </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};