// src/pages/CreateUser.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Import useNavigate
import MainLayout from '../components/layout/MainLayout';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import Select from '../components/common/Select';


export default function CreateUser() {
    const [username, setUsername] = useState('');
    const [role, setRole] = useState('');
    const [linkedId, setLinkedId] = useState('');
    const navigate = useNavigate(); // 2. Khởi tạo navigate
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newUser = { username, role, linkedId };
      console.log("Creating new user:", newUser);
  
      // 3. Hiển thị thông báo và chuyển trang
      alert(`User "${username}" created successfully!`);
      navigate('/users'); // Chuyển về lại trang danh sách Users
    };
  
    return (
    <MainLayout>
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800">Create user account</h1>
        <p className="mt-1 text-gray-500 mb-8">Fill in the details below to create a new user account.</p>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            <Input
              label="Username"
              placeholder="e.g., mthuy.04"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            
            <Select 
              label="Role" 
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Select a role</option>
              <option value="Doctor">Doctor</option>
              <option value="Patient">Patient</option>
              <option value="Admin">Admin</option>
            </Select>

            <Input
              label="Linked ID (Optional)"
              placeholder="Link to a Doctor or Patient ID"
              value={linkedId}
              onChange={(e) => setLinkedId(e.target.value)}
              helpText="Required if the role is Doctor or Patient"
            />
            
            <div className="mt-6">
              <Button type="submit">Create Account</Button>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
}