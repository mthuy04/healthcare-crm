// src/components/appointments/ScheduleManagement.jsx
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US'; // 1. Sửa lại thành import
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = { 'en-US': enUS }; // 2. Sử dụng biến đã import
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

// Dữ liệu giả cho các cuộc hẹn (cập nhật lại ngày cho phù hợp)
const events = [
  {
    title: 'Liam Harper w/ Dr. Bennett',
    start: new Date(), // Bắt đầu từ hôm nay
    end: new Date(new Date().setHours(new Date().getHours() + 1)), // Kết thúc sau 1 tiếng
  },
  {
    title: 'Sophia Center w/ Dr. Walker',
    start: new Date(new Date().setDate(new Date().getDate() + 1)), // Ngày mai
    end: new Date(new Date().setDate(new Date().getDate() + 1)),
  }
];

export default function ScheduleManagement() {
  return (
    <div className="bg-white p-6 rounded-lg shadow" style={{ height: 600 }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultView="week"
      />
    </div>
  );
}