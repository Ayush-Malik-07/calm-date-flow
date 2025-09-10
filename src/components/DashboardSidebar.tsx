import { useState } from "react";
import { Home, Calendar, CreditCard, Users, HelpCircle, Settings, User, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const topMenuItems = [
  { icon: Home, label: "Home", id: "home" },
  { icon: Calendar, label: "Bookings", id: "bookings" },
  { icon: CreditCard, label: "Transactions", id: "transactions" },
  { icon: Users, label: "Users", id: "users" },
];

const bottomMenuItems = [
  { icon: HelpCircle, label: "Help", id: "help" },
  { icon: Settings, label: "Settings", id: "settings" },
  { icon: User, label: "Profile", id: "profile" },
];

export const DashboardSidebar = () => {
  const [activeItem, setActiveItem] = useState("home");

  const MenuButton = ({ icon: Icon, label, id, isActive }: { 
    icon: any; 
    label: string; 
    id: string; 
    isActive: boolean; 
  }) => (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="relative group">
            <Button
              variant="ghost"
              size="icon"
              className={`
                w-12 h-12 rounded-xl transition-all duration-300 relative overflow-hidden
                ${isActive 
                  ? 'bg-dashboard-accent text-white shadow-lg scale-105' 
                  : 'text-dashboard-text-muted hover:text-dashboard-text hover:bg-dashboard-sidebar-hover'
                }
                group-hover:scale-110 group-hover:shadow-lg
              `}
              onClick={() => setActiveItem(id)}
            >
              <Icon className={`h-6 w-6 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-dashboard-accent to-dashboard-accent-hover rounded-xl opacity-90" />
              )}
            </Button>
            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none animate-glow" />
          </div>
        </TooltipTrigger>
        <TooltipContent side="right" sideOffset={15} className="bg-dashboard-card border-dashboard-border text-dashboard-text">
          <p className="font-medium">{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );

  return (
    <div className="w-20 bg-dashboard-sidebar border-r border-dashboard-border flex flex-col items-center py-6 space-y-6">
      {/* Company Logo */}
      <div className="flex flex-col items-center space-y-2 mb-8">
        <div className="w-12 h-12 bg-gradient-to-br from-dashboard-accent to-dashboard-accent-hover rounded-2xl flex items-center justify-center shadow-lg">
          <Building2 className="h-7 w-7 text-white" />
        </div>
      </div>

      {/* Top Menu Items */}
      <div className="flex flex-col space-y-4">
        {topMenuItems.map((item) => (
          <MenuButton
            key={item.id}
            icon={item.icon}
            label={item.label}
            id={item.id}
            isActive={activeItem === item.id}
          />
        ))}
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Bottom Menu Items */}
      <div className="flex flex-col space-y-4">
        {bottomMenuItems.map((item) => (
          <MenuButton
            key={item.id}
            icon={item.icon}
            label={item.label}
            id={item.id}
            isActive={activeItem === item.id}
          />
        ))}
      </div>
    </div>
  );
};