import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";


export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#020617] text-white flex">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Topbar */}
        <Topbar />

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-8">
          {children}
        </main>

      </div>
    </div>
  );
}