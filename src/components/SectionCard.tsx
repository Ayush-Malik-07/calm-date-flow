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
      bg-dashboard-card border-dashboard-border p-6 rounded-2xl transition-all duration-300 
      hover:bg-dashboard-card-hover hover:shadow-lg
      relative overflow-hidden group h-full
      ${className}
    `}>
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-dashboard-card to-dashboard-card-hover opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10 h-full flex flex-col">
        {/* Header with title and date */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-dashboard-text font-semibold text-lg">{title}</h3>
          <span className="text-xs text-dashboard-text-muted bg-dashboard-bg px-2 py-1 rounded-md">
            {formattedDate}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1">
          {children}
        </div>
      </div>

      {/* Subtle glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-r from-dashboard-accent to-dashboard-accent-hover" />
    </Card>
  );
};