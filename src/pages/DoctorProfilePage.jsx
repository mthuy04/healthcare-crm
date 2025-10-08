// src/pages/DoctorProfilePage.jsx
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Button from '../components/common/Button';
import InfoField from '../components/common/InfoField';

// 1. Mở rộng dữ liệu giả với nhiều thông tin hơn
const mockDoctorData = {
  '12345': { 
    name: 'Dr. Emily Carter', 
    specialty: 'Cardiology', 
    department: 'Cardiology', 
    email: 'emily.c@health.com', 
    phone: '(555) 111-2222',
    license: 'MD-12345678',
    experience: '12 Years',
    education: 'Harvard Medical School',
    status: 'On Duty',
  },
  '54321': { 
    name: 'Dr. David Lee', 
    specialty: 'Neurology', 
    department: 'Neurology', 
    email: 'david.l@health.com', 
    phone: '(555) 333-4444',
    license: 'MD-87654321',
    experience: '8 Years',
    education: 'Stanford University School of Medicine',
    status: 'On Duty',
  },
  '11223': { 
    name: 'Dr. Sarah Jones', 
    specialty: 'Pediatrics', 
    department: 'Pediatrics', 
    email: 'sarah.j@health.com', 
    phone: '(555) 555-6666',
    license: 'MD-11223344',
    experience: '5 Years',
    education: 'Johns Hopkins School of Medicine',
    status: 'On Leave',
  },
};

export default function DoctorProfilePage() {
  const { doctorId } = useParams();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    if (mockDoctorData[doctorId]) {
      setDoctor(mockDoctorData[doctorId]);
    }
  }, [doctorId]);

  if (!doctor) {
    return <MainLayout><div>Loading doctor profile...</div></MainLayout>;
  }

  return (
    <MainLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">{doctor.name}</h1>
        <Link to={`/doctors/edit/${doctorId}`}>
          <Button>Edit Profile</Button>
        </Link>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md">
        {/* 2. Sử dụng Grid 2 cột tương tự trang Patient Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          
          {/* Cột 1: Thông tin chuyên môn */}
          <section className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">Professional Details</h2>
            <InfoField label="Specialty" value={doctor.specialty} />
            <InfoField label="Department" value={doctor.department} />
            <InfoField label="Medical License" value={doctor.license} />
            <InfoField label="Years of Experience" value={doctor.experience} />
            <InfoField label="Education" value={doctor.education} />
          </section>

          {/* Cột 2: Thông tin liên lạc và trạng thái */}
          <div className="space-y-10">
            <section className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800">Contact Information</h2>
              <InfoField layout="inline" label="Email Address" value={doctor.email} />
              <InfoField layout="inline" label="Work Phone" value={doctor.phone} />
            </section>
            <section className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800">Status & Assignments</h2>
              <InfoField layout="inline" label="Current Status" value={doctor.status} />
              {/* Bạn có thể thêm các trường khác ở đây */}
            </section>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}