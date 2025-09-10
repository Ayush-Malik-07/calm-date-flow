import { useState } from "react";
import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardHeader } from "./DashboardHeader";
import { StatsCard } from "./StatsCard";
import { SectionCard } from "./SectionCard";
import { AddCard } from "./AddCard";

export const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Mock data - in real app, this would come from API based on selectedDate
  const statsData = {
    earnings: "2.5k",
    bookings: "17",
    staff: "2",
  };

  const recentTransactions = [
    { id: 1, description: "Haircut appointment", amount: "$45", time: "2:30 PM" },
    { id: 2, description: "Beard trim", amount: "$25", time: "1:15 PM" },
    { id: 3, description: "Hair wash", amount: "$15", time: "12:00 PM" },
  ];

  const appointments = [
    { id: 1, client: "John Smith", service: "Haircut", time: "3:00 PM", status: "confirmed" },
    { id: 2, client: "Mike Davis", service: "Beard trim", time: "4:30 PM", status: "pending" },
    { id: 3, client: "Alex Brown", service: "Hair styling", time: "5:15 PM", status: "confirmed" },
  ];

  const handleNewAppointment = () => {
    console.log("New appointment clicked");
    // Add your logic here
  };

  const handleCancelAppointment = () => {
    console.log("Cancel appointment clicked");
    // Add your logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dashboard-bg via-dashboard-bg to-dashboard-sidebar p-6">
      <div className="flex gap-6 h-full">
        {/* Sidebar */}
        <DashboardSidebar />

        {/* Main Content - Floating Container */}
        <div className="flex-1 flex flex-col">
          {/* Floating Dashboard Container */}
          <div className="bg-dashboard-glass backdrop-blur-2xl border border-dashboard-border/20 rounded-3xl shadow-glass overflow-hidden h-full">
            {/* Header */}
            <DashboardHeader selectedDate={selectedDate} onDateChange={setSelectedDate} />

            {/* Dashboard Content */}
            <div className="flex-1 p-8 space-y-8">
              {/* Top Stats Row */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <StatsCard
                  title="Earnings"
                  value={statsData.earnings}
                  selectedDate={selectedDate}
                />
                <StatsCard
                  title="Bookings"
                  value={statsData.bookings}
                  selectedDate={selectedDate}
                />
                <StatsCard
                  title="Staff"
                  value={statsData.staff}
                  selectedDate={selectedDate}
                />
                {/* Add/Plus Card */}
                <AddCard
                  selectedDate={selectedDate}
                  onNewAppointment={handleNewAppointment}
                  onCancelAppointment={handleCancelAppointment}
                />
              </div>

              {/* Bottom Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Transactions */}
                <SectionCard
                  title="Recent Transactions"
                  selectedDate={selectedDate}
                >
                  <div className="space-y-4">
                    {recentTransactions.length === 0 ? (
                      <div className="text-center text-dashboard-text-muted py-8">
                        <p>No transactions found for this date.</p>
                      </div>
                    ) : (
                      recentTransactions.map((transaction) => (
                        <div
                          key={transaction.id}
                          className="flex items-center justify-between p-4 rounded-2xl bg-dashboard-glass/50 backdrop-blur-sm border border-dashboard-border/10 hover:bg-dashboard-card-hover/30 transition-colors duration-200"
                        >
                          <div>
                            <p className="text-dashboard-text font-medium">{transaction.description}</p>
                            <p className="text-sm text-dashboard-text-muted">{transaction.time}</p>
                          </div>
                          <span className="text-dashboard-accent font-semibold">{transaction.amount}</span>
                        </div>
                      ))
                    )}
                  </div>
                </SectionCard>

                {/* Appointments */}
                <SectionCard
                  title="Appointments"
                  selectedDate={selectedDate}
                >
                  <div className="space-y-4">
                    {appointments.length === 0 ? (
                      <div className="text-center text-dashboard-text-muted py-8">
                        <p>No appointments found for this date.</p>
                      </div>
                    ) : (
                      appointments.map((appointment) => (
                        <div
                          key={appointment.id}
                          className="flex items-center justify-between p-4 rounded-2xl bg-dashboard-glass/50 backdrop-blur-sm border border-dashboard-border/10 hover:bg-dashboard-card-hover/30 transition-colors duration-200"
                        >
                          <div>
                            <p className="text-dashboard-text font-medium">{appointment.client}</p>
                            <p className="text-sm text-dashboard-text-muted">
                              {appointment.service} • {appointment.time}
                            </p>
                          </div>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              appointment.status === "confirmed"
                                ? "bg-dashboard-accent/20 text-dashboard-accent"
                                : "bg-yellow-500/20 text-yellow-400"
                            }`}
                          >
                            {appointment.status}
                          </span>
                        </div>
                      ))
                    )}
                  </div>
                </SectionCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};