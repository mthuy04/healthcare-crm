// src/pages/AppointmentsPage.jsx
import { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import ViewAllAppointments from '../components/appointments/ViewAllAppointments';
import ScheduleManagement from '../components/appointments/ScheduleManagement';

export default function AppointmentsPage() {
  const [activeTab, setActiveTab] = useState('list'); // 'list' hoặc 'calendar'

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Appointments</h1>

      {/* Tab Navigation */}
      <div className="flex border-b mb-6">
        <button
          onClick={() => setActiveTab('list')}
          className={`py-2 px-4 text-sm font-medium ${
            activeTab === 'list' 
            ? 'border-b-2 border-blue-500 text-blue-600' 
            : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          View All Appointments
        </button>
        <button
          onClick={() => setActiveTab('calendar')}
          className={`py-2 px-4 text-sm font-medium ${
            activeTab === 'calendar' 
            ? 'border-b-2 border-blue-500 text-blue-600' 
            : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Schedule Management
        </button>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'list' && <ViewAllAppointments />}
        {activeTab === 'calendar' && <ScheduleManagement />}
      </div>
    </MainLayout>
  );
}