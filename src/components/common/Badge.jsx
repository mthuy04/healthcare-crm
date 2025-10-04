// src/components/common/Badge.jsx
export default function Badge({ text, color }) {
    const colorClasses = {
      green: 'bg-green-100 text-green-800',
      blue: 'bg-blue-100 text-blue-800',
    };
  
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${colorClasses[color]}`}>
        {text}
      </span>
    );
  }