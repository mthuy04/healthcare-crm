// src/pages/PatientOverview.jsx
import MainLayout from '../components/layout/MainLayout';
import Button from '../components/common/Button';
import SecondaryButton from '../components/common/SecondaryButton';
import InfoField from '../components/common/InfoField';

const patientData = {
  details: {
    firstName: 'Sofia', lastName: 'Clark', dob: '1985-05-15', gender: 'Female',
    address: '123 Maple Street, USA', phone: '(555) 123-4567',
    registrationDate: '2020-01-10', insurance: 'United Health',
  },
  emergencyContact: {
    name: 'Ethan Clark', relationship: 'Spouse', phone: '(555) 987-6543', email: 'ethan.clark@gmail.com',
  },
  medicalHistory: {
    allergies: 'Penicillin', medication: 'None', conditions: 'None', surgeries: 'Appendectomy',
  }
};

const tabs = ['Overview', 'Appointments', 'Medical Records', 'Medication', 'Questions', 'Feedback', 'Interactions'];

export default function PatientOverview() {
  const activeTab = 'Overview';

  return (
    <MainLayout>
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Patient Overview</h1>
        <p className="mt-1 text-gray-500">Manage patient information and history for Sophia Clark</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-6">
        <div className="lg:col-span-3">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200 mb-6">
            <nav className="-mb-px flex space-x-6 overflow-x-auto">
              {/* PHẦN CODE NÀY ĐÃ ĐƯỢC THÊM LẠI */}
              {tabs.map(tab => (
                <a
                  key={tab}
                  href="#"
                  className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                    activeTab === tab
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab}
                </a>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {/* Cột 1: Patient Details */}
              <section className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">Patient Details</h2>
            <InfoField label="First Name" value={patientData.details.firstName} />
            <InfoField label="Last Name" value={patientData.details.lastName} />
            <InfoField label="Date of Birth" value={patientData.details.dob} />
            <InfoField label="Gender" value={patientData.details.gender} />
            <InfoField label="Address" value={patientData.details.address} />
            <InfoField label="Phone Number" value={patientData.details.phone} />
            <InfoField label="Registration Date" value={patientData.details.registrationDate} />
            <InfoField label="Insurance" value={patientData.details.insurance} />
          </section>

              {/* Cột 2: Emergency Contact & Medical History */}
              <div className="space-y-10">
            {/* DÙNG LAYOUT "INLINE" Ở ĐÂY */}
            <section className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800">Emergency Contact</h2>
              <InfoField layout="inline" label="Contact Name" value={patientData.emergencyContact.name} />
              <InfoField layout="inline" label="Relationship" value={patientData.emergencyContact.relationship} />
              <InfoField layout="inline" label="Contact Phone" value={patientData.emergencyContact.phone} />
              <InfoField layout="inline" label="Contact Email" value={patientData.emergencyContact.email} />
            </section>

            {/* VÀ DÙNG LAYOUT "INLINE" Ở ĐÂY */}
            <section className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800">Medical History</h2>
              <InfoField layout="inline" label="Allergies" value={patientData.medicalHistory.allergies} />
              <InfoField layout="inline" label="Current Medication" value={patientData.medicalHistory.medication} />
              <InfoField layout="inline" label="Chronic Conditions" value={patientData.medicalHistory.conditions} />
              <InfoField layout="inline" label="Past Surgeries" value={patientData.medicalHistory.surgeries} />
            </section>
          </div>
            </div>
          </div>
        </div>

        {/* Right Column (Action Buttons) */}
        <div className="lg:col-span-1">
          <div className="flex flex-col items-stretch space-y-4">
            <Button>Edit</Button>
            <SecondaryButton>Add Appointment</SecondaryButton>
            <SecondaryButton>Add Record</SecondaryButton>
            <SecondaryButton>Prescribe Medication</SecondaryButton>
            <SecondaryButton>Add Interaction</SecondaryButton>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}