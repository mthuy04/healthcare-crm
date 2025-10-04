// src/components/layout/MainLayout.jsx
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { Settings } from "lucide-react";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto p-8">
        {children}
      </main>
      
      {/* Thêm class z-20 vào đây */}
      <Link
        to="/settings"
        className="fixed bottom-6 left-6 flex items-center space-x-2 text-gray-500 hover:text-blue-600 transition-colors z-20"
      >
        <Settings size={20} />
        <span>Settings</span>
      </Link>
    </div>
  );
}