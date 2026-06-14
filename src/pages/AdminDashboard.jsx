import DashboardLayout from "../layouts/DashboardLayout";
import StatsCards from "../components/dashboard/StatsCards";
import AnalyticsChart from "../components/dashboard/AnalyticsChart";
import ActivityFeed from "../components/dashboard/ActivityFeed";
import UsersTable from "../components/dashboard/UsersTable";

export default function AdminDashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <StatsCards />
        
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <AnalyticsChart />
          <ActivityFeed />
        </div>

        <UsersTable />
      </div>
    </DashboardLayout>
  );
}