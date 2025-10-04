// src/components/common/FilterButton.jsx
import { ChevronDown } from 'lucide-react';

export default function FilterButton({ children }) {
  return (
    <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
      <span>{children}</span>
      <ChevronDown size={16} />
    </button>
  );
}