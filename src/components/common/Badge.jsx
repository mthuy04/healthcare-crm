// src/components/common/Badge.jsx
export default function Badge({ text, color }) {
    const colorClasses = {
      green: 'bg-green-100 text-green-800',
      blue: 'bg-blue-100 text-blue-800',
      red: 'bg-red-100 text-red-800', // Thêm dòng này
    };
  
    return (
      <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${colorClasses[color]}`}>
        {text}
      </span>
    );
  }