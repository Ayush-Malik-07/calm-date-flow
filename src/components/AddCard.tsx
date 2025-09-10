import { format } from "date-fns";
import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { useState } from "react";

interface AddCardProps {
  selectedDate: Date;
  className?: string;
  onNewAppointment?: () => void;
  onCancelAppointment?: () => void;
}

export const AddCard = ({ selectedDate, className = "", onNewAppointment, onCancelAppointment }: AddCardProps) => {
  const formattedDate = format(selectedDate, "dd MMM yy");
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="relative">
      {/* Options menu that appears above the card */}
      {showOptions && (
        <div className="absolute -top-32 left-0 right-0 z-20 space-y-2 animate-fade-in">
          <Card 
            className="bg-dashboard-glass/80 backdrop-blur-xl border-dashboard-border/10 p-4 rounded-2xl cursor-pointer hover:bg-dashboard-card-hover/30 transition-all duration-300 shadow-glass"
            onClick={() => {
              onNewAppointment?.();
              setShowOptions(false);
            }}
          >
            <div className="text-dashboard-text font-medium text-center">New Appointment</div>
          </Card>
          <Card 
            className="bg-dashboard-glass/80 backdrop-blur-xl border-dashboard-border/10 p-4 rounded-2xl cursor-pointer hover:bg-dashboard-card-hover/30 transition-all duration-300 shadow-glass"
            onClick={() => {
              onCancelAppointment?.();
              setShowOptions(false);
            }}
          >
            <div className="text-dashboard-text font-medium text-center">Cancel Appointment</div>
          </Card>
        </div>
      )}

      {/* Main plus card */}
      <Card 
        className={`
          bg-dashboard-glass/60 backdrop-blur-xl border-dashboard-border/10 p-6 rounded-3xl 
          transition-all duration-300 hover:bg-dashboard-card-hover/30 hover:shadow-2xl 
          hover:scale-[1.02] cursor-pointer relative overflow-hidden group h-48
          shadow-glass border
          ${className}
        `}
        onClick={() => setShowOptions(!showOptions)}
      >
        {/* Glassmorphism background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/3 to-white/1 opacity-30" />
        <div className="absolute inset-0 bg-dashboard-card/10 backdrop-blur-sm" />
        
        <div className="relative z-10 h-full flex flex-col">
          {/* Header with date */}
          <div className="flex items-start justify-end mb-4">
            <span className="text-xs text-dashboard-text-muted bg-dashboard-bg/50 backdrop-blur-sm px-2 py-1 rounded-lg border border-dashboard-border/30">
              {formattedDate}
            </span>
          </div>

          {/* Plus icon centered */}
          <div className="flex-1 flex items-center justify-center">
            <Plus 
              size={64} 
              className="text-dashboard-accent group-hover:text-dashboard-accent-hover transition-all duration-300 group-hover:rotate-90" 
            />
          </div>
        </div>

        {/* Subtle glow effect on hover */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-15 transition-opacity duration-500 bg-gradient-to-r from-dashboard-accent to-dashboard-accent-hover" />
      </Card>
    </div>
  );
};