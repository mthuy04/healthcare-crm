// src/components/common/Button.jsx
export default function Button({ children, onClick, className = '' }) {
    const baseClasses = "px-4 py-2 rounded-lg font-semibold text-white transition-colors";
    const primaryClasses = "bg-blue-500 hover:bg-blue-600";
    // Bạn có thể thêm các biến thể khác như 'secondary', 'danger'
  
    return (
      <button onClick={onClick} className={`${baseClasses} ${primaryClasses} ${className}`}>
        {children}
      </button>
    );
  }