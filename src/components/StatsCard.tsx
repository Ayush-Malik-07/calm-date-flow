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
      bg-dashboard-card border-dashboard-border p-6 rounded-2xl transition-all duration-300 
      hover:bg-dashboard-card-hover hover:shadow-lg hover:scale-105 cursor-pointer
      relative overflow-hidden group
      ${className}
    `}>
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-dashboard-card to-dashboard-card-hover opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        {/* Header with title and date */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-dashboard-text-muted font-medium text-sm">{title}</h3>
          <span className="text-xs text-dashboard-text-muted bg-dashboard-bg px-2 py-1 rounded-md">
            {formattedDate}
          </span>
        </div>

        {/* Main value */}
        <div className="text-4xl font-bold text-dashboard-text mb-2">
          {value}
        </div>
      </div>

      {/* Subtle glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-dashboard-accent to-dashboard-accent-hover" />
    </Card>
  );
};