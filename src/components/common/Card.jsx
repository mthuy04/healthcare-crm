// src/components/common/Card.jsx
export default function Card({ children, className = '' }) {
    return (
      <div className={`bg-white rounded-lg shadow p-6 ${className}`}>
        {children}
      </div>
    );
  }