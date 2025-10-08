// src/pages/DoctorFormPage.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import Select from '../components/common/Select';

// Dữ liệu giả, trong thực tế bạn sẽ fetch (lấy) từ API
const mockDoctorData = {
  '12345': { name: 'Dr. Emily Carter', specialty: 'Cardiology', department: 'Cardiology' },
  '54321': { name: 'Dr. David Lee', specialty: 'Neurology', department: 'Neurology' },
  '11223': { name: 'Dr. Sarah Jones', specialty: 'Pediatrics', department: 'Pediatrics' },
};

export default function DoctorFormPage() {
  // Lấy doctorId từ URL, ví dụ: /doctors/edit/12345 -> doctorId sẽ là "12345"
  const { doctorId } = useParams(); 
  const navigate = useNavigate();
  
  // Biến isEditing sẽ là true nếu có doctorId, ngược lại là false
  const isEditing = Boolean(doctorId); 

  // State để lưu thông tin trên form
  const [name, setName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [department, setDepartment] = useState('');

  // useEffect sẽ chạy khi component được render
  useEffect(() => {
    // Nếu là trang Edit, tìm và điền thông tin bác sĩ vào form
    if (isEditing && mockDoctorData[doctorId]) {
      const doctor = mockDoctorData[doctorId];
      setName(doctor.name);
      setSpecialty(doctor.specialty);
      setDepartment(doctor.department);
    }
  }, [isEditing, doctorId]); // Chạy lại khi các giá trị này thay đổi

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, specialty, department };
    
    if (isEditing) {
      console.log("Updating doctor:", doctorId, formData);
      alert(`Doctor ${name} updated!`);
    } else {
      console.log("Creating new doctor:", formData);
      alert(`Doctor ${name} created!`);
    }
    
    navigate('/doctors'); // Sau khi submit, quay về trang danh sách
  };

  return (
    <MainLayout>
      <div className="max-w-xl mx-auto">
        {/* Tiêu đề thay đổi tùy theo là trang Add hay Edit */}
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          {isEditing ? 'Edit Doctor Profile' : 'Add New Doctor'}
        </h1>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            <Input label="Doctor Name" value={name} onChange={e => setName(e.target.value)} required />
            <Input label="Specialty" value={specialty} onChange={e => setSpecialty(e.target.value)} required />
            <Select label="Department" value={department} onChange={e => setDepartment(e.target.value)}>
              <option value="">Select a department</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Neurology">Neurology</option>
              <option value="Pediatrics">Pediatrics</option>
            </Select>

            <div className="mt-6">
              {/* Tên nút bấm cũng thay đổi theo ngữ cảnh */}
              <Button type="submit">{isEditing ? 'Save Changes' : 'Create Doctor'}</Button>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
}