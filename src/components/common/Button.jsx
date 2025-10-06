// src/components/common/Button.jsx
export default function Button({ children, onClick }) {
    return (
      <button
        onClick={onClick}
        // Bỏ w-full ở dòng dưới
        className="px-5 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
      >
        {children}
      </button>
    );
  }