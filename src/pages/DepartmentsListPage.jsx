// src/pages/DepartmentsListPage.jsx
import MainLayout from '../components/layout/MainLayout';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';

const departmentsData = [
  { id: 'dept1', name: 'Cardiology', head: 'Dr. Emily Carter', doctorCount: 5 },
  { id: 'dept2', name: 'Neurology', head: 'Dr. David Lee', doctorCount: 3 },
  { id: 'dept3', name: 'Pediatrics', head: 'Dr. Sarah Jones', doctorCount: 4 },
];

const headers = ['Department Name', 'Head of Department', 'No. of Doctors', 'Actions'];

export default function DepartmentsListPage() {
  return (
    <MainLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Manage Departments</h1>
        <Link to="/departments/new">
          <Button>+ Add New Department</Button>
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              {headers.map(header => <th key={header} className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase">{header}</th>)}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {departmentsData.map(dept => (
              <tr key={dept.id}>
                <td className="py-4 px-6 font-semibold text-gray-900">{dept.name}</td>
                <td className="py-4 px-6 text-gray-600">{dept.head}</td>
                <td className="py-4 px-6 text-gray-600">{dept.doctorCount}</td>
                <td className="py-4 px-6">
                  <Link to={`/departments/edit/${dept.id}`} className="text-blue-600 hover:underline">
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </MainLayout>
  );
}