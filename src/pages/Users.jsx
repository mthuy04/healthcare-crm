// src/pages/Users.jsx
import MainLayout from '../components/layout/MainLayout';
import Button from '../components/common/Button';
import Table from '../components/common/Table';

// Dữ liệu giả để hiển thị
const usersData = [
  { name: 'Dr. Emily Carter', role: 'Doctor', linkedId: '12345', createdAt: '2023-01-15', lastLogin: '2024-03-10' },
  { name: 'Admin User', role: 'Admin', linkedId: 'N/A', createdAt: '2022-11-20', lastLogin: '2024-03-12' },
  { name: 'Sophia Clark', role: 'Patient', linkedId: '67890', createdAt: '2023-05-08', lastLogin: '2024-03-05' },
  { name: 'Dr. David Lee', role: 'Doctor', linkedId: '54321', createdAt: '2023-02-28', lastLogin: '2024-03-09' },
];

const headers = ['User Name', 'Role', 'Linked ID', 'Created At', 'Last Login'];

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