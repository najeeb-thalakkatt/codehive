import { Server, Database, Cloud, Shield, Cog, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Services = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const services = [
    {
      icon: Server,
      title: "Backend Architecture",
      description: "Scalable server-side solutions designed for growth and performance."
    },
    {
      icon: Database,
      title: "Database Solutions",
      description: "Optimized database design and management for high-performance applications."
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description: "Cloud-native deployments with modern DevOps practices."
    },
    {
      icon: Shield,
      title: "Security & Monitoring",
      description: "Robust security implementations with comprehensive monitoring systems."
    },
    {
      icon: Cog,
      title: "API Development",
      description: "RESTful and GraphQL APIs built for scalability and reliability."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "System optimization for peak performance and efficiency."
    }
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div ref={elementRef} className={`text-center mb-16 fade-in-up ${isVisible ? 'in-view' : ''}`}>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive backend development services tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`elegant-card p-8 group fade-in-scale ${isVisible ? 'in-view' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <service.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-display font-semibold text-card-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;