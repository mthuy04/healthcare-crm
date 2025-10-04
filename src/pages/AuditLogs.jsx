// src/pages/AuditLogs.jsx
import MainLayout from '../components/layout/MainLayout';
import FilterButton from '../components/common/FilterButton';
import Badge from '../components/common/Badge';
import { ListFilter } from 'lucide-react';

const logsData = [
  { timestamp: '2024-01-15 10:30:00', user: 'Dr. Emily Carter', action: 'Update', table: 'Patients', recordId: '12345', ip: '192.168.1.100' },
  { timestamp: '2024-01-15 11:00:00', user: 'Admin User', action: 'Create', table: 'Appointments', recordId: '23456', ip: '192.168.1.101' },
  { timestamp: '2024-01-15 12:15:00', user: 'Patient Sarah Johnson', action: 'Read', table: 'Billing', recordId: '34567', ip: '192.168.1.102' },
  { timestamp: '2024-01-15 14:45:00', user: 'Dr. Michael Chen', action: 'Delete', table: 'Patients', recordId: '45678', ip: '192.168.1.103' },
  { timestamp: '2024-01-15 16:20:00', user: 'Admin User', action: 'Update', table: 'Appointments', recordId: '56789', ip: '192.168.1.104' },
  { timestamp: '2024-01-16 09:00:00', user: 'Patient David Lee', action: 'Read', table: 'Billing', recordId: '67890', ip: '192.168.1.105' },
];

const headers = ['Timestamp', 'User', 'Action', 'Table Affected', 'Record ID', 'IP Address'];

const getActionColor = (action) => {
    switch (action.toLowerCase()) {
        case 'delete':
            return 'red';
        case 'create':
        case 'update':
        case 'read':
            return 'blue';
        default:
            return 'gray';
    }
};

export default function AuditLogs() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold text-gray-800">Audit Logs</h1>
      <p className="mt-1 text-gray-500 mb-6">View and filter all system activities performed by users.</p>

      <div className="bg-white p-4 rounded-lg shadow mb-8">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-gray-600 font-medium">
            <ListFilter size={18} />
            <span>Filter by:</span>
          </div>
          <FilterButton>User</FilterButton>
          <FilterButton>Date Range</FilterButton>
          <FilterButton>Action</FilterButton>
          <FilterButton>Table</FilterButton>
        </div>
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
            {logsData.map((log, index) => (
              <tr key={index}>
                <td className="py-4 px-6 text-gray-600 whitespace-nowrap">{log.timestamp}</td>
                <td className="py-4 px-6 font-medium text-gray-900">{log.user}</td>
                <td className="py-4 px-6">
                  <Badge text={log.action} color={getActionColor(log.action)} />
                </td>
                <td className="py-4 px-6 text-gray-600">{log.table}</td>
                <td className="py-4 px-6 text-gray-600">{log.recordId}</td>
                <td className="py-4 px-6 text-gray-600">{log.ip}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </MainLayout>
  );
}