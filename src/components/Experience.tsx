import { Badge } from "@/components/ui/badge";
import { Building2, Users, Rocket } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Experience = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const experiences = [
    {
      icon: Building2,
      category: "Enterprise Solutions",
      title: "Large-Scale Backend Systems",
      description: "Architected and implemented enterprise-grade backend solutions handling millions of transactions.",
      technologies: ["Microservices", "API Gateway", "Message Queues", "Load Balancing"]
    },
    {
      icon: Users,
      category: "Team Leadership", 
      title: "Development Team Management",
      description: "Led cross-functional teams in delivering complex backend projects on time and within scope.",
      technologies: ["Agile/Scrum", "Code Review", "Architecture Design", "DevOps"]
    },
    {
      icon: Rocket,
      category: "Performance Optimization",
      title: "System Performance & Scaling",
      description: "Optimized existing systems achieving significant performance improvements and seamless scaling.",
      technologies: ["Database Tuning", "Caching", "CDN", "Monitoring"]
    }
  ];

  const technologies = [
    "Python", "Django", "FastAPI", "PostgreSQL", "Redis", "Docker",
    "Kubernetes", "AWS", "Microservices", "GraphQL", "REST APIs", "CI/CD"
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div ref={elementRef} className={`text-center mb-16 fade-in-up ${isVisible ? 'in-view' : ''}`}>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
            Experience & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Proven track record in delivering robust backend solutions across various industries
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Experience Cards */}
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`elegant-card p-8 group fade-in-scale ${isVisible ? 'in-view' : ''}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mr-4 group-hover:bg-accent/20 transition-colors">
                    <exp.icon className="h-6 w-6 text-accent" />
                  </div>
                  <Badge variant="secondary" className="text-xs bg-secondary/50">
                    {exp.category}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-display font-semibold text-card-foreground mb-4">
                  {exp.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs border-border/30">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Technologies */}
          <div className={`text-center fade-in-up ${isVisible ? 'in-view' : ''}`}>
            <h3 className="text-2xl font-display font-semibold text-primary mb-8">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {technologies.map((tech, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="text-sm py-2 px-4 bg-secondary/50 hover:bg-accent/10 transition-colors cursor-default border-border/30"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;