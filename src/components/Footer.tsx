import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { Container } from "./Container";
import { company, navigation } from "@/lib/data";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-sm">C</span>
              </div>
              <span className="text-xl font-bold">{company.name}</span>
            </div>
            <p className="text-primary-foreground/80 text-sm max-w-sm">
              {company.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <nav className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-secondary" />
                <a 
                  href={`mailto:${company.email}`}
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  {company.email}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-secondary" />
                <a 
                  href={`tel:${company.phone}`}
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  {company.phone}
                </a>
              </div>
              <div className="flex items-start space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-secondary mt-0.5" />
                <span className="text-primary-foreground/80">
                  {company.address}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 border-t border-primary-foreground/20">
          <p className="text-center text-sm text-primary-foreground/60">
            © {currentYear} {company.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};