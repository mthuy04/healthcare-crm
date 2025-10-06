// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import RoleAssignment from './pages/RoleAssignment';
import PatientOverview from './pages/PatientOverview';
import CreateUser from './pages/CreateUser';
import AuditLogs from './pages/AuditLogs';

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
      </Routes>
    </Router>
  );
}

export default App;