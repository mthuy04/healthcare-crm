// src/components/common/Input.jsx
export default function Input({ label, type = 'text', placeholder, value, onChange, required = false, helpText }) {
    return (
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full px-4 py-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {helpText && <p className="text-xs text-gray-500 mt-1">{helpText}</p>}
      </div>
    );
  }