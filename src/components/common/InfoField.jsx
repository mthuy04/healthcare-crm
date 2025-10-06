// src/components/common/InfoField.jsx
export default function InfoField({ label, value, layout = 'stacked' }) {
    // Kiểu mặc định: label ở trên, value ở dưới
    if (layout === 'stacked') {
      return (
        <div className="border-b border-gray-200 pb-2">
          <p className="text-xs text-gray-500">{label}</p>
          <p className="font-semibold text-gray-900">{value}</p>
        </div>
      );
    }
  
    // Kiểu inline: label và value trên cùng một hàng
    return (
      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
        <p className="text-sm text-gray-500">{label}</p>
        <p className="font-semibold text-gray-900">{value}</p>
      </div>
    );
  }