import { format } from "date-fns";
import { Card } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string | number;
  selectedDate: Date;
  className?: string;
}

export const StatsCard = ({ title, value, selectedDate, className = "" }: StatsCardProps) => {
  const formattedDate = format(selectedDate, "dd MMM yy");

  return (
    <Card className={`
      bg-dashboard-glass backdrop-blur-xl border-dashboard-border/20 p-6 rounded-3xl 
      transition-all duration-300 hover:bg-dashboard-card-hover/50 hover:shadow-2xl 
      hover:scale-[1.02] cursor-pointer relative overflow-hidden group h-48
      shadow-glass border
      ${className}
    `}>
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/1 opacity-50" />
      <div className="absolute inset-0 bg-dashboard-card/30 backdrop-blur-sm" />
      
      <div className="relative z-10 h-full flex flex-col">
        {/* Header with title and date */}
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-dashboard-text-muted font-medium text-sm uppercase tracking-wider">
            {title}
          </h3>
          <span className="text-xs text-dashboard-text-muted bg-dashboard-bg/50 backdrop-blur-sm px-2 py-1 rounded-lg border border-dashboard-border/30">
            {formattedDate}
          </span>
        </div>

        {/* Main value positioned at bottom left */}
        <div className="mt-auto">
          <div className="text-5xl font-bold text-dashboard-text">
            {value}
          </div>
        </div>
      </div>

      {/* Subtle glow effect on hover */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-r from-dashboard-accent to-dashboard-accent-hover" />
    </Card>
  );
};