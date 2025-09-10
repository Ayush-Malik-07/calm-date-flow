import { format } from "date-fns";
import { Card } from "@/components/ui/card";

interface SectionCardProps {
  title: string;
  selectedDate: Date;
  children: React.ReactNode;
  className?: string;
}

export const SectionCard = ({ title, selectedDate, children, className = "" }: SectionCardProps) => {
  const formattedDate = format(selectedDate, "dd MMM yy");

  return (
    <Card className={`
          bg-dashboard-glass/60 backdrop-blur-xl border-dashboard-border/10 p-6 rounded-3xl 
          transition-all duration-300 hover:bg-dashboard-card-hover/30 hover:shadow-2xl
          relative overflow-hidden group h-full shadow-glass border
      ${className}
    `}>
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/3 to-white/1 opacity-30" />
      <div className="absolute inset-0 bg-dashboard-card/10 backdrop-blur-sm" />
      
      <div className="relative z-10 h-full flex flex-col">
        {/* Header with title and date */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-dashboard-text font-semibold text-lg">{title}</h3>
          <span className="text-xs text-dashboard-text-muted bg-dashboard-bg/50 backdrop-blur-sm px-2 py-1 rounded-lg border border-dashboard-border/30">
            {formattedDate}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1">
          {children}
        </div>
      </div>

      {/* Subtle glow effect on hover */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-r from-dashboard-accent to-dashboard-accent-hover" />
    </Card>
  );
};