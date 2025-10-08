// src/components/reports/AppointmentStatsReport.jsx
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const appointmentData = [
  { month: 'Jan', count: 65 }, { month: 'Feb', count: 59 },
  { month: 'Mar', count: 80 }, { month: 'Apr', count: 81 },
  { month: 'May', count: 56 }, { month: 'Jun', count: 55 },
];

export default function AppointmentStatsReport() {
    return (
        <div className="space-y-6">
            {/* Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-sm text-gray-500">Total Appointments</h3>
                    <p className="text-3xl font-bold text-gray-800 mt-2">396</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-sm text-gray-500">Completion Rate</h3>
                    <p className="text-3xl font-bold text-gray-800 mt-2">92%</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-sm text-gray-500">Busiest Department</h3>
                    <p className="text-3xl font-bold text-gray-800 mt-2">Cardiology</p>
                </div>
            </div>
            {/* Bar Chart */}
            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold text-gray-800 mb-4">Appointments per Month</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={appointmentData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        {/* Đổi màu fill thành màu xanh dương */}
                        <Bar dataKey="count" fill="#3b82f6" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}