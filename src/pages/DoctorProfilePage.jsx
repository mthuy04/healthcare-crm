// src/pages/DoctorProfilePage.jsx
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Button from '../components/common/Button';
import InfoField from '../components/common/InfoField';

// Dữ liệu giả, trong thực tế bạn sẽ fetch từ API
const mockDoctorData = {
  '12345': { name: 'Dr. Emily Carter', specialty: 'Cardiology', department: 'Cardiology', email: 'emily.c@health.com', phone: '(555) 111-2222' },
  '54321': { name: 'Dr. David Lee', specialty: 'Neurology', department: 'Neurology', email: 'david.l@health.com', phone: '(555) 333-4444' },
  '11223': { name: 'Dr. Sarah Jones', specialty: 'Pediatrics', department: 'Pediatrics', email: 'sarah.j@health.com', phone: '(555) 555-6666' },
};

export default function DoctorProfilePage() {
  const { doctorId } = useParams();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    // Giả lập việc lấy dữ liệu bác sĩ dựa trên ID từ URL
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <section className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">Professional Information</h2>
            <InfoField label="Specialty" value={doctor.specialty} />
            <InfoField label="Department" value={doctor.department} />
          </section>
          <section className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">Contact Information</h2>
            <InfoField label="Email Address" value={doctor.email} />
            <InfoField label="Phone Number" value={doctor.phone} />
          </section>
        </div>
      </div>
    </MainLayout>
  );
}