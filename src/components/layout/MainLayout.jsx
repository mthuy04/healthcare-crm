// src/components/layout/MainLayout.jsx
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { Settings } from "lucide-react";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* THAY ĐỔI DÒNG DƯỚI ĐÂY */}
      <main className="max-w-7xl mx-auto px-8 pt-8 pb-24">
        {children}
      </main>
      
      <Link
        to="/settings"
        className="fixed bottom-6 left-6 flex items-center space-x-2 text-gray-500 hover:text-blue-600 transition-colors z-50"
      >
        <Settings size={20} />
        <span>Settings</span>
      </Link>
    </div>
  );
}