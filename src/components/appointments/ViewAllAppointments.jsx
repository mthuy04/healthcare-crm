// src/components/appointments/ViewAllAppointments.jsx
import Badge from '../common/Badge';

const appointments = [
    { id: 1, patient: 'Liam Harper', doctor: 'Dr. Olivia Bennett', dept: 'Cardiology', date: '2024-07-20', time: '10:00 AM', status: 'Scheduled' },
    { id: 2, patient: 'Sophia Center', doctor: 'Dr. Ethan Walker', dept: 'Neurology', date: '2024-07-20', time: '11:30 AM', status: 'Confirmed' },
    { id: 3, patient: 'Noal Foster', doctor: 'Dr. Isabella Hayes', dept: 'Pediatrics', date: '2024-07-21', time: '09:00 AM', status: 'Scheduled' },
];
const headers = ['Patient', 'Doctor', 'Department', 'Date & Time', 'Status', 'Actions'];

export default function ViewAllAppointments() {
    return (
        <div>
            {/* Filter Bar */}
            <div className="bg-white p-4 rounded-lg shadow mb-6">
                <p className="font-semibold">Filter & Search Appointments</p>
                {/* Các control filter sẽ được thêm ở đây */}
            </div>
            {/* Appointments Table */}
            <div className="bg-white rounded-lg shadow overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b">
                            {headers.map(h => <th key={h} className="p-4 text-left text-xs font-medium text-gray-500 uppercase">{h}</th>)}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {appointments.map(appt => (
                            <tr key={appt.id}>
                                <td className="p-4 font-medium">{appt.patient}</td>
                                <td className="p-4">{appt.doctor}</td>
                                <td className="p-4">{appt.dept}</td>
                                <td className="p-4">{appt.date} - {appt.time}</td>
                                <td className="p-4"><Badge text={appt.status} color={appt.status === 'Confirmed' ? 'green' : 'blue'} /></td>
                                <td className="p-4"><a href="#" className="text-blue-600 hover:underline">Details</a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}