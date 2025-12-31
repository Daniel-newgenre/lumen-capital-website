'use client';

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const Hero = ({ 
  title = "Welcome to Lumen Capital", 
  subtitle = "Illuminating your path to financial success with expert investment strategies and personalized wealth management solutions.",
  ctaText = "Get Started",
  onCtaClick 
}: HeroProps) => {
  const handleCtaClick = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      console.log('CTA clicked');
    }
  };

  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
<<<<<<< Updated upstream
<<<<<<< Updated upstream
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
=======
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-red-500">
>>>>>>> Stashed changes
=======
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-red-500">
>>>>>>> Stashed changes
          {title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        <button
          onClick={handleCtaClick}
          className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          tabIndex={0}
          aria-label={`${ctaText} button`}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleCtaClick();
            }
          }}
        >
          {ctaText}
        </button>
      </div>
    </section>
  );
};

export default Hero;