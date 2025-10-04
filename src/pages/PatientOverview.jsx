// src/pages/PatientOverview.jsx
import MainLayout from '../components/layout/MainLayout';
import Button from '../components/common/Button';

export default function PatientOverview() {
  return (
    <MainLayout>
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Patient Overview</h1>
          <p className="text-gray-500 mt-1">Manage patient information for Sophia Clark</p>
        </div>
        <Button>Edit</Button>
      </div>

      <div className="bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">Patient Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          <p><span className="font-semibold">First Name:</span> Sofia</p>
          <p><span className="font-semibold">Last Name:</span> Clark</p>
          <p><span className="font-semibold">Date of Birth:</span> 1985-05-15</p>
          <p><span className="font-semibold">Gender:</span> Female</p>
          {/* Thêm các thông tin khác */}
        </div>
      </div>
    </MainLayout>
  );
}