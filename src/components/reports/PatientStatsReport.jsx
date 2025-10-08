// src/components/reports/PatientStatsReport.jsx
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const genderData = [
  { name: 'Male', value: 400 },
  { name: 'Female', value: 300 },
];
const COLORS = ['#3b82f6', '#10b981']; // Dùng màu xanh dương và xanh lá

export default function PatientStatsReport() {
  return (
    <div className="space-y-6">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm text-gray-500">Total Patients</h3>
            <p className="text-3xl font-bold text-gray-800 mt-2">700</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm text-gray-500">New Patients (This Month)</h3>
            <p className="text-3xl font-bold text-gray-800 mt-2">45</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm text-gray-500">Average Patient Age</h3>
            <p className="text-3xl font-bold text-gray-800 mt-2">38</p>
        </div>
      </div>
      
      {/* Donut Chart */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="font-semibold text-gray-800 mb-4">Patient Demographics (Gender)</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            {/* Thêm innerRadius để tạo biểu đồ donut */}
            <Pie data={genderData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#8884d8" paddingAngle={5} label>
              {genderData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}