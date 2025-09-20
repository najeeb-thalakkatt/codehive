import { Code, Database, Cloud } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const features = [
    { icon: Code, title: "Backend", subtitle: "Development" },
    { icon: Database, title: "Scalable", subtitle: "Architecture" },
    { icon: Cloud, title: "Cloud", subtitle: "Solutions" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div ref={elementRef} className={`fade-in-up ${isVisible ? 'in-view' : ''}`}>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
              About <span className="gradient-text">CodeHive</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-16 leading-relaxed max-w-3xl mx-auto">
              Specialized backend development consultancy focused on building robust, scalable systems.
            </p>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="elegant-card p-8 text-center group">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <feature.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-card-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;