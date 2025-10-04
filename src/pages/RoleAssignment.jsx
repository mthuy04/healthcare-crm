// src/pages/RoleAssignment.jsx
import MainLayout from '../components/layout/MainLayout';
import Table from '../components/common/Table';

const rolesData = [
    { user: 'Dr. Emily Carter', role: 'Doctor', status: 'Active' },
    { user: 'Mr. Robert Johnson', role: 'Patient', status: 'Active' },
    { user: 'Ms. Olivia Brown', role: 'Admin', status: 'Active' },
    { user: 'Dr. David Lee', role: 'Doctor', status: 'Inactive' },
];
const headers = ['User', 'Role', 'Status', 'Action'];

export default function RoleAssignment() {
    return (
        <MainLayout>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Role Assignment</h1>
            {/* Dùng lại component Table đã tạo */}
            <Table headers={headers} data={rolesData} />
        </MainLayout>
    );
}