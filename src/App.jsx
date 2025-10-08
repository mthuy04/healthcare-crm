// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import RoleAssignment from './pages/RoleAssignment';
import PatientOverview from './pages/PatientOverview';
import CreateUser from './pages/CreateUser';
import AuditLogs from './pages/AuditLogs';
import DoctorFormPage from './pages/DoctorFormPage';
import DoctorProfilePage from './pages/DoctorProfilePage';
import DepartmentsListPage from './pages/DepartmentsListPage';
import DepartmentFormPage from './pages/DepartmentFormPage';
import AppointmentsPage from './pages/AppointmentsPage';
import ReportsPage from './pages/ReportsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/roles" element={<RoleAssignment />} />
        {/* Giả sử ta xem overview của patient có ID 123 */}
        <Route path="/patient/123" element={<PatientOverview />} /> 
        <Route path="/users/create" element={<CreateUser />} />
        <Route path="/audit-logs" element={<AuditLogs />} />
        <Route path="/roles" element={<RoleAssignment />} />
        <Route path="/doctors/edit/:doctorId" element={<DoctorFormPage />} />
        <Route path="/doctors/profile/:doctorId" element={<DoctorProfilePage />} />
        <Route path="/departments" element={<DepartmentsListPage />} />
        <Route path="/departments/new" element={<DepartmentFormPage />} />
        <Route path="/departments/edit/:departmentId" element={<DepartmentFormPage />} />
        <Route path="/appointments" element={<AppointmentsPage />} />
        <Route path="/reports" element={<ReportsPage />} />

      </Routes>
    </Router>
  );
}

export default App;