// src/components/dashboard/UpcomingAppointmentsTable.jsx
import Badge from '../common/Badge';

const appointments = [
    { name: 'Liam Harper', doctor: 'Dr. Olivia Bennett', dept: 'Cardiology', date: '2024-07-20', time: '10:00 AM', status: 'Scheduled' },
    { name: 'Sophia Center', doctor: 'Dr. Ethan Walker', dept: 'Neurology', date: '2024-07-20', time: '11:30 AM', status: 'Confirmed' },
    { name: 'Noal Foster', doctor: 'Dr. Isabella Hayes', dept: 'Pediatrics', date: '2024-07-21', time: '09:00 AM', status: 'Scheduled' },
    { name: 'Ava Morgan', doctor: 'Dr. Caleb Reed', dept: 'Orthopedics', date: '2024-07-21', time: '14:00 PM', status: 'Confirmed' },
    { name: 'Jackson Cole', doctor: 'Dr. Amelia Foster', dept: 'Dermatology', date: '2024-07-22', time: '16:00 PM', status: 'Scheduled' },
];

const headers = ['Patient Name', 'Doctor', 'Department', 'Date', 'Time', 'Status'];

export default function UpcomingAppointmentsTable() {
    return (
        <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-xl text-gray-700 mb-4">Upcoming Appointments</h3>
            <table className="w-full">
                <thead>
                    <tr>
                        {headers.map(header => (
                            <th key={header} className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {appointments.map((appt, index) => (
                        <tr key={index}>
                            <td className="py-4 font-medium text-gray-900">{appt.name}</td>
                            <td className="py-4 text-gray-600">{appt.doctor}</td>
                            <td className="py-4 text-gray-600">{appt.dept}</td>
                            <td className="py-4 text-gray-600">{appt.date}</td>
                            <td className="py-4 text-gray-600">{appt.time}</td>
                            <td className="py-4">
                                <Badge text={appt.status} color={appt.status === 'Confirmed' ? 'green' : 'blue'} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}