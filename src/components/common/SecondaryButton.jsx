// src/components/common/SecondaryButton.jsx
export default function SecondaryButton({ children, onClick }) {
    return (
      <button
        onClick={onClick}
        // Bỏ w-full ở dòng dưới
        className="px-5 py-2 bg-blue-100 text-blue-700 font-semibold rounded-lg hover:bg-blue-200 transition-colors"
      >
        {children}
      </button>
    );
  }