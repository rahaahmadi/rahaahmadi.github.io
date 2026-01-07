import React from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';
import { Github, Linkedin, Mail, GraduationCap } from 'lucide-react';

const Hero: React.FC = () => {
  const getIcon = (name: string) => {
    // Using thinner stroke width for a more elegant look
    const commonProps = { strokeWidth: 1.5, className: "w-5 h-5 transition-transform duration-300 group-hover:scale-110" };
    
    switch (name) {
      case 'Github': 
        // Filled icon for the "original" look, inheriting text color (white in this case)
        // strokeWidth ensures lines (like the tail) are visible even when filled
        return <Github strokeWidth={1.5} fill="currentColor" className={commonProps.className} />;
      case 'Linkedin': 
        // Filled icon to match the visual weight of the GitHub icon
        return <Linkedin strokeWidth={1.5} fill="currentColor" className={commonProps.className} />;
      case 'Mail': 
        // Mail icon is kept as outline because filling it would obscure the envelope flap details
        return <Mail {...commonProps} />;
      case 'GraduationCap': return <GraduationCap {...commonProps} />;
      default: return null;
    }
  };

  return (
    <section id="hero" className="h-[100dvh] flex items-center justify-center pt-16 relative overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-center">
        <div className="flex flex-col-reverse items-center justify-center gap-2 md:gap-4">
          
          {/* Text Content */}
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-3">
              {PERSONAL_INFO.name}
            </h1>
            <h2 className="text-xl md:text-3xl text-slate-600 font-bold tracking-tight mb-3">
              {PERSONAL_INFO.title}
            </h2>
            <p className="text-lg text-slate-500 mb-4 max-w-2xl mx-auto leading-relaxed">
              {PERSONAL_INFO.tagline}
            </p>
            
            <div className="flex space-x-5 justify-center">
              {SOCIAL_LINKS.map((link) => {
                const baseClasses = "group flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1";
                // All social links now use the black background style
                const colorClasses = "bg-black border border-black text-white hover:bg-slate-800 hover:border-slate-800";

                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${baseClasses} ${colorClasses}`}
                    aria-label={link.platform}
                  >
                    {getIcon(link.iconName)}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <div className="relative w-[160px] h-[160px] md:w-[240px] md:h-[240px]">
              <div className="absolute inset-0 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              {/* Profile Image */}
              <img
                src="pics/profile.jpg" 
                alt={PERSONAL_INFO.name}
                className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;