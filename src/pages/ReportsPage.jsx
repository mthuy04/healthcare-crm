// src/pages/ReportsPage.jsx
import { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import Button from '../components/common/Button';
import PatientStatsReport from '../components/reports/PatientStatsReport';
import AppointmentStatsReport from '../components/reports/AppointmentStatsReport';

export default function ReportsPage() {
  const [reportType, setReportType] = useState('patient_stats');

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">System Reports</h1>

      {/* Filter Section */}
      <div className="bg-white p-4 rounded-lg shadow mb-8 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div>
            <label htmlFor="report-type" className="text-sm font-medium text-gray-700 mr-2">Report Type:</label>
            <select 
              id="report-type"
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
              className="px-4 py-2 border rounded-lg bg-gray-50 focus:outline-none"
            >
              <option value="patient_stats">Patient Statistics</option>
              <option value="appointment_stats">Appointment Statistics</option>
            </select>
          </div>
          {/* Thêm bộ lọc ngày tháng ở đây sau */}
        </div>
        <Button>Download Report</Button>
      </div>

      {/* Report Content */}
      <div>
        {reportType === 'patient_stats' && <PatientStatsReport />}
        {reportType === 'appointment_stats' && <AppointmentStatsReport />}
      </div>
    </MainLayout>
  );
}