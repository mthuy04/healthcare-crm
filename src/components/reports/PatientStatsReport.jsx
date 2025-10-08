// src/components/reports/PatientStatsReport.jsx
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const genderData = [
  { name: 'Male', value: 400 },
  { name: 'Female', value: 300 },
];
const COLORS = ['#0088FE', '#00C49F'];

export default function PatientStatsReport() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-1 bg-white p-6 rounded-lg shadow">
        <h3 className="font-semibold text-gray-700">Total Patients</h3>
        <p className="text-4xl font-bold mt-2">700</p>
      </div>
      <div className="md:col-span-2 bg-white p-6 rounded-lg shadow">
        <h3 className="font-semibold text-gray-700 mb-4">Patient Demographics (Gender)</h3>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie data={genderData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label>
              {genderData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}