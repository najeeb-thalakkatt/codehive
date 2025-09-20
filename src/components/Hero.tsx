import { ArrowDown, Code2, Database, Cloud } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Hero = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <Code2 className="absolute top-32 left-[10%] h-6 w-6 text-accent animate-pulse" />
        <Database className="absolute top-48 right-[15%] h-5 w-5 text-accent animate-pulse" style={{ animationDelay: '1s' }} />
        <Cloud className="absolute bottom-1/3 left-[20%] h-7 w-7 text-accent animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div ref={elementRef} className={`relative z-10 text-center max-w-5xl mx-auto px-6 lg:px-8 fade-in-up ${isVisible ? 'in-view' : ''}`}>
        <div className="space-y-8">
          <h1 className="text-6xl md:text-8xl font-display font-bold leading-tight">
            <span className="gradient-text">Code</span>
            <span className="text-primary">Hive</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto">
            Backend Development Specialists
          </p>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Expert backend development delivering scalable solutions
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-5 w-5 text-accent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;