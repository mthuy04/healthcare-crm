// src/components/layout/MainLayout.jsx
import Sidebar from "./Sidebar";

export default function MainLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        {/* Navbar có thể được đặt ở đây nếu nó cố định trên tất cả các trang */}
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}