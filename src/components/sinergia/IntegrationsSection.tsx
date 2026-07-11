export const IntegrationsSection = () => {
  return (
    <section id="integrations" className="bg-surface-container-lowest border-y border-outline-variant/30 py-16">
      <div className="max-w-container-width mx-auto px-4 md:px-margin-desktop text-center">
        <p className="font-label-md text-on-surface-variant uppercase tracking-wider mb-8">Integrado ao seu Ecossistema</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <span className="font-headline-md text-xl font-bold">Slack</span>
          <span className="font-headline-md text-xl font-bold">Google Workspace</span>
          <span className="font-headline-md text-xl font-bold">Microsoft Teams</span>
          <span className="font-headline-md text-xl font-bold">Whatsapp</span>
        </div>
      </div>
    </section>
  );
};
