// src/pages/Users.jsx
import MainLayout from '../components/layout/MainLayout';
import Table from '../components/common/Table';
import Button from '../components/common/Button';

// Dữ liệu giả
const usersData = [
  { name: 'Dr. Emily Carter', role: 'Doctor', linkedId: '12345', createdAt: '2023-01-15', lastLogin: '2024-03-10', active: '✅' },
  { name: 'Admin User', role: 'Admin', linkedId: 'N/A', createdAt: '2022-11-20', lastLogin: '2024-03-12', active: '✅' },
  // ... thêm dữ liệu khác
];

const headers = ['USER NAME', 'ROLE', 'LINKED ID', 'CREATED AT', 'LAST LOGIN', 'ACTIVE'];

export default function Users() {
  return (
    <MainLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Users</h1>
        <Button>+ Add User</Button>
      </div>
      <Table headers={headers} data={usersData} />
    </MainLayout>
  );
}