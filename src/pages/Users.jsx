// src/pages/Users.jsx
import MainLayout from '../components/layout/MainLayout';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom'; // 1. Import Link
import { Check } from 'lucide-react'; // 2. Import icon Check (thay cho CheckCircle2)

const usersData = [
    { name: 'Dr. Emily Carter', role: 'Doctor', linkedId: '12345', createdAt: '2023-01-15', lastLogin: '2024-03-10', active: true },
    { name: 'Admin User', role: 'Admin', linkedId: 'N/A', createdAt: '2022-11-20', lastLogin: '2024-03-12', active: true },
    { name: 'Sophia Clark', role: 'Patient', linkedId: '67890', createdAt: '2023-05-08', lastLogin: '2024-03-05', active: true },
    { name: 'Dr. David Lee', role: 'Doctor', linkedId: '54321', createdAt: '2023-02-28', lastLogin: '2024-03-09', active: false },
    { name: 'Another Admin', role: 'Admin', linkedId: 'N/A', createdAt: '2023-03-15', lastLogin: '2024-03-11', active: true },
    { name: 'Patient User 2', role: 'Patient', linkedId: '98765', createdAt: '2023-07-22', lastLogin: '2024-03-07', active: true },
    { name: 'Dr. Sarah Jones', role: 'Doctor', linkedId: '11223', createdAt: '2023-04-10', lastLogin: '2024-03-08', active: true },
];

const headers = ['User Name', 'Role', 'Linked ID', 'Created At', 'Last Login', 'Active'];

export default function Users() {
  return (
    <MainLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Users</h1>
        {/* 3. Bọc nút Button trong thẻ Link */}
        <Link to="/users/create">
          <Button>+ Add User</Button>
        </Link>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              {headers.map(header => (
                <th key={header} className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {usersData.map((user, index) => (
              <tr key={index}>
                {/* 4. Thêm font-semibold cho cột User Name */}
                <td className="py-4 px-6 font-semibold text-gray-900">{user.name}</td>
                <td className="py-4 px-6 text-gray-600">{user.role}</td>
                <td className="py-4 px-6 text-gray-600">{user.linkedId}</td>
                <td className="py-4 px-6 text-gray-600">{user.createdAt}</td>
                <td className="py-4 px-6 text-gray-600">{user.lastLogin}</td>
                <td className="py-4 px-6">
                  {/* 5. Thay đổi cách hiển thị icon checkmark */}
                  {user.active && (
                    <div className="w-5 h-5 flex items-center justify-center bg-blue-500 rounded-full">
                        <Check size={14} className="text-white" />
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </MainLayout>
  );
}