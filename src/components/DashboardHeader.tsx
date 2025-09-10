import { useState } from "react";
import { Calendar, ChevronDown, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format } from "date-fns";

interface DashboardHeaderProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

export const DashboardHeader = ({ selectedDate, onDateChange }: DashboardHeaderProps) => {
  const [showQuickActions, setShowQuickActions] = useState(false);

  const quickActions = [
    { label: "New Appointment", id: "new-appointment" },
    { label: "Cancel Appointment", id: "cancel-appointment" },
  ];

  return (
    <div className="flex items-center justify-between p-6 bg-dashboard-bg">
      {/* Welcome Message */}
      <div className="flex items-center space-x-4">
        <h1 className="text-3xl font-bold text-dashboard-text">
          Welcome back{" "}
          <span className="bg-gradient-to-r from-dashboard-accent to-dashboard-accent-hover bg-clip-text text-transparent">
            Johnson
          </span>
          <span className="ml-2 text-2xl">👋</span>
        </h1>
      </div>

      {/* Top Right Controls */}
      <div className="flex items-center space-x-4">
        {/* Home Button */}
        <Button
          variant="secondary"
          className="bg-dashboard-card hover:bg-dashboard-card-hover text-dashboard-text border-dashboard-border px-6 py-2 rounded-xl font-medium transition-all duration-300"
        >
          Home
        </Button>

        {/* Date Selector */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="bg-dashboard-card hover:bg-dashboard-card-hover text-dashboard-text border-dashboard-border px-6 py-2 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2"
            >
              <Calendar className="h-4 w-4" />
              <span>select date</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 bg-dashboard-card border-dashboard-border" align="end">
            <CalendarComponent
              mode="single"
              selected={selectedDate}
              onSelect={(date) => date && onDateChange(date)}
              initialFocus
              className="rounded-lg bg-dashboard-card text-dashboard-text p-3 pointer-events-auto"
            />
          </PopoverContent>
        </Popover>

        {/* Quick Actions Plus Button */}
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className={`
              w-12 h-12 rounded-xl transition-all duration-300 
              ${showQuickActions 
                ? 'bg-dashboard-accent text-white rotate-45' 
                : 'bg-dashboard-card hover:bg-dashboard-card-hover text-dashboard-text border border-dashboard-border hover:border-dashboard-accent'
              }
            `}
            onClick={() => setShowQuickActions(!showQuickActions)}
          >
            <Plus className="h-6 w-6" />
          </Button>

          {/* Quick Actions Dropdown */}
          {showQuickActions && (
            <div className="absolute top-full right-0 mt-2 w-56 bg-dashboard-card border border-dashboard-border rounded-xl shadow-lg z-50 animate-slide-up">
              <div className="p-2 space-y-1">
                {quickActions.map((action) => (
                  <Button
                    key={action.id}
                    variant="ghost"
                    className="w-full justify-start text-dashboard-text hover:bg-dashboard-card-hover rounded-lg transition-all duration-200"
                    onClick={() => {
                      setShowQuickActions(false);
                      // Handle action here
                    }}
                  >
                    {action.label}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};