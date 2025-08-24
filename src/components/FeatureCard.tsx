import { LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

export const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  const IconComponent = Icons[icon as keyof typeof Icons] as LucideIcon;

  return (
    <div className="group p-6 bg-card rounded-lg border border-border shadow-card hover:shadow-card-lg transition-smooth">
      <div className="flex items-center space-x-4 mb-4">
        <div className="p-3 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-smooth">
          <IconComponent className="h-6 w-6 text-secondary" />
        </div>
        <h3 className="text-lg font-semibold text-card-foreground">{title}</h3>
      </div>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};