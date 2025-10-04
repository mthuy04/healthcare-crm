// src/components/dashboard/AppointmentsChart.jsx
const departments = [
    { name: 'Cardiology', percentage: 75 },
    { name: 'Neurology', percentage: 90 },
    { name: 'Pediatrics', percentage: 80 },
    { name: 'Orthopedics', percentage: 60 },
    { name: 'Dermatology', percentage: 40 },
  ];
  
  export default function AppointmentsByDepartment() {
    return (
      <div className="bg-white p-6 rounded-lg shadow h-full">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Appointments by Department</h3>
        <div className="space-y-4">
          {departments.map(dept => (
            <div key={dept.name}>
              <p className="text-sm text-gray-600 mb-1">{dept.name}</p>
              <div className="bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-blue-500 h-2.5 rounded-full" 
                  style={{ width: `${dept.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }