import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { CONTACT_PHONE } from "@/lib/constants";

export const StickyMobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-background/95 backdrop-blur-md border-t border-border shadow-2xl safe-area-inset-bottom">
      <div className="px-3 sm:px-4 py-2.5 sm:py-3 flex gap-2">
        <Button 
          variant="hero" 
          size="lg" 
          className="flex-1 group touch-manipulation text-sm sm:text-base font-bold min-h-[48px]"
          onClick={() => {
            document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="truncate">Começar Agora</span>
          <ArrowRight className="ml-1.5 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1 flex-shrink-0" />
        </Button>
        <a href={`tel:${CONTACT_PHONE}`}>
          <Button 
            variant="outline" 
            size="lg" 
            className="touch-manipulation min-h-[48px] px-4 sm:px-5"
          >
            📞
          </Button>
        </a>
      </div>
    </div>
  );
};
