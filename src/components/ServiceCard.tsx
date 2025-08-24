import { LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

export const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  const IconComponent = Icons[icon as keyof typeof Icons] as LucideIcon;

  return (
    <div className="group p-8 bg-card rounded-xl border border-border shadow-card hover:shadow-card-lg transition-smooth transform hover:-translate-y-1">
      <div className="mb-6">
        <div className="p-4 bg-hero-gradient rounded-xl w-fit">
          <IconComponent className="h-8 w-8 text-white" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-card-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};