import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export const TestimonialCard = ({ quote, name, role, avatar }: TestimonialCardProps) => {
  return (
    <div className="p-8 bg-card rounded-xl border border-border shadow-card hover:shadow-card-lg transition-smooth">
      <div className="flex items-start space-x-4">
        <Quote className="h-8 w-8 text-secondary flex-shrink-0 mt-1" />
        <div className="space-y-4">
          <p className="text-card-foreground text-lg leading-relaxed italic">
            "{quote}"
          </p>
          <div className="flex items-center space-x-3">
            <div className="h-12 w-12 bg-hero-gradient rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">{avatar}</span>
            </div>
            <div>
              <p className="font-semibold text-card-foreground">{name}</p>
              <p className="text-sm text-muted-foreground">{role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};