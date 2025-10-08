// src/components/reports/AppointmentStatsReport.jsx
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const appointmentData = [
  { month: 'Jan', count: 65 }, { month: 'Feb', count: 59 },
  { month: 'Mar', count: 80 }, { month: 'Apr', count: 81 },
  { month: 'May', count: 56 }, { month: 'Jun', count: 55 },
];

export default function AppointmentStatsReport() {
    return (
        <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold text-gray-700 mb-4">Appointments per Month</h3>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={appointmentData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}