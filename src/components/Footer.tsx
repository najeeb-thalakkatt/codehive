import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary/10 backdrop-blur-sm py-12 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">CodeHive</h3>
            <p className="text-muted-foreground leading-relaxed">
              Specialized backend development consultancy delivering robust, 
              scalable solutions for modern enterprises.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Backend Architecture</li>
              <li>Database Solutions</li>
              <li>Cloud Integration</li>
              <li>API Development</li>
              <li>DevOps Integration</li>
              <li>Security & Monitoring</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Contact</h4>
            <div className="space-y-3">
            <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-accent" />
                <span className="text-muted-foreground">
                  dev@codehives.se
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 CodeHive. All rights reserved.
          </div>
          <div className="text-muted-foreground text-sm">
            Expert Backend Development Consultancy
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;