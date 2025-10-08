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
      </Routes>
    </Router>
  );
}

export default App;