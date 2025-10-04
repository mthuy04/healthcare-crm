// src/components/common/Select.jsx
export default function Select({ label, value, onChange, children }) {
    return (
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">{label}</label>
        <select
          value={value}
          onChange={onChange}
          className="w-full px-4 py-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {children}
        </select>
      </div>
    );
  }