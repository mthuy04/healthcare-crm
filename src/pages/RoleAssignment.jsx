// src/pages/RoleAssignment.jsx
import MainLayout from '../components/layout/MainLayout';
import ToggleSwitch from '../components/common/ToggleSwitch';

const usersData = [
  { name: 'Dr. Emily Carter', role: 'Doctor', active: true },
  { name: 'Mr. Robert Johnson', role: 'Patient', active: true },
  { name: 'Ms. Olivia Brown', role: 'Admin', active: true },
  { name: 'Dr. David Lee', role: 'Doctor', active: false },
  { name: 'Mr. Ethan Williams', role: 'Patient', active: true },
];

export default function RoleAssignment() {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Role Assignment</h1>

        <div className="bg-white rounded-lg shadow">
          {/* Table Header */}
          <div className="flex items-center px-6 py-4 border-b">
            <div className="w-2/5 text-xs font-medium text-gray-500 uppercase">User</div>
            <div className="w-1/5 text-xs font-medium text-gray-500 uppercase">Role</div>
            <div className="w-1/5 text-xs font-medium text-gray-500 uppercase">Status</div>
            <div className="w-1/5 text-xs font-medium text-gray-500 uppercase">Action</div>
          </div>

          {/* Table Body */}
          <div>
            {usersData.map((user, index) => (
              <div key={user.name} className={`flex items-center px-6 py-4 ${index < usersData.length - 1 ? 'border-b' : ''}`}>
                <div className="w-2/5 font-semibold text-gray-800">{user.name}</div>
                <div className="w-1/5 text-gray-600">{user.role}</div>
                <div className="w-1/5">
                  <ToggleSwitch initialIsOn={user.active} />
                </div>
                <div className="w-1/5">
                  <a href="#" className="text-blue-600 hover:underline">Reset Password</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}