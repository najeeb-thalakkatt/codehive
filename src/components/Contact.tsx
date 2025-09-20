import { Mail, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div ref={elementRef} className={`text-center mb-16 fade-in-up ${isVisible ? 'in-view' : ''}`}>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
            Let's Build Something <span className="gradient-text">Great</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your backend development needs? Get in touch.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className={`elegant-card p-12 text-center fade-in-scale ${isVisible ? 'in-view' : ''}`}>
            <div className="space-y-8">
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-muted-foreground">Email</div>
                  <a 
                    href="mailto:dev@codehives.se" 
                    className="text-lg font-medium text-foreground hover:text-accent transition-colors"
                  >
                    dev@codehives.se
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-muted-foreground">Location</div>
                  <div className="text-lg font-medium text-foreground">Available Worldwide</div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-border/20">
              <p className="text-muted-foreground">
                Specializing in scalable backend solutions that grow with your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;