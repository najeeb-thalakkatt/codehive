import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Code2 } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border/20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
              <Code2 className="h-5 w-5 text-accent" />
            </div>
            <span className="text-xl font-display font-semibold gradient-text">CodeHive</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:left-0 after:bottom-[-4px] after:h-px after:w-0 hover:after:w-full after:bg-accent after:transition-all after:duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden h-8 w-8"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border/20">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;