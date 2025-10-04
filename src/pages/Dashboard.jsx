// src/pages/Dashboard.jsx
import MainLayout from '../components/layout/MainLayout';
import AppointmentsChart from '../components/dashboard/AppointmentsChart';
import RatingsChart from '../components/dashboard/RatingsChart';
import UpcomingAppointmentsTable from '../components/dashboard/UpcomingAppointmentsTable';

// Bỏ "Feedback Pending" và chỉ còn 3 thẻ
const stats = [
  { label: "Today's Appointments", value: 25 },
  { label: "Active Doctor", value: 12 },
  { label: "Register Patients (Month)", value: 45 },
];

export default function Dashboard() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {stats.map(stat => (
          <div key={stat.label} className="bg-white p-6 rounded-lg shadow">
            {/* Tăng cỡ chữ từ text-sm lên text-base */}
            <h3 className="text-base text-gray-500">{stat.label}</h3>
            <p className="text-3xl font-bold text-gray-800 mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-1">
          <AppointmentsChart />
        </div>
        <div className="lg:col-span-2">
          <RatingsChart />
        </div>
      </div>

      {/* Upcoming Appointments Table */}
      <UpcomingAppointmentsTable />
    </MainLayout>
  );
}