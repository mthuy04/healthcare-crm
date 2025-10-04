// src/components/dashboard/RatingsChart.jsx
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', rating: 4.0 }, { name: 'Feb', rating: 3.0 },
  { name: 'Mar', rating: 4.5 }, { name: 'Apr', rating: 4.2 },
  { name: 'May', rating: 3.5 }, { name: 'Jun', rating: 4.8 },
  { name: 'Jul', rating: 5.0 }, { name: 'Aug', rating: 4.1 },
  { name: 'Sep', rating: 4.3 }, { name: 'Oct', rating: 4.7 },
  { name: 'Nov', rating: 3.9 }, { name: 'Dec', rating: 4.6 },
];

export default function RatingsChart() {
  return (
    <div className="bg-white p-6 rounded-lg shadow h-full">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Average Rating Trend</h3>
      <ResponsiveContainer width="100%" height={225}>
        {/* THAY ĐỔI DÒNG DƯỚI ĐÂY */}
        <AreaChart data={data} margin={{ top: 10, right: 30, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="ratingGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="name" axisLine={false} tickLine={false} interval={0} />
          <Tooltip />
          <Area type="monotone" dataKey="rating" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#ratingGradient)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}