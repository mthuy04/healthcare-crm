// src/components/layout/Navbar.jsx
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/Logo.svg';
import adminAvatar from '../../assets/admin-avatar.png';

const navItems = [
  { name: "Dashboard", path: "/" },
  { name: "Users", path: "/users" },
  { name: "Appointments", path: "/appointments" },
  { name: "Departments", path: "/departments" },
  { name: "Audit Logs", path: "/audit-logs" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="flex items-center justify-between mx-auto px-8 py-3">
        {/* === Phần bên trái: Logo + Tên === */}
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <img src={logo} alt="HealthcareCRM Logo" className="w-10 h-10" />
            <span className="text-xl font-bold text-gray-800">HealthcareCRM</span>
          </Link>
        </div>

        {/* === Phần giữa: Các link điều hướng === */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map(item => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-gray-600 hover:text-blue-600 transition-colors pb-1 whitespace-nowrap ${
                location.pathname === item.path
                  ? 'font-semibold text-blue-600 border-b-2 border-blue-600'
                  : '' // LỖI ĐÃ ĐƯỢC SỬA Ở ĐÂY (dấu : thay vì -)
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* === Phần bên phải: Icons === */}
        <div className="flex items-center space-x-4 flex-shrink-0">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
          </button>
          <img src={adminAvatar} alt="Admin Avatar" className="w-9 h-9 rounded-full object-cover" />
        </div>
      </div>
    </header>
  );
}