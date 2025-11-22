export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <div className="flex items-center justify-center">
          <img 
            src="/azios-logo.png" 
            alt="Azios Logo" 
            className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain drop-shadow-lg"
          />
        </div>
      </div>
    </header>
  );
};
