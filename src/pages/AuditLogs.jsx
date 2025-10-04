// src/pages/AuditLogs.jsx
import MainLayout from '../components/layout/MainLayout';
import Table from '../components/common/Table';

const logsData = [
    { timestamp: '2024-01-15 10:30:00', user: 'Dr. Emily Carter', action: 'Update', table: 'Patients' },
    { timestamp: '2024-01-15 11:00:00', user: 'Admin User', action: 'Create', table: 'Appointments' },
    { timestamp: '2024-01-15 12:15:00', user: 'Patient Sarah Johnson', action: 'Read', table: 'Billing' },
];
const headers = ['Timestamp', 'User', 'Action', 'Table Affected'];

export default function AuditLogs() {
    return (
        <MainLayout>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Audit Logs</h1>
            <Table headers={headers} data={logsData} />
        </MainLayout>
    );
}