export const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-16 bg-white/5 backdrop-blur-xl">
      <div className="max-w-container-width mx-auto px-4 md:px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter">
        <div>
          <div className="font-headline-md text-headline-md font-bold text-white mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '"FILL" 1' }}>hive</span>
            Azios
          </div>
          <p className="font-body-sm text-slate-400 mb-6 max-w-xs">A plataforma definitiva para líderes de RH operacionais.</p>
          <p className="font-body-sm text-slate-500">© 2026 Azios HR Tech. All rights reserved.</p>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-label-md text-white font-bold tracking-wide mb-2">Legal</h4>
          <a className="font-body-sm text-slate-400 hover:text-white transition-colors" href="#">Política de Privacidade</a>
          <a className="font-body-sm text-slate-400 hover:text-white transition-colors" href="#">Termos de Uso</a>
          <a className="font-body-sm text-slate-400 hover:text-white transition-colors" href="#">Segurança</a>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-label-md text-white font-bold tracking-wide mb-2">Produto</h4>
          <a className="font-body-sm text-slate-400 hover:text-white transition-colors" href="#hunting">Hunting Inteligente</a>
          <a className="font-body-sm text-slate-400 hover:text-white transition-colors" href="#whatsapp-triagem">Triagem Humanizada</a>
          <a className="font-body-sm text-slate-400 hover:text-white transition-colors" href="#features">Recursos</a>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-label-md text-white font-bold tracking-wide mb-2">Empresa</h4>
          <a className="font-body-sm text-slate-400 hover:text-white transition-colors" href="#">Carreiras</a>
          <a className="font-body-sm text-slate-400 hover:text-white transition-colors" href="#">Contato</a>
          <a className="font-body-sm text-slate-400 hover:text-white transition-colors" href="#">Blog</a>
        </div>
      </div>
    </footer>
  );
};
